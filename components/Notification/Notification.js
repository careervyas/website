import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import groq from "groq";
import client from "../client";
import React, { useRef } from "react";
import LeftArrow from "./Elements/LeftArrow";
import RightArrow from "./Elements/RightArrow";

async function getPosts() {
  const posts = await client.fetch(groq`
    *[_type == "latestNotification"] | order(dateTime(_createdAt) desc)
  `);
  return posts;
}

export default function Notification() {
  const carouselRef = useRef(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1282 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1282, min: 915 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 915, min: 0 },
      items: 1,
    },
  };
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="h-[478px] md:h-[570px] my-16">
      <div className="grid place-items-center">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold text-[#333333]">
          Latest Notifications
        </h1>
      </div>

      <div className="h-full flex flex-row items-center">
        <LeftArrow
          className="cursor-pointer w-32"
          onClick={() => {
            carouselRef.current.previous();
          }}
        />
        <div className="min-w-[265px] w-[100%]">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            infinite={true}
            focusOnSelect={true}
            keyBoardControl={true}
            arrows={false}
          >
            {posts.map((post) => (
              <Card key={post._id} post={post} />
            ))}
          </Carousel>
        </div>
        <RightArrow
          className="cursor-pointer w-32"
          onClick={() => {
            carouselRef.current.next();
          }}
        />
      </div>
    </div>
  );
}
