// import { createClient } from "next-sanity";

// const projectId = "0iq79djw";
// const dataset = "production";
// const apiVersion = "2023-01-01";

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true,
// });

import { createClient } from "next-sanity";

const projectId = "0iq79djw";
const dataset = "production";
const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
