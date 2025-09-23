import getApiPost from "@/app/apicalling/getApiPost";
import Link from "next/link";

export default async function Post() {
  const posts = await getApiPost();
  console.log(posts);
 

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>

      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">
              <Link href={`post/${post.id}`}>
              {post.title}<br/> 
               Id :{post.id}
              
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
}
