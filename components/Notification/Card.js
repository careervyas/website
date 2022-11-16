import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import PortableText from "react-portable-text";
import sanityClient from "../client";

export default function Card({ post }) {
  const imageProps = useNextSanityImage(client, post.Image);
  return (
    <div
      className="w-80 h-[720px] rounded  ring-2
         ring-blue-300 shadow-lg my-2 mx-auto
         relative"
    >
      <div className="w-full h-[200px] rounded-t relative">
        <Image
          src={imageProps.src}
          alt={post.title}
          layout="fill"
          className="rounded"
        />
      </div>
      <div className="p-2">
        <div className="font-bold text-lg mb-1 my-1 mx-[2px]">{post.title}</div>
        <p className="text-gray-700 text-sm">
          <span className="text-blue-500 font-bold mx-[2px]">
            {post.PublishedAt.slice(0, 10) +
              " " +
              post.PublishedAt.slice(11, 17) +
              "  "}
          </span>
          <PortableText
            content={post.content}
            serializers={{
              container: (props) => (
                <div
                  style={{
                    margin: "2px",
                    display: "flex",
                    flexDirection: "column",
                    wordSpacing: "1px",
                  }}
                  {...props}
                />
              ),
              h1: (props) => (
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    margin: "4px",
                  }}
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  style={{
                    fontSize: "1.7rem",
                    fontWeight: "700",
                    margin: "4px",
                  }}
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    margin: "4px",
                  }}
                  {...props}
                />
              ),
              h4: (props) => (
                <h4
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "500",
                    margin: "4px",
                  }}
                  {...props}
                />
              ),
              h5: (props) => (
                <h5
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    margin: "4px",
                  }}
                  {...props}
                />
              ),
              h6: (props) => (
                <h6
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    margin: "4px",
                  }}
                  {...props}
                />
              ),
              normal: (props) => (
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "400",
                    margin: "2px",
                  }}
                  {...props}
                />
              ),
              link: (props) => (
                <a
                  style={{
                    color: "blue",
                    margin: "2px",
                  }}
                  {...props}
                />
              ),
              ul: (props) => (
                <ul
                  style={{
                    listStyleType: "disc",
                    marginLeft: "1rem",
                    margin: "2px",
                  }}
                  {...props}
                />
              ),
              em: (props) => (
                <em
                  style={{
                    fontStyle: "italic",
                    margin: "2px",
                  }}
                  {...props}
                />
              ),
              strong: (props) => (
                <strong
                  style={{
                    fontWeight: "bold",
                    margin: "2px",
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
        </p>
      </div>
    </div>
  );
}
