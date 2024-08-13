// import Link from 'next/link';
// import { Suspense } from 'react';


// async 

// async function getPosts() {

//     const query = `
//     {
//         posts(first: 5) {
//           nodes {
//           title
//           content
//           uri
//           }
//         }
//     }
//     `;

//     const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}$query=${encodeURIComponent(query)}`,
// {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//     next: {
//         revalidate: 0,
//     }
// });

// const {data} = await res.json();

// return data.posts.nodes

// }

// export default async function PostPage() {
//     <>

//         {posts.map((post) => ( 
//             <div key={post.uri}>
//                 <h2>{post.title}</h2>
//                 <p>{post.content}</p>
//                 <Link href={`/blog/${post.uri}`}>
//                     <a>Read more</a>
//                 </Link>  
//             </div>  
//         ))}
    
//     </>
// }