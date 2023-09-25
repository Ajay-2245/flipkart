function SellerNavbar() {
  return (
    <div>
      <nav>
        <img src="images/Seller_images/seller_logo.png" alt="" height="50px" />
        <div className="box-1">
          <ul className="navbar-1">
            <li>Sell Online</li>
            <li>Fees and commision</li>
            <li>Grow </li>
            <li>Learn</li>
            <li>Shopsy</li>
          </ul>
        </div>

        <div className="box-2">
          <ul className="navbar-2">
            <li>
              <a href="#">Login</a>
            </li>
            <li className="selling_btn">Start Selling</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SellerNavbar;
