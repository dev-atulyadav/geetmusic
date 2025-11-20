import React from "react";
import Video from "./Video";
import { FaUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="w-full h-[100vh] flex justify-start items-center bg-amber-50 relative overflow-hidden">
      <Video />
      <main className="relative z-10 flex flex-col items-start justify-center h-full px-8">
        <article>
          <h1 className="text-6xl font-bold text-center mt-10 text-white">
            Welcome to Geet Music
          </h1>
          <p className="text-left text-lg mt-4 text-white">
            Discover, Stream, and Share Your Favorite Tunes
          </p>
          <p className="text-left text-xs mt-4 max-w-2xl text-white">
            Dive into a world of music with Geet Music, your ultimate
            destination for discovering new artists, streaming your favorite
            tracks, and sharing playlists with friends.
          </p>
          <p className="text-left text-xs mt-2 max-w-xl text-white">
            Whether you're into pop, rock, jazz, or classical, Geet Music has
            something for every music lover. Join us today and let the music
            play!
          </p>
        </article>
        <div className="flex justify-start items-center">
          <Link
            href="/explore"
            className="mt-6 px-2.5 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-950 transition-colors flex justify-center items-center gap-2 font-semibold"
          >
            <p>Explore</p>
            <FaUpRightFromSquare size={15} />
          </Link>
        </div>
      </main>
    </section>
  );
};

export default HomePage;
