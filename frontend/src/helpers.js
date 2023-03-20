import { toast } from "react-toastify";

export const getBlogs = async () => {
  const blogs = await fetch("http://127.0.0.1:4000/blogs")
    .then((res) => res.json())
    .then((data) => data.blogs)
    .catch((err) => {
      console.error("Error Getting Blogs", err);
      throw new Error("Error Getting Blogs");
    });

  return blogs;
};

export const addBlog = async (title, author, content) => {
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