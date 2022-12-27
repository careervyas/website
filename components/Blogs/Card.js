import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
export default function Card({ data }) {
  const imageProps = useNextSanityImage(client, data.mainImage);

  return (
    <div className="flex flex-col items-center bg-white shadow-2xl w-80 h-full rounded-md my-2 mx-4">
      <div className="w-auto h-7/12 p-2 relative">
        <Image
          className={"rounded-md"}
          src={imageProps.src}
          alt="Servon"
          width={500}
          height={250}
          objectFit="cover"
          layout="intrinsic"
        />

        <p className="bg-red-700 text-white text-center absolute top-5 left-5 w-12 rounded-md">
          New
        </p>
      </div>
      <div className="p-2 h-[300px]">
        <div className="font-bold text-xl mb-4 line-clamp-2">{data.title}</div>
        <p className="text-gray-700 text-base line-clamp-[10]">
          {data.excerpt}
        </p>
      </div>
      <Link
        href={{ pathname: "/slug", query: { keyword: `${data.slug.current}` } }}
      >
        <div className="bg-[#6776FF] text-white py-2 px-4 rounded-lg mb-4">
          Read More
        </div>
      </Link>
    </div>
  );
}
