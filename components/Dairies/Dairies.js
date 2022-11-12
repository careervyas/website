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
    getPosts().then((posts) => {
      posts.forEach(async (post) => {
        if (post.categories[0] !== undefined) {
          const cat = await client.fetch(groq`
            *[_type == "category" && _id == "${post.categories[0]._ref}"]
          `);
          
          setpostData([]);

          cat.forEach((c) => {
            if(c.title=="College Diaries"){
              setpostData((prev) => [...prev, post]);
            }
          })
        
        }
      });
    });
    console.log(postData);

  }, []);

  return (
    <div
      className="flex items-center flex-col my-4 bg-[#6776FF80]
    w-full"
    >
      <h2 className="font-bold text-4xl my-4">College Diaries</h2>
      <p className="font-semibold text-lg text-white my-3 mx-1 md:mx-0">
        Get the Proper Package of Information about each and every College 🔥
      </p>
      <div
        className="grid grid-cols-1 lg:grid-cols-3  gap-4 mb-4
        w-11/12"
      >
        {postData.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>

      <button
        className="mb-8 rounded-md
      text-white h-16 w-44 bg-[#6776FF] hover:bg-blue-700
      my-2"
      >
        <Link href="/blog">Read More..</Link>
      </button>
    </div>
  );
}
