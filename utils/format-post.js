export const formatPost = (doc) => {
  return {
    ...doc.data,
    id: doc.ref.id,
  };
};
