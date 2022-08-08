import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="container">
          <div classname="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <img
                    src={photo.src.tiny}
                    className="img-fluid"
                    alt="result"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
