import Card from "./Card";
import groq from "groq";
import client from "../client";
import { useEffect, useState } from "react";

async function getPosts() {
  // sort by _createdAt in descending order
  const posts = await client.fetch(groq`
    *[_type == "post" ] | order(dateTime(_createdAt) desc) 
  `);

  return posts;
}
export default function Blog() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    getPosts().then((posts) => {
      setBlog(posts);
    });
  }, []);
  return (
    <div className="flex flex-col  items-center w-full h-full mb-5 ">
      <h3 className="text-2xl text-center md:text-4xl font-semibold mt-7">
        Read Blogs that Make you Smarter
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-7 ">
        {blog.map((item) => (
          <Card key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}
