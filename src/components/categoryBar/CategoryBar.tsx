import "./CategoryBar.css";

function CategoryBar() {
  return (
    <div className="CategoryBar">
      <div className="CategoryImageBox">
        <img src="/src/assets/Benek.jpg" className="categoryPicture" />
        <div className="categoryNameOverlay">
          <div className="categoryName">DOG</div>
        </div>
      </div>
      <div className="CategoryImageBox">
        <img
          src="/src/assets/Tomasz.jpg"
          className="categoryPicture"
          // style={{ borderRadius: "0" }}
        />
        <div
          className="categoryNameOverlay"
          // style={{ borderRadius: "0" }}
        >
          <div className="categoryName">CAT</div>
        </div>
      </div>
      <div className="CategoryImageBox">
        <img
          src="/src/assets/Edmund.jpg"
          className="categoryPicture"
          // style={{ borderRadius: "0 5px 5px 0" }}
        />
        <div
          className="categoryNameOverlay"
          // style={{ borderRadius: "0 5px 5px 0" }}
        >
          <div className="categoryName">REPTILE</div>
        </div>
      </div>
    </div>
  );
}
export default CategoryBar;
