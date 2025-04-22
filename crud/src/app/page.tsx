import Image from "next/image";
import { prisma } from "@/lib/prisma";
import NoteCard from "./_components/note/NoteCard";
export default async function Home() {
  const post = await prisma.post.findMany();
  return (
    <div className="h-screen w-full m-5">
      <a href="/task">See Tasks here</a>
    </div>
  );
}
