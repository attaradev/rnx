import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await fetch("/api/posts");
      const posts = await res.json();
      setPosts(posts);
    }
    getPosts();
  }, []);

  const updatePost = (post) => {
    const newPostList = posts.map((p) => (p.id === post.id ? post : p));
    setPosts(newPostList);
  };

  return (
    <PostsContext.Provider value={{ posts, updatePost }}>
      {children}
    </PostsContext.Provider>
  );
};
