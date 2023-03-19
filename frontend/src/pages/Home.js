import { useLoaderData } from "react-router-dom";

export const blogLoader = async () => {
  const blogs = await fetch("http://127.0.0.1:4000/blogs")
    .then((res) => res.json())
    .then((data) => data.blogs)
    .catch((err) => console.log("Error getting blogs", err));

  return blogs;
};

export default function Home() {
  const blogLoader = useLoaderData();
  return (
    <div>
      <h1>My Blogs</h1>

      {blogLoader &&
        blogLoader.map((blog) => (
          <div key={blog._id}>
            <h2>{blog.title}</h2>
            <h3>{blog.author}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
    </div>
  );
}
