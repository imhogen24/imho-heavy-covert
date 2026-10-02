"use client";

import { useRef, useEffect, useCallback, CSSProperties } from "react";

type Pattern =
  | "corner-br"
  | "corner-bl"
  | "corner-tr"
  | "corner-tl"
  | "edges"
  | "center"
  | "cursor";

interface PixelBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
  pattern?: Pattern;
  speed?: number;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

interface AnimState {
  cols: number;
  rows: number;
  dpr: number;
  displayed: Float32Array | null;
  revealLevel: Float32Array | null;
  targets: Float32Array | null;
  delays: Float32Array | null;
  // per-pixel flicker: each pixel lerps toward its own target opacity
  flickerTargets: Float32Array | null;
  // countdown (seconds) until this pixel picks a new flicker target
  flickerTimers: Float32Array | null;
  animating: boolean;
  hovering: boolean;
  animFrameId: number | null;
  lastTime: number;
}

export const PixelBackground = ({
  squareSize = 2,
  gridGap = 4,
  color = "#ffffff",
  maxOpacity = 0.85,
  flickerChance = 0.35,
  pattern = "corner-br",
  speed = 1.5,
  className = "",
  style = {},
  children,
  ...props
}: PixelBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const colorPrefixRef = useRef<string>("rgba(255,255,255,");

  const stateRef = useRef<AnimState>({
    cols: 0,
    rows: 0,
    dpr: 1,
    displayed: null,
    revealLevel: null,
    targets: null,
    delays: null,
    flickerTargets: null,
    flickerTimers: null,
    animating: false,
    hovering: false,
    animFrameId: null,
    lastTime: 0,
  });

  useEffect(() => {
    const tmp = document.createElement("canvas");
    tmp.width = tmp.height = 1;
    const ctx = tmp.getContext("2d");

    if (!ctx) return;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    colorPrefixRef.current = `rgba(${r},${g},${b},`;
  }, [color]);

  const setupGrid = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const step = squareSize + gridGap;
    const cols = Math.ceil(w / step);
    const rows = Math.ceil(h / step);
    const n = cols * rows;
    const s = stateRef.current;
    s.cols = cols;
    s.rows = rows;
    s.dpr = dpr;
    s.displayed = new Float32Array(n);
    s.revealLevel = new Float32Array(n);
    s.targets = new Float32Array(n);
    s.delays = new Float32Array(n);
    s.flickerTargets = new Float32Array(n);
    // stagger initial timers so pixels don't all pick new targets simultaneously
    s.flickerTimers = Float32Array.from({ length: n }, () => Math.random() * 2);
  }, [squareSize, gridGap]);

  const computeDelays = useCallback(
    (pat: Pattern, enterCol: number, enterRow: number) => {
      const { cols, rows, delays } = stateRef.current;

      if (!delays) return;
      const raw = new Float32Array(cols * rows);
      let maxD = 0;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const idx = c * rows + r;
          let d = 0;

          if (pat === "corner-br")
            d = Math.hypot(c - (cols - 1), r - (rows - 1));
          else if (pat === "corner-bl") d = Math.hypot(c, r - (rows - 1));
          else if (pat === "corner-tr") d = Math.hypot(c - (cols - 1), r);
          else if (pat === "corner-tl") d = Math.hypot(c, r);
          else if (pat === "edges")
            d = Math.min(c, cols - 1 - c, r, rows - 1 - r);
          else if (pat === "center") d = Math.hypot(c - cols / 2, r - rows / 2);
          else if (pat === "cursor") d = Math.hypot(c - enterCol, r - enterRow);
          raw[idx] = d;

          if (d > maxD) maxD = d;
        }
      }

      const maxDelay = 0.65 / speed;

      for (let i = 0; i < raw.length; i++) {
        delays[i] = (raw[i] / (maxD || 1)) * maxDelay;
      }
    },
    [speed],
  );

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;
    const { cols, rows, displayed, dpr } = stateRef.current;

    if (!displayed) return;
    const step = (squareSize + gridGap) * dpr;
    const sq = squareSize * dpr;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const prefix = colorPrefixRef.current;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const op = displayed[c * rows + r];

        if (op < 0.005) continue;
        ctx.fillStyle = `${prefix}${op.toFixed(3)})`;
        ctx.fillRect(c * step, r * step, sq, sq);
      }
    }
  }, [squareSize, gridGap]);

  const tick = useCallback(
    (time: number) => {
      const s = stateRef.current;

      if (
        !s.displayed ||
        !s.revealLevel ||
        !s.targets ||
        !s.delays ||
        !s.flickerTargets ||
        !s.flickerTimers
      )
        return;

      const dt = Math.min((time - s.lastTime) / 1000, 0.05);
      s.lastTime = time;

      const {
        displayed,
        revealLevel,
        targets,
        delays,
        flickerTargets,
        flickerTimers,
      } = s;

      let anyActive = false;
      const ls = 6 * speed;
      // how fast displayed lerps toward its flicker target (reach ~95% in ~1s)
      const flickerLerpSpeed = 1.8;
      // base interval between target picks, scaled by flickerChance (lower = less frequent)
      const baseInterval = 1.5 / (flickerChance + 0.05);

      for (let i = 0; i < revealLevel.length; i++) {
        if (delays[i] > 0) {
          delays[i] = Math.max(0, delays[i] - dt);
          anyActive = true;

          if (delays[i] > 0) continue;
        }

        const diff = targets[i] - revealLevel[i];

        if (Math.abs(diff) > 0.004) {
          revealLevel[i] += diff * Math.min(1, dt * ls);
          anyActive = true;
        } else {
          revealLevel[i] = targets[i];
        }

        const ceil = revealLevel[i];

        if (ceil < 0.005) {
          displayed[i] = 0;
          flickerTargets[i] = 0;
        } else {
          // tick down the timer; when it expires pick a new smooth target
          flickerTimers[i] -= dt;

          if (flickerTimers[i] <= 0) {
            // new target is a random opacity between 20%–100% of ceil so it never fully vanishes
            flickerTargets[i] = (0.2 + Math.random() * 0.8) * ceil;
            // next change happens after a random interval
            flickerTimers[i] = baseInterval * (0.5 + Math.random());
          }

          // smoothly lerp displayed toward flickerTarget
          const fdiff = flickerTargets[i] - displayed[i];

          if (Math.abs(fdiff) > 0.002) {
            displayed[i] += fdiff * Math.min(1, dt * flickerLerpSpeed);
          } else {
            displayed[i] = flickerTargets[i];
          }

          anyActive = true;
        }
      }

      drawFrame();

      if (anyActive || s.hovering) {
        s.animFrameId = requestAnimationFrame(tick);
      } else {
        s.animating = false;
      }
    },
    [drawFrame, speed, flickerChance],
  );

  const startAnim = useCallback(() => {
    const s = stateRef.current;

    if (s.animating) return;
    s.animating = true;
    s.lastTime = performance.now();
    s.animFrameId = requestAnimationFrame(tick);
  }, [tick]);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const s = stateRef.current;

      if (!s.displayed || !s.targets) return;
      s.hovering = true;
      const rect = containerRef.current!.getBoundingClientRect();
      const step = squareSize + gridGap;
      const ec = Math.floor((e.clientX - rect.left) / step);
      const er = Math.floor((e.clientY - rect.top) / step);
      computeDelays(pattern, ec, er);
      s.targets.fill(maxOpacity);
      startAnim();
    },
    [pattern, squareSize, gridGap, maxOpacity, computeDelays, startAnim],
  );

  const handleMouseLeave = useCallback(() => {
    const s = stateRef.current;

    if (!s.delays || !s.targets) return;
    s.hovering = false;
    s.delays.fill(0);
    s.targets.fill(0);
    startAnim();
  }, [startAnim]);

  useEffect(() => {
    setupGrid();
    const ro = new ResizeObserver(setupGrid);

    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      const s = stateRef.current;

      if (s.animFrameId) cancelAnimationFrame(s.animFrameId);
    };
  }, [setupGrid]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};
