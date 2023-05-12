import React from "react";
import PostCard from "@/components/Postcard";
import { InferGetStaticPropsType } from "next";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { PostPreview } from "@/types/posts";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home({
  postPreviews,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className={"posts-container"}>
        <Image
          src="/duck-contour-final.png"
          alt="Descriptive Alt Text"
          width={100}
          height={100}
        />
        <h1 className={"heading"}>Articles</h1>

        <div className={"row"}>
          {postPreviews.length === 0 ? (
            <div className={"col-6 mb-4"}>New blog coming soon...</div>
          ) : (
            postPreviews.map((postPreview, i) => (
              <div className={"col-6 mb-4"} key={i}>
                <PostCard postPreview={postPreview} />
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // get all MDX files
  const postFilePaths = fs.readdirSync("_posts").filter((postFilePath) => {
    return path.extname(postFilePath).toLowerCase() === ".mdx";
  });

  const postPreviews: PostPreview[] = [];

  // read the frontmatter for each file
  for (const postFilePath of postFilePaths) {
    const postFile = fs.readFileSync(`_posts/${postFilePath}`, "utf8");

    // serialize the MDX content to a React-compatible format
    // and parse the frontmatter
    const serializedPost = await serialize(postFile, {
      parseFrontmatter: true,
    });

    postPreviews.push({
      ...serializedPost.frontmatter,
      // add the slug to the frontmatter info
      slug: postFilePath.replace(".mdx", ""),
    } as PostPreview);
  }

  return {
    props: {
      postPreviews: postPreviews,
    },
    // enable ISR
    revalidate: 60,
  };
}
