import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

export default function AddBlogForm() {
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
    <fetcher.Form method="post" ref={formRef}>
      <h2>Add Blog</h2>

      <div className="input-wrapper">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" required ref={focusRef} />
      </div>

      <div className="input-wrapper">
        <label htmlFor="author">Author:</label>
        <input type="text" name="author" id="author" required />
      </div>

      <div className="input-wrapper">
        <label htmlFor="content">Blog Content:</label>
        <textarea rows={8} name="content" id="content" required />
      </div>

      <div className="button-wrapper">
        <button type="submit">
          {isSubmitting ? "Submitting..." : "Add Blog"}
        </button>
      </div>
    </fetcher.Form>
  );
}
