import { prisma } from "@/lib/prisma";
import React from "react";
import Link from "next/link";

export default async function page({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      author: true,
    },
  });

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-red-500">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <dialog id="post_modal" className="modal modal-open">
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <Link href="/task" className="btn btn-sm btn-circle">
              ✕
            </Link>
          </div>

          <p className="py-4">{post.body}</p>

          <div className="text-sm opacity-70">
            By: {post.author.name || "Anonymous"}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <Link href="/task">
            <button>close</button>
          </Link>
        </form>
      </dialog>
    </div>
  );
}
