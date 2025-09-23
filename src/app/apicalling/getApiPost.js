export default async function getApiPost() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  

  const data = await res.json();
  return data; 
}
