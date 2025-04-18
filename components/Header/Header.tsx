import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.gif";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center shadow-md overflow-hidden">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src={Logo}
          className="scale-180"
          alt="Geet Music"
          width={50}
          height={50}
        />
        <h1 className="text-3xl font-bold relative z-10">Geet Music</h1>
      </Link>

      <Nav />
    </header>
  );
}
