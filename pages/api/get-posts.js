const faunadb = require("faunadb");
const { formatPost } = require("../../utils/format-post");

// your secret hash
const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  try {
    const dbs = await client.query(
      q.Map(
        // iterate each item in result
        q.Paginate(
          // make paginatable
          q.Match(
            // query index
            q.Index("all_posts") // specify source
          )
        ),
        (ref) => q.Get(ref) // lookup each result by its reference
      )
    );
    // ok
    const posts = dbs.data.map(formatPost);
    res.status(200).json(posts);
  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message });
  }
};
