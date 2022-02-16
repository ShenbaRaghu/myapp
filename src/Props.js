import React from "react";

const Props = (props) => {
  console.log(props);
  return (
    <>
      <div className="col-lg-3 my-3">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <p>{props.id}</p>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-dark">
              {props.btn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Props;
