import Card from "../Blogs/Card";
import groq from "groq";
import client from "../client";
import { useEffect, useState } from "react";

async function getPosts() {
  const posts = await client.fetch(groq`
    *[_type == "post"]
  `);

  return posts;
}
export default function Blog() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    let postarr = [];
    getPosts().then((posts) => {
      posts.forEach(async (post) => {
        if (post.categories[0] !== undefined) {
          const cat = await client.fetch(groq`
            *[_type == "category" && _id == "${post.categories[0]._ref}"]
          `);

          cat.forEach((c) => {
            if (c.title == "College Diaries") {
              postarr.push(post);
            }
          });
          setBlog(postarr);
        }
      });
    });
  }, []);

  return (
    <div className="flex flex-col  items-center w-full h-full mb-5">
      <h3 className="text-2xl text-center md:text-4xl font-semibold mt-7">
        Read Blogs that make you Smart
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-7 ">
        {blog.map((item) => (
          <Card key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}
