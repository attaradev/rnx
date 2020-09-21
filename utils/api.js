export const handleUpdate = (data, id, updatePost) => async () => {
  try {
    const resp = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const post = await resp.json();
    updatePost(post);
  } catch (error) {
    console.warn(error.message);
  }
};
