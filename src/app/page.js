import Container from "./components/container";
import Header from "./components/header";
import Head from "next/head";

export default async function Home() {
  const res = await fetch(`${process.env.YOAST_API_URL}` );
  const data = await res.json();
  console.log(data);
  return (
    <main className="w-svw overflow-x-hidden"
    >
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="robots" content={data.robots} />
        <meta name="keywords" content={data.keywords} />
        <meta name="author" content={data.author} />
      </Head>
      <Header />
      <Container />
    </main>
  );
}
