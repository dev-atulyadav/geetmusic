import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardType } from "../home/ExploreMusic";

const ExploreMusicCard = ({ data }: { data: CardType }) => {
  return (
    <div className="flex justify-center items-center gap-8 inset-3xl flex-col p-4 rounded-xl bg-white">
      <div className="bg-gray-100 inset-3xl rounded-tl-2xl rounded-br-2xl w-full flex justify-center items-center py-4">
        <Image src={data.img} alt="not found" height={250} width={250} />
      </div>
      <div className="w-[80%]">{data.p}</div>

      <Link
        href={data.link.url}
        className="self-end px-2 py-1.5 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white duration-300"
      >
        {data.link.name}
      </Link>
    </div>
  );
};

export default ExploreMusicCard;
