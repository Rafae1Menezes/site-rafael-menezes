export default function Works() {
  const articles = [
    { id: 1, title: "Meu primeiro artigo", excerpt: "Resumo...", slug: "meu-primeiro-artigo" },
  ];

  return (
    <div>
      <h1>Articles</h1>

      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>

          <a href={`/articles/${article.slug}`}>
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}