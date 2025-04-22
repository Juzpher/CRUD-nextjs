import React from "react";
import NoteCard from "../_components/note/NoteCard";
import { prisma } from "@/lib/prisma";

export default async function page() {
  const post = await prisma.post.findMany();
  return (
    <div className="min-h-screen lg:px-32 2xl:max-w-screen-2xl 2xl:mx-auto relative">
      <div className="gap-3 flex justify-start">
        {post.map((post) => (
          <NoteCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
