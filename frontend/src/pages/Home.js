import { useLoaderData } from "react-router-dom";
import { addBlog, getBlogs } from "../helpers";

import AddBlogForm from "../components/AddBlogForm";
import BlogDetails from "../components/BlogDetails";

import { toast } from "react-toastify";

export const blogLoader = async () => {
  const blogs = await getBlogs();

  return { blogs };
};

export const blogAction = async ({ request }) => {
  const data = await request.formData();
  const formData = Object.fromEntries(data);

  const blogAuthor = formData.blogAuthor;
  const blogTitle = formData.blogTitle;
  const blogContent = formData.blogContent;

  await addBlog(blogAuthor, blogTitle, blogContent);

  return toast.success("New Blog Added");
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
