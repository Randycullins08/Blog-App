import { useLoaderData } from "react-router-dom";
import { addBlog, getBlogs } from "../helpers";

import AddBlogForm from "../forms/AddBlogForm";
import BlogDetails from "../components/BlogDetails";

export const blogLoader = async () => {
  const blogs = await getBlogs();

  return { blogs };
};

export const blogAction = async ({ request }) => {
  switch (request.method) {
    case "POST": {
      const formData = await request.formData();
      const title = formData.get("title");
      const author = formData.get("author");
      const content = formData.get("content");

      return addBlog(title, author, content);
    }

    default: {
      throw new Error("Error in action");
    }
  }
};

export default function Home() {
  const { blogs } = useLoaderData();
  return (
    <div className="home-container">
      <div className="blogs">
        {blogs &&
          blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}
      </div>

      <div className="form-wrapper">
        <AddBlogForm />
      </div>
    </div>
  );
}
