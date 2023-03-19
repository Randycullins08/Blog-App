export const blogLoader = async () => {
  const blogs = await fetch("http://127.0.0.1:4000/blogs")
    .then((res) => res.json())
    .then((data) => data.blogs)
    .catch((err) => console.log("Error getting blogs", err));

  return blogs;
};
