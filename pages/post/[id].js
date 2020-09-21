import { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { usePost } from "../../hooks/use-post";
import { PostsContext } from "../../contexts/posts-context";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = usePost(id);
  const { updatePost } = useContext(PostsContext);

  const handleFavorite = async () => {
    try {
      const resp = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorite: !post?.favorite }),
      });
      const post = await resp.json();
      updatePost(post);
    } catch (error) {
      console.warn(error.message);
    }
  };

  return (
    <Layout>
      <Head>
        <title>{post?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{post?.title}</h1>

        <div className="grid">
          <div className="actions">
            <div onClick={handleFavorite}>
              <img
                src={`/heart-${post?.favorite ? "filled" : "outline"}.svg`}
                alt=""
                className="icon"
              />
            </div>
            <div>
              <img src="/like.svg" alt="" className="icon" />
            </div>
          </div>
          <div className="card">
            <p>{post?.body}</p>
          </div>
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
        .icon {
          height: 2em;
        }

        .icon:hover,
        .icon:active {
          transform: scale(1.1, 1.1);
          cursor: pointer;
        }
      `}</style>
    </Layout>
  );
};

export default Post;
