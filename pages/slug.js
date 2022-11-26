import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import sanityClient from "../components/client.js";

import imageUrlBuilder from "@sanity/image-url";
import groq from "groq";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Comments from "../components/Blogs/comment";
import PortableText from "react-portable-text";
import Header from "../components/Blogs/header";
import Head from "next/head.js";
import firebaseConfig from "../components/Firebase/config";
import firebase from "firebase/app";
import "firebase/firestore";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// fontFamily:
// "monteserrat, quicksand,inter, roboto, sans-serif",

export default function SinglePost() {
  const router = useRouter();
  const [postData, setpostData] = useState(null);
  const [author, setauthor] = useState(null);
  const [countclap, setcountclap] = useState(0);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const slug = router.query["keyword"];
    const query = groq`*[_type=="post" && slug.current=="${slug}"][0]`;

    sanityClient.fetch(query).then((post) => {
      console.log(post);
      const authorQuery = groq`*[_type=="author" && _id=="${post?.author._ref}"]`;

      sanityClient.fetch(authorQuery).then((author) => {
        setauthor(author[0]?.name);
      });
      setpostData(post);
    });

    const db = firebase.firestore();
    const docref = db.collection("comments").doc(slug);

    docref.get().then((doc) => {
      if (doc.exists) {
        setcountclap(doc.data().clap);
      }
    });
  }, [router.query]);
  if (!postData) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData?.synonyms} />
      </Head>
      <Navbar></Navbar>
      <div className="flex flex-row h-full mx-4 md:mx-24">
        <div className="flex flex-col m-2 p-4 h-full w-full md:w-4/5 border-2 border-black space-y-5">
          <h2 className="m-2 text-4xl font-bold">{postData.title}</h2>
          <Header
            id={postData._id}
            author={author}
            date={postData?._updatedAt}
            readtime={postData?.nminutesofread}
            countclap={countclap}
            slug={postData?.slug.current}
          ></Header>

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
                    margin: "12px",
                  }}
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: "700",
                    margin: "12px",
                  }}
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    margin: "12px",
                  }}
                  {...props}
                />
              ),
              h4: (props) => (
                <h4
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "500",
                    margin: "12px",
                  }}
                  {...props}
                />
              ),
              h5: (props) => (
                <h5
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    margin: "12px",
                  }}
                  {...props}
                />
              ),
              h6: (props) => (
                <h6
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    margin: "12px",
                  }}
                  {...props}
                />
              ),
              normal: (props) => (
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    margin: "8px",
                  }}
                  {...props}
                />
              ),
              link: (props) => (
                <a
                  style={{
                    color: "blue",
                    margin: "8px",
                  }}
                  {...props}
                />
              ),
              ul: (props) => (
                <ul
                  style={{
                    listStyleType: "disc",
                    marginLeft: "1rem",
                    margin: "8px",
                  }}
                  {...props}
                />
              ),
              em: (props) => (
                <em
                  style={{
                    fontStyle: "italic",
                    margin: "8px",
                  }}
                  {...props}
                />
              ),
              strong: (props) => (
                <strong
                  style={{
                    fontWeight: "bold",
                    margin: "8px",
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
                    margin: "8px",
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
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Comments slug={postData?.slug.current}></Comments>
        </div>
        
      </div>

      <Footer></Footer>
    </>
  );
}
