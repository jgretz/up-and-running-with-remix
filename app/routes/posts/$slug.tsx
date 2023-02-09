import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPost } from "~/models/post.server";
import { useLoaderData } from "@remix-run/react";

interface LoaderData {
  post: Awaited<ReturnType<typeof getPost>>;
}

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return json({ post });
};

export default function PostRoute() {
  const { post } = useLoaderData<LoaderData>();

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post?.title}</h1>
    </main>
  );
}
