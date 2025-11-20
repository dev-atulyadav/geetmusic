import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardType } from "../home/ExploreMusic";

const ExploreMusicCard = ({ data }: { data: CardType }) => {
  return (
    <div className="shadow-xl rounded-xl p-6 m-4 flex flex-col justify-center items-center gap-4 max-w-xs">
      <div className="border-b">
        <Image src={data.img} alt="not found" height={250} width={250} />
      </div>
      <div className="text-center">{data.p}</div>

      <Link
        href={data.link.url}
        className="px-2 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-950 transition-colors font-semibold self-end"
      >
        {data.link.name}
      </Link>
    </div>
  );
};

export default ExploreMusicCard;
