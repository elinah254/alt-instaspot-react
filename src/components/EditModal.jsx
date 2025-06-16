import React from 'react'
import avatar from "../assets/images/avatar.png"; // If re-using avatar
import closeIcon from "../assets/icons/x-close-delete-svgrepo-com.svg"; // optional


function EditModal({ avatar }) {
  return (
    <dialog className="modal" id="editModal" aria-label="modal-section">
      <button className="btn btn-close btn-light" id="cancelBtn">X</button>
      <form noValidate className="modal-form" id="editForm">
        {/* Name input */}
        <div className="name-edit form-content">
          <div className="form-label">
            <label htmlFor="editName">Name:</label>
            <span className="error hidden" id="name-error">Field cannot be empty</span>
          </div>
          <input
            type="text"
            name="profile-name"
            id="editName"
            placeholder="Enter your name"
            required
            minLength="2"
          />
        </div>

        {/* Description input */}
        <div className="form-content description-edit">
          <div className="form-label">
            <label htmlFor="editDesc">Description:</label>
            <span className="error hidden" id="description-error">Field cannot be empty</span>
          </div>
          <input
            type="text"
            name="text"
            id="editDesc"
            placeholder="Enter your description"
            required
            minLength="2"
          />
        </div>

        {/* Image upload */}
        <div className="form-content avatar-upload">
          <label>Profile Image:</label>
          <input type="file" name="file" id="editImage" />
        </div>

        <button type="submit" className="btn btn-dark" id="saveBtn">Save</button>
      </form>
    </dialog>
  )
}

export default EditModal
