// export async function generateStaticParams() {
//     const res = await fetch(`${process.env.WP_API_URL}/posts`);
//     const data = await res.json();
//     const paths = data.map((post) => ({
//         params: { slug: post.slug },
//     }));
//     return paths;
// }

// export default async function PostPage({ params }) {
  
//   const res = await fetch(
//     `${process.env.WP_API_URL}/posts?slug=${params.slug}`
//   );
//   const data = await res.json();
  
//   return (
//     <main>
//       <h1>{data[0].title.rendered}</h1>
//       <div>
//         <div dangerouslySetInnerHTML={{ __html: data[0].content.rendered }} />
//       </div>
//     </main>
//   );
// }
