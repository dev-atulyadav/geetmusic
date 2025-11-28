"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPlay, 
  FaPause, 
  FaStepForward, 
  FaStepBackward, 
  FaVolumeUp,
  FaVolumeMute,
  FaRandom,
  FaRedo,
  FaHeart,
  FaRegHeart
} from 'react-icons/fa';
import MusicList from './MusicList';

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(240);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const progressRef = useRef(null);

  const currentSong = {
    title: "Midnight Dreams",
    artist: "Luna Eclipse",
    album: "Stellar Waves",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop"
  };

  useEffect(() => {
    let interval;
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => Math.min(prev + 1, duration));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    setCurrentTime(percent * duration);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className=" flex items-start justify-between p-4 pt-12 overflow-hidden h-screen">
      <MusicList/>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md scale-75 bottom-12"
      >
        {/* Blur Background Effect */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-3xl" />
        
        {/* Main Container */}
        <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          
          {/* Album Art Section */}
          <div className="p-8 pb-6">
            <motion.div 
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={currentSong.cover} 
                alt={currentSong.album}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Play Button */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={togglePlay}
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <FaPlay className="text-3xl text-purple-600 ml-1" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Song Info */}
          <div className="px-8 pb-4 text-center">
            <motion.h2 
              className="text-2xl font-bold text-white mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {currentSong.title}
            </motion.h2>
            <motion.p 
              className="text-white/70 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {currentSong.artist}
            </motion.p>
          </div>

          {/* Progress Bar */}
          <div className="px-8 pb-4">
            <div 
              ref={progressRef}
              onClick={handleProgressClick}
              className="relative h-1.5 bg-white/20 rounded-full cursor-pointer group"
            >
              <motion.div 
                className="absolute h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              >
                <motion.div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2 }}
                />
              </motion.div>
            </div>
            <div className="flex justify-between text-xs text-white/60 mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="px-8 pb-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsShuffle(!isShuffle)}
                className={`p-3 rounded-full transition-colors ${
                  isShuffle ? 'bg-purple-500 text-white' : 'bg-white/10 text-white/70'
                }`}
              >
                <FaRandom className="text-sm" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentTime(0)}
                className="p-4 bg-white/10 rounded-full text-white/90 hover:bg-white/20 transition-colors"
              >
                <FaStepBackward className="text-lg" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-2xl shadow-purple-500/50"
              >
                {isPlaying ? (
                  <FaPause className="text-2xl" />
                ) : (
                  <FaPlay className="text-2xl ml-1" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/10 rounded-full text-white/90 hover:bg-white/20 transition-colors"
              >
                <FaStepForward className="text-lg" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsRepeat(!isRepeat)}
                className={`p-3 rounded-full transition-colors ${
                  isRepeat ? 'bg-purple-500 text-white' : 'bg-white/10 text-white/70'
                }`}
              >
                <FaRedo className="text-sm" />
              </motion.button>
            </div>

            {/* Volume & Like */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {isMuted || volume === 0 ? (
                    <FaVolumeMute className="text-xl" />
                  ) : (
                    <FaVolumeUp className="text-xl" />
                  )}
                </motion.button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(Number(e.target.value));
                    if (isMuted) setIsMuted(false);
                  }}
                  className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLiked(!isLiked)}
                className="ml-4 text-2xl"
              >
                {isLiked ? (
                  <FaHeart className="text-pink-500" />
                ) : (
                  <FaRegHeart className="text-white/70" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl -z-10" />
      </motion.div>
    </div>
  );
};

export default MediaPlayer;