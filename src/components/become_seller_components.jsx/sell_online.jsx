import "../../styles/seller.css";

function SellOnline() {
  return (
    <div
      className="sell_online"
      style={{ width: "90vw", height: "90%", display: "flex" }}
    >
      <div>
        <a href="#" style={{ textDecoration: "none" }}>
          Home
        </a>
        <a href="#" style={{ textDecoration: "none" }}>
          Sell Online
        </a>
        <p>Sell Online with Flipkart</p>
      </div>
      <img
        src="images/Seller_images/sell_online.png"
        alt=""
        height="300vh"
        width="100%"
      />
    </div>
  );
}

export default SellOnline;
