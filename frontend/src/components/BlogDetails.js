import moment from "moment";
import { Link } from "react-router-dom";

export default function BlogDetails({ blog }) {
  return (
    <div className="blog-details">
      <Link to={`blog/${blog._id}`}>
        <h2>{blog.title}</h2>
      </Link>
      <h4>Author: {blog.author}</h4>
      <p>{blog.content}</p>
      <p>Created: {moment(blog.createdAt).format("MMM Do YYYY")}</p>
      <p>Updated: {moment(blog.updatedAt).format("MMM Do YYYY")}</p>
    </div>
  );
}
