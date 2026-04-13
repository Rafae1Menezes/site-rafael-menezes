
import { getAllArticles, getArticleBySlug } from "@/app/_libs/articles";
import { remark } from "remark";
import html from "remark-html";

interface Props {
  params: {
   
      slug: string;
  
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  console.log(slug);

  const article = getArticleBySlug(slug);

  const processedContent = await remark()
    .use(html)
    .process(article.content);

  const contentHtml = processedContent.toString();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">
        {article.title}
      </h1>

      <p className="text-gray-500 mb-8">
        {article.date}
      </p>

      <article
        className="prose prose-zinc"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}