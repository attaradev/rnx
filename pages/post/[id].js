import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { usePost } from "../../hooks/use-post";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = usePost(id);

  return (
    <Layout>
      <Head>
        <title>{post?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{post?.title}</h1>

        <div className="grid">
          <div className="card">
            <p>{post?.body}</p>
          </div>
          <div></div>
        </div>
      </main>
      <style jsx>{`
        .card {
          margin: 1rem;
          flex-basis: 85%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>
    </Layout>
  );
};

export default Post;
