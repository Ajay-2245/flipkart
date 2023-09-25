import "../../styles/seller.css";

function Bookmark() {
  return (
    <div className="bookmark">
      <ul style={{ listStyleType: "none" }}>
        <li>
          <a href="#b1" style={{ listStyleType: "none" }}>
            Create Account
          </a>
        </li>
        <li href="#b2">
          <a href="#b2" style={{ listStyleType: "none" }}>
            List Products
          </a>
        </li>
        <li href="#b3">
          <a href="#b3" style={{ listStyleType: "none" }}>
            Storage and Shipping
          </a>
        </li>
        <li href="#b4">
          <a href="#b4" style={{ listStyleType: "none" }}>
            Recieve payments
          </a>
        </li>
        <li href="#b5">
          <a href="#b5" style={{ listStyleType: "none" }}>
            Grow faster
          </a>{" "}
        </li>
        <li href="#">
          <a href="#b6" style={{ listStyleType: "none" }}>
            Seller App
          </a>
        </li>
        <li href="#">
          <a href="#b7" style={{ listStyleType: "none" }}>
            Help and Support
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Bookmark;
