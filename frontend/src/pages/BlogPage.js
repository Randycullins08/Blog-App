import moment from "moment";
import { Form, useLoaderData } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";

export const singleBlogLoader = async ({ params }) => {
  const blog = await fetch(`http://127.0.0.1:4000/blogs/${params.id}`)
    .then((res) => res.json())
    .then((data) => data.blog)
    .catch((err) => console.error(err));

  if (!blog) {
    throw new Error("No Blog Found");
  }

  return { blog };
};

export default function BlogPage() {
  const blog = useLoaderData();

  return (
    <div className="blog-details">
      <h2>{blog.blog.title}</h2>
      <h4>Author: {blog.blog.author}</h4>
      <p>{blog.blog.content}</p>
      <p>Created: {moment(blog.blog.createdAt).format("MMM Do YYYY")}</p>

      <Form method="delete">
        <button type="submit">
          <TrashIcon width={20} />
        </button>
      </Form>
    </div>
  );
}
