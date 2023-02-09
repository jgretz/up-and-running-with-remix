import { prisma } from "~/db.server";

export async function getPostListings() {
  return prisma.post.findMany({
    select: { slug: true, title: true },
  });
}

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string | undefined) {
  return prisma.post.findFirst({ where: { slug } });
}
