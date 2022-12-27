import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "x470jfla", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: "2021-08-31",
  useCdn: true, // `false` if you want to ensure fresh data
});

module.exports = client;
