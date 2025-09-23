
export default async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

 

  const data = await res.json();
  return data;
}
