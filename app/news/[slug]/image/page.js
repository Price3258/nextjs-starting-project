import { DUMMY_NEWS } from "@/dummy-news";

export default async function ImagePage({ params }) {
  const { slug } = await params;
  const news = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
