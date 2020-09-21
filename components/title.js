import Link from "next/link";

const Title = ({ title, id }) => {
  return (
    <li>
      <Link href={`/post/${id}`}>
        <h2>{title}</h2>
      </Link>
    </li>
  );
};

export default Title;
