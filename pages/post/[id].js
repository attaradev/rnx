import { useRouter } from "next/router";
import { usePost } from "../../hooks/use-post";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = usePost(id);

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
};

export default Post;
