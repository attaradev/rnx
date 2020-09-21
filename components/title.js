import Link from "next/link";

const Title = ({ title, id }) => {
  return (
    <>
      <li className="title">
        <Link href={`/post/${encodeURIComponent(id)}`}>
          <h2>{title}</h2>
        </Link>
      </li>
      <style jsx>{`
        li.title:hover,
        li.title:focus,
        li.title:active {
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Title;
