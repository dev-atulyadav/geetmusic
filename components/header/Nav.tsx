import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center gap-16 text-xs">
      <div>
        <form className="flex items-center gap-4">
          <input
            className="border inset-shadow-gray-300 inset-shadow-sm bg-gray-100 border-gray-300 outline-none focus:border-emerald-500 focus:bg-gray-50 duration-300 rounded-full px-3 py-2 w-[16rem]"
            type="search"
            placeholder="Search music, albums, artists here..."
          />
          <button
            className="hover:bg-red-500 hover:text-white transition-all duration-300 text-red-500 border border-red-500 font-semibold cursor-pointer px-6 py-2 rounded-full"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex items-center gap-4 font-semibold uppercase">
        <Link
          className="text-blue-500 bg-white hover:bg-blue-500 hover:text-white border border-blue-500 rounded-full px-6 py-2 transition-all duration-300"
          href="/login"
        >
          Login
        </Link>
        <Link
          className="text-green-500 bg-white hover:bg-green-500 hover:text-white border border-green-500 rounded-full px-5 py-2 transition-all duration-300"
          href="/signup"
        >
          <span>Sign Up</span>
        </Link>
      </div>
    </nav>
  );
}
