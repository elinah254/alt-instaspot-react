import React from "react";
import styles from "../styles/GalleryCard.module.css";

export default function GalleryCard({ title, imageSrc, onPreview }) {
  return (
    <div className={styles.card} role="article" aria-label="gallery item">
      <img
        src={imageSrc}
        alt={title}
        className={styles.image}
        onClick={onPreview}
        loading="lazy"
      />
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
}
