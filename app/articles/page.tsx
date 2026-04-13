import { getAllArticles } from "../_libs/articles";


export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Artigos</h1>

      <ul className="space-y-4">
        {articles.map((article: any) => (
          <li key={article.slug} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">
              {article.title}
            </h2>
            <p className="text-gray-600">
              {article.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}