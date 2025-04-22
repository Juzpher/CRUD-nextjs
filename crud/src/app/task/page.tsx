import React from "react";
import NoteCard from "../_components/note/NoteCard";
import { prisma } from "@/lib/prisma";

export default async function page() {
  const post = await prisma.post.findMany();
  return (
    <div className="h-screen w-full m-5">
      <div className="gap-3 flex">
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
