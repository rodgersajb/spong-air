import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch(`${process.env.WP_API_URL}/posts`);
  const data = await res.json();

  return (
    <main>
      <h1>The Latest from Spong-Air</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
