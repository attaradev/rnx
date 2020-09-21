const { client, q, formatPost } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const res = await client.query(
      q.Update(q.Ref(q.Collection("posts"), req.params.id), {
        data: req.body,
      })
    );
    const post = formatPost(res);
    res.status(200).json(post);
  } catch (error) {
    // something went wrong
    res.status(500).json({ error: e.message });
  }
};
