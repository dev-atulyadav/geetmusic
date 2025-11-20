import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="w-full min-h-screen border-b border-gray-200">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl uppercase font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where melodies meet hearts and stories come alive through sound
          </p>
        </div>
        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Universal Connection
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    At Geet Music, we believe that music is the universal
                    language that connects hearts across cultures and borders.
                    Born from a passion for bringing the world's most beautiful
                    melodies to your fingertips, Geet Music is more than just a
                    streaming platform – it's your personal gateway to an
                    infinite world of musical discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"></div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Our mission is simple yet profound: to make every song, from
                    every corner of the globe, accessible to music lovers
                    everywhere. Whether you're seeking the latest chart-toppers,
                    timeless classics, or hidden gems from emerging artists,
                    Geet Music curates an expansive library that celebrates the
                    rich diversity of musical expression. We understand that
                    every listener has a unique story, and we're here to
                    soundtrack yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full"></div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-cyan-200 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-sky-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Community & Connection
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    What sets Geet Music apart is our commitment to creating
                    meaningful connections between artists and audiences. We
                    don't just stream music; we foster a community where
                    creativity thrives, where new voices are amplified, and
                    where the magic of discovery never ends. Our intelligent
                    recommendation engine learns your preferences while
                    introducing you to artists and genres you never knew you
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 rounded-full"></div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-orange-200 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🎼</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Global Musical Journey
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    From the bustling streets of Mumbai to the jazz clubs of New
                    Orleans, from indie bedrooms to grand concert halls, Geet
                    Music brings the entire spectrum of human musical creativity
                    directly to you. Join millions of music enthusiasts who have
                    made Geet Music their trusted companion for life's every
                    moment – because great music deserves to be heard, shared,
                    and celebrated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          {/* <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Discover your next favorite song, artist, or genre with Geet Music
            </p>
            <Link
              href={"/login"}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg"
            >
              Start Listening Now
            </Link>
          </div> */}
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">50M+</div>
            <div className="text-gray-600">Songs Available</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-pink-600 mb-2">2M+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
            <div className="text-gray-600">Artists</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">190+</div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AboutUs;
