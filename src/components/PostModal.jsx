import React from 'react'
import closeIcon from "../assets/icons/x-close-delete-svgrepo-com.svg";


function PostModal() {
  return (
    <dialog id="postModal" className="modal">
      <button id="closeModal" className="btn btn-light btn-close">X</button>
      <form noValidate className="modal-form" id="newPostForm">
        {/* Image upload */}
        <div className="form-content">
          <div className="form-label">
            <label>Photo:</label>
            <span className="error hidden" id="post-img-error">Field cannot be empty</span>
          </div>
          <input type="file" name="file" id="postImage" accept="image/*" className="hidden" />
          <div id="customUpload" className="custom-upload">
            <span id="uploadText">Click to upload image</span>
            <img id="uploadPreview" className="upload-preview hidden" alt="Preview" />
          </div>
        </div>

        {/* Title input */}
        <div className="form-content">
          <div className="form-label">
            <label htmlFor="post-title">Title:</label>
            <span className="error hidden" id="post-title-error">Field cannot be empty</span>
          </div>
          <input
            type="text"
            name="post-title"
            id="post-title"
            placeholder="Enter photo title"
            required
            minLength="2"
          />
        </div>

        <button type="submit" className="btn btn-dark">Post</button>
      </form>
    </dialog>
  )
}

export default PostModal
