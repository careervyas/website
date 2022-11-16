import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
export default function Card({ data }) {
  const imageProps = useNextSanityImage(client, data.mainImage);

  return (
    <div className="w-72 lg:w-80 h-full rounded-md overflow-hidden ring-2 ring-slate-300 hover:shadow-lg hover:shadow-blue-400 my-2 mx-4 flex flex-col items-center bg-white">
      <div className="w-auto h-7/12 relative">
        <Image
          className={"rounded-md"}
          src={imageProps.src}
          alt="Servon"
          width={500}
          height={250}
          objectFit="cover"
          layout="intrinsic"
        />

        <p
          className="bg-red-700 text-white text-center absolute top-3 left-2 w-12
        rounded-md"
        >
          New
        </p>
      </div>
      <div className="p-2 h-[320px]">
        <div className="font-bold text-xl mb-1 my-1">{data.title}</div>
        <p className="text-gray-700 text-base">
          <span className="text-blue-500 font-bold">
            {data._createdAt.slice(0, 10)}{" "}
          </span>
          <br></br>
          {data.excerpt}
        </p>
      </div>
      <Link
        href={{ pathname: "/slug", query: { keyword: `${data.slug.current}` } }}
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-2">
          Read More
        </button>
      </Link>
    </div>
  );
}
