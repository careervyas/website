import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import sanityClient from "../components/client.js";

import imageUrlBuilder from "@sanity/image-url";
import groq from "groq";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PortableText from "react-portable-text";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const router = useRouter();
  const [postData, setpostData] = useState(null);

  console.log(sanityClient.config().projectId);
  useEffect(() => {
    const slug = router.query["keyword"];
    const query = groq`*[_type=="post" && slug.current=="${slug}"][0]`;

    sanityClient.fetch(query).then((post) => {
      setpostData(post);
    });
  }, [router.query]);
  if (!postData) return <div>Loading...</div>;
  console.log(postData);
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-row h-full mx-4 md:mx-24">
        <div className="flex flex-col m-2 p-4 w-full md:w-8/12 border-2 border-black space-y-5">
          <h2 className="m-2 text-4xl font-bold">{postData.title}</h2>

          <img
            className="w-full"
            src={urlFor(postData.mainImage).url()}
            alt="career vyas"
          />

          <PortableText
            content={postData.content}
            serializers={{
              container: (props) => (
                <div
                  style={{
                    fontFamily:
                      "monteserrat, quicksand,inter, roboto, sans-serif",
                    margin: "8px",
                    display: "flex",
                    flexDirection: "column",
                    wordSpacing: "2px",
                  
                  }}
                  {...props}
                />
              ),
              h1: (props) => (
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                  }}
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: "700",
                  }}
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                  }}
                  {...props}
                />
              ),
              h4: (props) => (
                <h4
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "500",
                  }}
                  {...props}
                />
              ),
              h5: (props) => (
                <h5
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                  }}
                  {...props}
                />
              ),
              h6: (props) => (
                <h6
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                  {...props}
                />
              ),
              normal: (props) => (
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                  {...props}
                />
              ),
              link: (props) => (
                <a
                  style={{
                    color: "blue",
                  }}
                  {...props}
                />
              ),
              ul: (props) => (
                <ul
                  style={{
                    listStyleType: "disc",
                    marginLeft: "1rem",
                  }}
                  {...props}
                />
              ),
              em: (props) => (
                <em
                  style={{
                    fontStyle: "italic",
                  }}
                  {...props}
                />
              ),
              strong: (props) => (
                <strong
                  style={{
                    fontWeight: "bold",
                  }}
                  {...props}
                />
              ),
              blockquote: (props) => (
                <blockquote
                  style={{
                    borderLeft: "5px solid #ccc",
                    fontStyle: "italic",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    paddingLeft: "1rem",
                  }}
                  {...props}
                />
              ),
            }}
            projectId={sanityClient.config().projectId}
            dataset={sanityClient.config().dataset}
          />
          <iframe
          className="w-full h-full sm:h-[500px]" 
          src={postData.youtubeVideo} 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
