import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const getBlogs = async (user) => {
  const blogs = await fetch("http://127.0.0.1:4000/blogs", {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data.blogs)
    .catch((err) => {
      console.error("Error Getting Blogs", err);
      throw new Error("Error Getting Blogs");
    });

  return blogs;
};

export const addBlog = async (title, author, content) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const blog = {
    title,
    author,
    content,
  };

  try {
    await fetch("http://127.0.0.1:4000/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json)
      .catch((err) => {
        console.error("Error adding new blog", err);
        throw new Error("Error adding new blog");
      });

    return toast.success(`${title} added!`);
  } catch (err) {
    console.error("Error adding new blog");
    throw new Error("Error adding new blog");
  }
};

export const updateBlog = async (blogData) => {
  const user = JSON.parse(localStorage.getItem("user"));

  await fetch(`http://127.0.0.1:4000/blogs/${blogData.id}`, {
    method: "PUT",
    body: JSON.stringify(blogData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error updating blog", err);
      throw new Error("Error updating blog");
    });

  toast.success("Blog Updated!");
  return redirect("/");
};

export const deleteBlog = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));

  await fetch(`http://127.0.0.1:4000/blogs/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((res) => res.json)
    .catch((err) => console.error("Error deleting blog", err));

  toast.error("Blog Deleted");

  return redirect("/");
};
