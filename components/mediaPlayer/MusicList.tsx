import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPlay, 
  FaPause, 
  FaHeart, 
  FaRegHeart,
  FaEllipsisV,
  FaClock,
  FaMusic,
  FaSearch,
  FaFilter
} from 'react-icons/fa';

const MusicList = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [likedSongs, setLikedSongs] = useState(new Set([1, 3]));
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGenre, setFilterGenre] = useState('all');

  const songs = [
    {
      id: 1,
      title: "Midnight Dreams",
      artist: "Luna Echo",
      album: "Neon Nights",
      duration: "4:32",
      genre: "Electronic",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      title: "Sunset Boulevard",
      artist: "The Wanderers",
      album: "City Lights",
      duration: "3:45",
      genre: "Rock",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      title: "Ocean Waves",
      artist: "Serene Sounds",
      album: "Natural Harmony",
      duration: "5:18",
      genre: "Ambient",
      cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      title: "Electric Soul",
      artist: "Voltage",
      album: "Power Surge",
      duration: "3:56",
      genre: "Electronic",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      title: "Mountain Echo",
      artist: "Alpine Hearts",
      album: "Summit",
      duration: "4:22",
      genre: "Folk",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=100&h=100&fit=crop"
    },
    {
      id: 6,
      title: "Neon Lights",
      artist: "Cyber Dreams",
      album: "Digital Age",
      duration: "3:38",
      genre: "Electronic",
      cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=100&h=100&fit=crop"
    },
    {
      id: 7,
      title: "Jazz Cafe",
      artist: "Smooth Vibes",
      album: "Late Night",
      duration: "4:15",
      genre: "Jazz",
      cover: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=100&h=100&fit=crop"
    },
    {
      id: 8,
      title: "Desert Winds",
      artist: "Mirage",
      album: "Oasis",
      duration: "5:02",
      genre: "World",
      cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=100&h=100&fit=crop"
    }
  ];

  const genres = ['all', ...new Set(songs.map(s => s.genre))];

  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.album.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = filterGenre === 'all' || song.genre === filterGenre;
    return matchesSearch && matchesGenre;
  });

  const toggleLike = (id) => {
    const newLiked = new Set(likedSongs);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedSongs(newLiked);
  };

  const togglePlay = (id) => {
    setCurrentPlaying(currentPlaying === id ? null : id);
  };

  return (
    <div className="mt-10">
      <div className="xl:max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2"
        >
          <h1 className="text-5xl font-bold mb-2 flex items-center gap-3">
            <FaMusic className="" />
            My Playlist
          </h1>
          <p className="text-lg">{songs.length} songs • 34 min</p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2  " />
              <input
                type="text"
                placeholder="Search songs, artists, albums..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 ring focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Genre Filter */}
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2   pointer-events-none" />
              <select
                value={filterGenre}
                onChange={(e) => setFilterGenre(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-xl pl-12 pr-10 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 min-w-[180px]"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre} className="bg-purple-900">
                    {genre.charAt(0).toUpperCase() + genre.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Song List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-scroll h-[28rem] pb-32 border border-white/20"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10   text-sm font-semibold">
            <div className="col-span-1">#</div>
            <div className="col-span-5">TITLE</div>
            <div className="col-span-3 hidden md:block">ALBUM</div>
            <div className="col-span-2 hidden sm:block">GENRE</div>
            <div className="col-span-1 flex justify-end items-center">
              <FaClock />
            </div>
          </div>

          {/* Song Rows */}
          <AnimatePresence mode="popLayout">
            {filteredSongs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-6 py-12 text-center  "
              >
                <FaMusic className="text-5xl mx-auto mb-4 opacity-50" />
                <p className="text-lg">No songs found</p>
              </motion.div>
            ) : (
              filteredSongs.map((song, index) => (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-white/10 transition-colors cursor-pointer group ${
                    currentPlaying === song.id ? 'bg-purple-500/20' : ''
                  }`}
                  onClick={() => togglePlay(song.id)}
                >
                  {/* Index/Play Button */}
                  <div className="col-span-1 flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <span className="  group-hover:hidden">
                        {currentPlaying === song.id ? '🎵' : index + 1}
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay(song.id);
                        }}
                        className="hidden group-hover:block"
                      >
                        {currentPlaying === song.id ? (
                          <FaPause className=" text-lg" />
                        ) : (
                          <FaPlay className="text-purple-400 text-lg" />
                        )}
                      </motion.button>
                    </div>
                  </div>

                  {/* Title & Artist */}
                  <div className="col-span-5 flex items-center gap-3">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={song.cover}
                      alt={song.title}
                      className="w-12 h-12 rounded-lg object-cover shadow-lg"
                    />
                    <div className="min-w-0">
                      <p className={`font-semibold truncate ${
                        currentPlaying === song.id ? 'text-purple-400' : ''
                      }`}>
                        {song.title}
                      </p>
                      <p className="text-sm   truncate">{song.artist}</p>
                    </div>
                  </div>

                  {/* Album */}
                  <div className="col-span-3 hidden md:block">
                    <p className="  truncate text-sm">{song.album}</p>
                  </div>

                  {/* Genre */}
                  <div className="col-span-2 hidden sm:block">
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/30   text-xs font-medium">
                      {song.genre}
                    </span>
                  </div>

                  {/* Duration & Actions */}
                  <div className="col-span-1 flex items-center justify-end gap-2">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(song.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2"
                    >
                      {likedSongs.has(song.id) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart className=" " />
                      )}
                    </motion.button>
                    <span className="  text-sm w-12 text-right">
                      {song.duration}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2"
                    >
                      <FaEllipsisV className=" " />
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex justify-between items-center   text-sm"
        >
          <p>Showing {filteredSongs.length} of {songs.length} songs</p>
          <p>{likedSongs.size} liked songs</p>
        </motion.div>
      </div>
    </div>
  );
};

export default MusicList;