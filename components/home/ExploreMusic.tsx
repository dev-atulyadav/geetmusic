import { StaticImageData } from "next/image";
import ExploreMusicCard from "../card/ExploreMusicCard";
import Card1 from "@/assets/bgs/card1.svg";
import Card2 from "@/assets/bgs/card2.svg";
import Card3 from "@/assets/bgs/card3.svg";

export type CardType = {
  img: StaticImageData;
  p: any;
  link: LinkType;
};
type LinkType = {
  name: string;
  url: string;
};

export default function ExploreMusic() {
  const cardData: CardType[] = [
    {
      img: Card1,
      p: (
        <>
          <p>Listen to your favourite music anytime anywhere.</p>
          <p>Feel every beat with every breath.</p>
        </>
      ),
      link: {
        name: "Listen Now",
        url: "/",
      },
    },
    {
      img: Card2,
      p: (
        <>
          <p>Listen anytime anywhere with your family and friends.</p>
          <p>Enjoy every vide with everyone.</p>
        </>
      ),
      link: {
        name: "Check Now",
        url: "/",
      },
    },
    {
      img: Card3,
      p: (
        <>
          <p>Customize all your playlist as per your mood.</p>
          <p>Love every beat with your heart.</p>
        </>
      ),
      link: {
        name: "Create Now",
        url: "/",
      },
    },
  ];
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center py-8 px-8">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-semibold">Explore Music With Us...</h2>
        </div>
        <article className="flex">
          {cardData.map((data, index) => (
            <div key={index}>
              <ExploreMusicCard data={data} />
            </div>
          ))}
        </article>
      </main>
    </section>
  );
}
