import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

export default function AddBlogForm() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  //   const formRef = useRef();
  //   const focusRef = useRef;

  //   useEffect(() => {
  //     if (!isSubmitting) {
  //       formRef.current.reset();
  //       focusRef.current.focus();
  //     }
  //   }, [isSubmitting]);

  return (
    <fetcher.Form method="post">
      <h2>Add Blog</h2>

      <div className="input-wrapper">
        <label htmlFor="blogTitle">Title:</label>
        <input type="text" name="blogTitle" id="blogTitle" />
      </div>

      <div className="input-wrapper">
        <label htmlFor="blogAuthor">Author:</label>
        <input type="text" name="blogAuthor" id="blogAuthor" />
      </div>

      <div className="input-wrapper">
        <label htmlFor="blogContent">Blog Content:</label>
        <textarea rows={8} name="blogContent" id="blogContent" />
      </div>

      <div className="button-wrapper">
        <button type="submit">
          {isSubmitting ? "Submitting..." : "Add Blog"}
        </button>
      </div>
    </fetcher.Form>
  );
}
