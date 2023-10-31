import React from "react";
import "./Trending.scss";
const Trending = (props) => {
  const item = props.data.slice(0, 5);

  return (
    <>
      <div className="titles">
        {/* <p>title</p> */}
        {item &&
          item.map((element) => {
            return <p>{element?.title}</p>;
          })}
      </div>
    </>
  );
};

export default Trending;
