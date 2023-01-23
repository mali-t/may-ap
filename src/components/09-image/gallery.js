import React from "react";
import "./gallery.scss";
import images from "./images.json";
const g = "gallery";

const Gallery = () => {
  return (
    <div className={`${g} row`}>
      {images.map((img, i) => (
        <div key={i}>
          <a href={require(`../../assests/img/${img.name}`)}>
            <img src={require(`../../assests/img/${img.name}`)} alt="" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
