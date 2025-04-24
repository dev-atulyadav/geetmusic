import Image from "next/image";
import Link from "next/link";
import Bg1 from "@/assets/bgs/bg1.svg";
import { TiArrowRightThick } from "react-icons/ti";

export default function LandingPage() {
  return (
    <section className="flex items-center justify-between h-[80vh] p-10">
      <main className="flex items-center justify-center inset-3xl bg-gray-200 rounded-xl h-full w-full p-10">
        <article className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-4xl font-bold font- uppercase">
            Geet - Official Music Streaming Platform
          </h1>
          <div>
            <p className="text-2xl uppercase font-semibold">
              Feel the music in every breath.
            </p>
            <p className="text-lg">Listen,Love,Feel and More...</p>
          </div>
          <Link
            href="/about-us"
            className="bg-green-500 uppercase font-semibold text-white px-3 py-1.5 rounded-full flex items-center  gap-2 justify-center"
          >
            <p>Explore</p>
            <span>
              <TiArrowRightThick className="text-3xl" />
            </span>
          </Link>
        </article>
        <aside>
          <Image src={Bg1} width={500} height={500} alt="Geet Music" />
        </aside>
      </main>
    </section>
  );
}
