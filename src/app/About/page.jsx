import Image from "next/image";
import Logo from "@/assests/images/next.avif";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>

      <Image
        src={Logo}
        alt="Next.js Logo"
        width={400}
        height={200}
      />
    </div>
  );
}
