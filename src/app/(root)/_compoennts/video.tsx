'use client';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    return;
  };

  return (
    <div className="relative h-[675px] bg-black group">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/api/placeholder/1920/1080"
        poster="/api/placeholder/1920/1080"
      />

      {/* Large Centered Play Button */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   bg-white/30 hover:bg-white/40 backdrop-blur-sm
                   rounded-full p-8 transition-all duration-300
                   group-hover:scale-110"
        >
          <Play className="w-12 h-12 text-white" />
        </button>
      )}
    </div>
  );
};

export default VideoSection;
