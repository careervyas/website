import Card from "./Card";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import { useEffect } from "react";
import { useState } from "react";

async function getPosts() {
  const posts = await client.fetch(groq`
    *[_type == "post"]
  `);
  return posts;
}

export default function Dairies() {
  const [postData, setpostData] = useState([]);

  useEffect(() => {
    let postarr = [];
    getPosts().then((posts) => {
      posts.forEach(async (post) => {
        if (post?.categories !== undefined) {
          const cat = await client.fetch(groq`
            *[_type == "category" && _id == "${post.categories[0]._ref}"]
          `);

          cat.forEach((c) => {
            if (c.title == "College Diaries") {
              postarr.push(post);
            }
          });

          setpostData(postarr.slice(0, 6));
        }
      });
    });
  }, []);

  return (
    <div className="flex items-center flex-col pt-6 pb-2 bg-[#6776FF80] w-full">
      <h2 className="font-bold text-4xl my-4">College Diaries</h2>
      <p className="grid place-items-center font-semibold text-lg text-white my-3 px-2">
        Get the Proper Package of Information about each and every College 🔥
      </p>
      <div
        className="grid gap-2 w-full place-items-center justify-center"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(0, max(350px, 100%/4)))",
        }}
      >
        {postData.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Link href="/diaries">
        <button className="mb-8 rounded-md text-white h-[4.5rem] w-60 bg-[#2F43FD] hover:bg-blue-700 my-2">
          VIEW MORE
        </button>
      </Link>
    </div>
  );
}
