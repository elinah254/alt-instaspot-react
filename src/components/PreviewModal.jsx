import React from "react";

export default function PreviewModal({ isOpen, imageSrc, onClose }) {
  if (!isOpen) return null; // Don’t render if not open

  return (
    <dialog open className="previewable-modal modal" aria-label="previewable-modal">
      <button onClick={onClose} className="btn btn-light btn-close">X</button>
      <img src={imageSrc} alt="Preview" className="preview-image" />
    </dialog>
  );
}
