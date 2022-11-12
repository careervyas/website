import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";

export default function Card({ post }) {
  const imageProps = useNextSanityImage(client, post.mainImage);

  return (
    <div
      className="w-full h-full  rounded-lg ring-2 ring-blue-300 my-2 flex flex-row items-center bg-white hover:shadow-md hover:shadow-blue-600 hover:ring-blue-500
    cursor-pointer shadow-sm shadow-white p-2"
    >
      <img
        src={imageProps.src}
        alt="Career Vyas Blogs"
        className="w-1/2 h-full rounded-md"
      />

      <div className="w-1/2 h-full mx-2">
        <div className="font-bold text-sm mb-1 my-1">{post.title}</div>
        <p className="text-gray-700 text-xs">{post.excerpt}</p>
      </div>
    </div>
  );
}

// md:flex-row md:max-w-sm
{
  /* <divclassNameName="flex justify-center h-40 w-4/5">
<divclassNameName="flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
  <img
    
    src=""
    alt="servon"
  />
  <divclassNameName="flex flex-col justify-start">
    <h5classNameName="text-blue-700 text-base font-medium m-1">
      Card title
    </h5>
    <pclassNameName="text-gray-700 text-sm mx-2">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
  </div>
</div>
</div> */
}
