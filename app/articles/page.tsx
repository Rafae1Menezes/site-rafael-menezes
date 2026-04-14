import { getAllArticles } from "../_libs/articles";

export default function ArticlesPage() {
    const articles = getAllArticles();

    return (
        <main className="mx-auto max-w-3xl p-6">
            <h1 className="mb-6 text-3xl font-bold">Artigos</h1>

            <ul className="space-y-4">
                {articles.map((article: any) => (
                    <li key={article.slug} className="rounded-lg border p-4">
                        <h2 className="text-xl font-semibold">{article.title}</h2>
                        <p className="text-gray-600">{article.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
