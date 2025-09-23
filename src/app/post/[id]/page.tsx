import getPost from "@/app/apicalling/getPost";


export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostId({ params }: { params: { id: string } }) {
  const { id } = params;


  const post = await getPost(id);
 

  return (
    <div>
      <h1 className="text-xl">ID: {post.id}</h1>
      <h2 className="font-bold">{post.title}</h2>
      <h3>{post.body}</h3>
    </div>
  );
}
