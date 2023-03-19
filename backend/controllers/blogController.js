const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

const newBlog = async (req, res) => {
  const { title, author, content } = req.body;
  try {
    const blog = await Blog.create({ title, author, content });
    res.status(200).json({ message: "New Blog Added", blog });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });

  res.status(200).json({ message: "Blogs Found", blogs });
};

const getBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Invalid Blog ID" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).json({ error: "Blog Not Found" });
  }

  res.status(200).json({ message: "Blog Found", blog });
};

const updateBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Invalid Blog ID" });
  }

  const blog = await Blog.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!blog) {
    return res.status(404).json({ error: "Blog Not Found" });
  }

  const updatedBlog = await Blog.findById(id);

  res.status(200).json({ message: "Blog Updated", updatedBlog });
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Invalid Blog ID" });
  }

  const blog = await Blog.findOneAndDelete({ _id: id });

  if (!blog) {
    return res.status(404).json({ error: "Blog Not Found" });
  }

  res.status(200).json({ message: "Blog Deleted", blog });
};

module.exports = {
  newBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};
