import "./Shimmer.css";

const Shimmer = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="shimmer-container">
        {arr.map((value, index) => {
          return (
            <div className="shimmer" key={index}>
              <div className="shimmer-img"></div>
              <div className="shimmer-info">
                <p className="name"></p>
                <p className="rating"></p>
                <p className="cuisine"></p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shimmer;
