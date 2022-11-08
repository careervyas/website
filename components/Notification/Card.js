import Image from "next/image";
import { useNextSanityImage } from 'next-sanity-image';
import client from '../client';

export default function Card({ post }) {
  const imageProps = useNextSanityImage(client, post.Image);
  return (
    <div
      className="w-72 h-fit rounded  ring-2
         ring-blue-300 shadow-lg my-2 mx-auto
         relative"
    >
      <img
        className="w-full h-2/5"
        src={imageProps.src}
        alt="Servon"
      />

      <div className="p-2">
        <div className="font-bold text-xl mb-1 my-1">{post.title}</div>
        <p className="text-gray-700 text-sm">
          <span className="text-blue-500 font-bold">
             {post.PublishedAt.slice(0,10)+" "+post.PublishedAt.slice(11,17)+"  "}</span>
          {post.description}
        </p>
      </div>
    </div>
  );
}
