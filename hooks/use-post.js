import { useContext } from "react";
import { PostsContext } from "../contexts/posts-context";

export function usePost(id) {
  const { posts } = useContext(PostsContext);
  return posts.find((post) => post.id === id);
}
