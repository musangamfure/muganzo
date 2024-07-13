import { client } from "../client";

export type Post = {
  title?: string;
  author: string;
  imageUrl: string;
  publishedAt: string;
  slug?: {
    current: string;
  };
};

const getPostsQuery = `*[_type == "post"]{
  "title": title,
  "author": author->name,
  "slug": slug.current,
  "imageUrl": mainImage.asset->url,
  publishedAt,
  categories[]->name,
  body
}`;

export async function getPosts() {
  return await client.fetch(getPostsQuery);
}
