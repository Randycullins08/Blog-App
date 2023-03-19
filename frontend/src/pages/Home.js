import { useLoaderData } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";

export default function Home() {
  const blogLoader = useLoaderData();
  return (
    <div className="home-container">
      <div className="blogs">
        {blogLoader &&
          blogLoader.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}
      </div>

      <div>Future Form</div>
    </div>
  );
}
