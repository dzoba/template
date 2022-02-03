import { useMatch } from 'react-router-dom';

const posts = import.meta.globEager('./*.md');

function Post() {
  const { params } = useMatch('/posts/:post');
  const post = posts[`./${params.post}.md`];

  document.title = `${post.attributes.title}`;
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:mt-10 mb-10">
      <div className="bg-white overflow-hidden shadow lg:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <article className="prose" style={{ maxWidth: '100%' }}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </div>
      </div>
    </div>
  );
}

export default Post;
