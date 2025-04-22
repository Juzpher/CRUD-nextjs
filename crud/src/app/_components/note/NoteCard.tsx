import Link from "next/link";
import React from "react";

interface NoteProps {
  id: string;
  slug: string;
  title: string;
  body: string;
}

const NoteCard: React.FC<NoteProps> = ({ title, body, id, slug }) => {
  return (
    <div className="card bg-base-300 w-96 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="card-body p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="card-title text-xl font-bold">{title}</h2>
          </div>

          <p className="text-base-content/80 line-clamp-3">{body}</p>

          <div className="card-actions justify-end mt-4">
            <Link href={`task/${slug}`} className="btn btn-sm btn-info">
              View
            </Link>
            <button className="btn btn-sm btn-ghost">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
