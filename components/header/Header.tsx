import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="py-4 px-10 flex justify-between items-center shadow-md overflow-hidden">
      <Link href="/" className="flex items-center gap-6">
        <Image
          src={Logo}
          className="scale-180"
          alt="Geet Music"
          width={20}
          height={20}
        />
        <h1 className="text-2xl font-bold uppercase relative z-10">Geet - Music</h1>
      </Link>

      <Nav />
    </header>
  );
}
