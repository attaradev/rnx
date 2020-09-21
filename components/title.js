import Link from "next/link";

const Title = ({ title, id }) => {
  return (
    <>
      <li className="title">
        <Link href={`/post/${id}`}>
          <h2>{title}</h2>
        </Link>
      </li>
      <style jsx>{`
        .title:hover,
        .title:focus,
        .title:active {
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Title;
