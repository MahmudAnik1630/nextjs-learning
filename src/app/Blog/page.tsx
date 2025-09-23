import Link from "next/link";
import React from "react";

export default function Blog() {
  const Blogs = [
    { id: 1, title: "First Blog", description: "This is my first blog" },
    { id: 2, title: "Second Blog", description: "This is my second blog" },
    { id: 3, title: "Third Blog", description: "This is my third blog" },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <ul>
        {Blogs.map((blog) => (
          <li key={blog.id} className="mb-2">
            <Link
              href={`/Blog/${blog.id}`}
              className=" hover:underline"
            >
               Blog: {blog.id}
               
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
