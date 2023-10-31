import "./Trending.scss";

const Trending = (props) => {
  const item = props?.data;

  return (
    <>
      <div className="category">
        {item &&
          item.map((element) => {
            return (
              <>
                <div className="item">
                  <div className="image">
                    <img
                      src={element.thumbnail}
                      height={100}
                      width={100}
                      className="img"
                    />
                  </div>

                  <p>{element.title}</p>
                  <p>BDT. {element.price}</p>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Trending;
