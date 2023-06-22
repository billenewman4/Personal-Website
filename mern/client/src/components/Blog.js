const mediumArticles = [
    {
      id: "Article 1",
      title: "Intro to Vector Databases",
      link: "https://myblogsite.com/my-article-1", // Update with your own blog post link
      text: "Article about vector-databases"
    },
    // more of your articles...
];

const externalArticles= [
    {
        id: "Article 1",
        title: "Intro to Vector Databases",
        link: "https://www.google.com",
        text: "Article about vector-databases"
      },
      // more external articles...
]

function ArticleBlocks({articles}){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {articles.map(article => (
      <div key={article.id} className="p-5 mb-5 bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <section id={article.id} style={{ scrollMarginTop: "+7rem" }}>
          <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-white">
          {article.title}
          </h1>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href={article.link} rel="noopener noreferrer" className="title-font font-medium text-gray-200 hover:text-gray-300 transition-colors duration-200 mb-4 md:mb-0">
              <span className="ml-3 text-xl">Link</span>
            </a>
          </div>
          <p className="mb-8 leading-relaxed text-gray-300">
              {article.text}
          </p>
        </section>
      </div>
    ))}
    </div>
  );
}

const Blog = () => {
  return (
    <div className="container mx-auto px-10 py-20 items-center bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-white">My Articles</h2>
      <ArticleBlocks articles={mediumArticles} />
      
      <h2 className="text-2xl font-bold mt-10 mb-4 text-white">External Articles</h2>
      <ArticleBlocks articles={externalArticles} />
    </div>
  );
};

export default Blog;
