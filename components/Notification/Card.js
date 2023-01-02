import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import client from "../client";
import PortableText from "react-portable-text";
import sanityClient from "../client";
import styles from "./Notification.module.css";

function tConvert(time) {
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}

export default function Card({ post }) {
  const imageProps = useNextSanityImage(client, post.Image);

  return (
    <div className="w-[265px] h-[418px] md:w-[350px] md:h-[489px] rounded-xl overflow-hidden border-4 my-2 mx-auto relative">
      <div
        className={`w-full h-[145px] mb-4 md:h-[200px] rounded-t-xl relative ${styles.image}`}
      >
        <Image
          src={imageProps.src}
          alt={post.title}
          layout="fill"
          objectFit="contain"
        />
        <div className="font-bold px-2 text-white text-lg absolute top-[120px] md:top-40 line-clamp-2 leading-5 w-full z-10">
          {post.title}
        </div>
      </div>
      <div>
        <p className="text-gray-700 text-sm px-3 text-justify">
          <span className="text-[#6776FF] font-bold mx-[2px]">
            {new Date(post.PublishedAt).toString().substring(7, 10) +
              " " +
              new Date(post.PublishedAt)
                .toString()
                .substring(4, 7)
                .toUpperCase() +
              "," +
              new Date(post.PublishedAt).toString().substring(11, 15) +
              " " +
              tConvert(
                new Date(post.PublishedAt).toString().substring(16, 21)
              ) +
              " : "}
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
