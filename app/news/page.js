import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>news pages</h1>
      <ul>
        <li>
          <Link href="/news/first-news"> first news</Link>
        </li>
        <li>
          <Link href="/news/second-news"> second news</Link>
        </li>
        <li>
          <Link href="/news/third-news"> third news</Link>
        </li>
      </ul>
    </>
  );
}
