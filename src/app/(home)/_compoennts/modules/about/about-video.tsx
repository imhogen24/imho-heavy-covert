"use client";

import MuxPlayer from "@mux/mux-player-react/lazy";
import { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Mux-hosted section video. Lazy: the player bundle is only fetched once the
 * placeholder scrolls into view, so it costs nothing on first paint.
 */
export function AboutVideo({
  playbackId,
  aspectRatio = "16 / 9",
  className,
}: {
  playbackId: string;
  /** The asset's aspect ratio, set explicitly so the slot reserves its height and the page doesn't shift. */
  aspectRatio?: string;
  className?: string;
}) {
  // The cue rests while the pointer is over the frame and picks back up when it
  // leaves; playing the video retires it for good.
  const [pointerOver, setPointerOver] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  return (
    // `@container` so the halo's breakpoint tracks the player's own width,
    // which is what media-chrome sizes its play button against.
    <div
      className={cn("@container relative", className)}
      style={{ width: "100%", aspectRatio }}
      onPointerEnter={() => setPointerOver(true)}
      onPointerLeave={() => setPointerOver(false)}
    >
      <MuxPlayer
        playbackId={playbackId}
        streamType="on-demand"
        loading="viewport"
        accentColor="#EF7D00"
        onPlay={() => setHasPlayed(true)}
        className={cn(!hasPlayed && !pointerOver && "about-video-attention")}
        metadata={{
          video_id: `about-${playbackId}`,
          video_title:
            "Building the Invisible Infrastructure of Industrialization",
          player_name: "IMHO GEN landing — about",
        }}
        style={{ width: "100%", aspectRatio }}
      />
    </div>
  );
}
