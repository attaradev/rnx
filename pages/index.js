import Head from "next/head";
import { useContext } from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import { PostsContext } from "../contexts/posts-context";

export default function Home() {
  const posts = useContext(PostsContext);

  return (
    <Layout>
      <Head>
        <title>RNX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to RNX!</h1>

        <div className="grid">
          <ul>
            {posts.map((post) => (
              <Title key={post.id} {...post} />
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
