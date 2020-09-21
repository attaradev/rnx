import { useRouter } from "next/router";
import { usePost } from "../../hooks/use-post";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { title, body } = usePost(id);

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
