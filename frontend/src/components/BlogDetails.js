import moment from "moment";

export default function BlogDetails({ blog }) {
  return (
    <div key={blog._id} className="blog-details">
      <h2>{blog.title}</h2>
      <h4>Author: {blog.author}</h4>
      <p>{blog.content}</p>
      <p>Created: {moment(blog.createdAt).format("MMM Do YYYY")}</p>
    </div>
  );
}
