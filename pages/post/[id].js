import { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { usePost } from "../../hooks/use-post";
import { PostsContext } from "../../contexts/posts-context";
import { handleUpdate } from "../../utils";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = usePost(id);
  const { updatePost } = useContext(PostsContext);

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
            <div
              className="action"
              onClick={handleUpdate(
                { favorite: !post?.favorite },
                id,
                updatePost
              )}
            >
              <img
                src={`/heart-${post?.favorite ? "filled" : "outline"}.svg`}
                alt=""
                className="icon"
              />
            </div>
            <div
              className="action"
              onClick={handleUpdate({ likes: post?.likes + 1 }, id, updatePost)}
            >
              <img src="/like.svg" alt="" className="icon" />
              <p>{post?.likes}</p>
            </div>
          </div>
          <div className="card">
            <p>{post?.body}</p>
          </div>
          {/* New Upvote and Downvote Feature */}
          <div className="action">
            <img
              src={`/up.svg`}
              alt=""
              className="icon"
              onClick={handleUpdate({ votes: post?.votes + 1 }, id, updatePost)}
            />
            <p>{post?.votes}</p>
            <img
              src={`/down.svg`}
              alt=""
              className="icon"
              onClick={handleUpdate(
                { votes: post?.votes < 1 ? 0 : post?.votes - 1 },
                id,
                updatePost
              )}
            />
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

        .action p {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default Post;
