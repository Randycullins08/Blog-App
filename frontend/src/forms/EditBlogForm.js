import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

export default function EditBlogForm({ blog, setModalOpen }) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <fetcher.Form method="put" className="edit-blog-form" ref={formRef}>
      <h1>Edit Blog</h1>

      <div className="edit-input">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={blog.title}
          placeholder={blog.title}
          ref={focusRef}
        />
      </div>

      <div className="edit-input">
        <label htmlFor="author">Author: </label>
        <input
          type="text"
          name="author"
          id="author"
          defaultValue={blog.author}
          placeholder={blog.author}
        />
      </div>

      <div className="edit-input">
        <label htmlFor="content">Content: </label>
        <textarea
          type="text"
          name="content"
          id="content"
          defaultValue={blog.content}
          placeholder={blog.content}
        />
      </div>

      <div className="button-wrapper">
        <button type="submit" onClick={() => setModalOpen(false)}>
          {isSubmitting ? "Submitting..." : "Update Blog"}
        </button>
      </div>
    </fetcher.Form>
  );
}
