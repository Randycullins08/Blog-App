export default function BlogDetails({ blog }) {
  return (
    <div key={blog._id} className="blog-details">
      <h2>Blog Title: {blog.title}</h2>
      <h4>Author: {blog.author}</h4>
      <p>{blog.content}</p>
    </div>
  );
}
