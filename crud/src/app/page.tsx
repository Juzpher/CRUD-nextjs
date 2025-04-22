import Image from "next/image";
import { prisma } from "@/lib/prisma";
export default async function Home() {
  const post = await prisma.post.findMany();
  return (
    <div className="h-screen w-full">
      <div>
        {post.map((post) => (
          <div
            key={post.id}
            className="grid grid-cols-[1fr_2fr] items-center gap-4"
          >
            <div className="border border-gray-600 rounded-md p-5 m-2">
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <p className="text-lg">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
