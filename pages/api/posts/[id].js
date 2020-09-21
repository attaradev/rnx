const { client, q, formatPost } = require("../../../utils");

module.exports = async (req, res) => {
  try {
    const dbs = await client.query(
      q.Update(q.Ref(q.Collection("posts"), req.query.id), {
        data: req.body,
      })
    );
    const post = formatPost(dbs);
    res.status(200).json(post);
  } catch (error) {
    // something went wrong
    res.status(500).json({ error: e.message });
  }
};
