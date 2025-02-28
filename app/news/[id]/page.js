export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  return (
    <>
      <h1>news detail pages</h1>
      <p>news id : {id}</p>
    </>
  );
}
