import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import Link from "next/link";

export default function Card({ post }) {
  const imageProps = useNextSanityImage(client, post.mainImage);

  return (
    <Link
      href={{ pathname: "/slug", query: { keyword: `${post.slug.current}` } }}
    >
      <div className="h-[155px] w-[330px] rounded-lg my-2 flex flex-row items-center bg-white hover:shadow-md cursor-pointer shadow-sm shadow-white p-2">
        <img
          src={imageProps.src}
          layout="fill"
          alt="Career Vyas Blogs"
          className="w-1/3 aspect-[75%] object-contain h-full rounded-md"
        />

        <div className="w-1/2 h-full mx-2">
          <div className="font-bold text-sm mb-1 my-1 line-clamp-2">
            {post.title}
          </div>
          <p className="text-gray-700 text-xs line-clamp-4">Class X</p>
          <p className="text-gray-700 text-xs line-clamp-4">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
