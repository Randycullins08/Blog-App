import moment from "moment";
import { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { deleteBlog, updateBlog } from "../helpers";
import Modal from "../components/Modal";
import EditBlogForm from "../forms/EditBlogForm";

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

export const singleBlogAction = async ({ params, request }) => {
  switch (request.method) {
    case "PUT": {
      const formData = await request.formData();
      const title = formData.get("title");
      const author = formData.get("author");
      const content = formData.get("content");
      const blogData = {
        id: params.id,
        title,
        author,
        content,
      };

      return updateBlog(blogData);
    }
    case "DELETE": {
      return deleteBlog(params.id);
    }
    default: {
      throw new Error("Error submitting form!");
    }
  }
};

export default function BlogPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const blog = useLoaderData();

  return (
    <div className="blog-details">
      <h2>{blog.blog.title}</h2>
      <h4>Author: {blog.blog.author}</h4>
      <p>{blog.blog.content}</p>
      <p>Created: {moment(blog.blog.createdAt).format("MMM Do YYYY")}</p>

      <button className="edit-button" onClick={() => setModalOpen(true)}>
        <PencilIcon width={20} />
      </button>

      <Form
        method="delete"
        onSubmit={(event) => {
          if (!window.confirm("Delete this blog")) {
            event.preventDefault();
          }
        }}
      >
        <button type="submit">
          <TrashIcon width={20} />
        </button>
      </Form>

      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <EditBlogForm blog={blog.blog} setModalOpen={setModalOpen} />
      </Modal>
    </div>
  );
}
