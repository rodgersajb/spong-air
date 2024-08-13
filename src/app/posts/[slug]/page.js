export default async function PostPage({ params }) {
  console.log(params, "uri");
  const res = await fetch(
    `${process.env.WP_API_URL}/posts?slug=${params.slug}`
  );
  const data = await res.json();
  
  return (
    <main>
      <h1>{data[0].title.rendered}</h1>
      <div>
        <div dangerouslySetInnerHTML={{ __html: data[0].content.rendered }} />
      </div>
    </main>
  );
}
