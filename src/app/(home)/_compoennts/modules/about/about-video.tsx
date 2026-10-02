"use client";

import MuxPlayer from "@mux/mux-player-react/lazy";

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
  return (
    <MuxPlayer
      playbackId={playbackId}
      streamType="on-demand"
      loading="viewport"
      accentColor="#EF7D00"
      metadata={{
        video_id: `about-${playbackId}`,
        video_title:
          "Building the Invisible Infrastructure of Industrialization",
        player_name: "IMHO GEN landing — about",
      }}
      className={className}
      style={{ width: "100%", aspectRatio }}
    />
  );
}
