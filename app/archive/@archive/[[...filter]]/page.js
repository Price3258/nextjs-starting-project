import Link from "next/link";

import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;
  console.log(filter);
  const links = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // const news = getNewsForYear(filter);
  // return <NewsList news={news} />;
}
