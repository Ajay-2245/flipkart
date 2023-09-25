function SellerApp() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#edf6fc",
        borderRadius: "8px"
      }}
      id="b6"
    >
      <img
        src="images/Seller_images/seller_app_image.png"
        alt=""
        height="400px"
        style={{ marginTop: "150px" }}
      />
      <div style={{ width: "60%", marginTop: "30px" }}>
        <h3>Seller App</h3>
        <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
          We recognize the significance of staying connected to your Flipkart
          online business no matter where you are. That's why we offer the
          Flipkart Seller Hub App, your trusted companion for managing your
          business on the go.
        </p>
        <h4>The Seller Hub App enables you to conveniently handle</h4>
        <ol>
          <li>Create and manage listing</li>
          <li>Manage orders and fulfilment</li>
          <li>Track inventory</li>
          <li>Payments</li>
          <li>Advertising</li>
          <li>Business Insights</li>
          <li>Seller Support and more</li>
        </ol>
        <p>
          Stay connected and in control of your Flipkart business with the
          Seller Hub App.
        </p>
        <div style={{ marginBottom: "10px" }}>
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            Google Play
          </a>
        </div>
        <div>
          <a href="" style={{ textDecoration: "none" }}>
            Apple Store
          </a>
        </div>
      </div>
    </div>
  );
}

export default SellerApp;
