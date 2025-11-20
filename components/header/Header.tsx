import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

export default function Header() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
      isActive: true,
    },
    {
      name: "Pricing",
      href: "/pricing",
      isActive: false,
    },
    {
      name: "About Us",
      href: "/about",
      isActive: false,
    },
  ];
  return (
    <header className="py-2 px-4 flex justify-between items-center fixed w-full backdrop-blur-xs bg-white/30 z-50 h-14 shadow-xl">
      <Link href="/" className="flex items-center gap-6">
        <Image
          src={Logo}
          className="scale-180"
          alt="Geet Music"
          width={15}
          height={20}
        />
        <h1 className="text-lg font-bold uppercase relative z-10">
          Geet - Music
        </h1>
      </Link>
      <nav className=" text-sm absolute left-1/2 transform -translate-x-1/2">
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`inline-block mx-4 border-b-2 ${
                link.isActive
                  ? "border-blue-500"
                  : "hover:border-blue-500 border-transparent"
              } pb-1`}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="">
        <Link
          href="/login"
          className="border px-2.5 py-1.5 hover:text-emerald-500 border-emerald-500 rounded-lg bg-emerald-500 text-white transition-colors hover:bg-white"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
