import React from "react";

export default function EditBlogForm({ blog }) {
  return (
    <div>
      <h1>Edit Blog</h1>

      <div>{blog.title}</div>
    </div>
  );
}
