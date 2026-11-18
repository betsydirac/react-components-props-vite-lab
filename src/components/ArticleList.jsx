import Article from "./Article";

function ArticleList({ posts }) {
      return (
    <main>
      {posts.map((post) => (
        <Article
        // key lets React tell the articles apart; post.id is unique per post
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;