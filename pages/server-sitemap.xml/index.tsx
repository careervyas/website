import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import groq from "groq";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "x470jfla", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2021-08-31",
});

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await client.fetch(groq`
    *[_type == "post" ] | order(dateTime(_createdAt) desc) 
  `);

  const fields: ISitemapField[] = posts.map((post) => ({
    loc: `https://www.careervyas.com/slug?keyword=${post.slug.current}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
