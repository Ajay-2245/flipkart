import "./layout.css";
import "./styles/seller.css";
import SellerFooter from "./components/become_seller_components.jsx/seller_footer";
import CreateAccount from "./components/become_seller_components.jsx/create_account";
import ListProducts from "./components/become_seller_components.jsx/list_products";
import Storage from "./components/become_seller_components.jsx/storage";
import Payments from "./components/become_seller_components.jsx/payments";
import GrowFaster from "./components/become_seller_components.jsx/grow_faster";
import SellerApp from "./components/become_seller_components.jsx/seller_app";
import Help from "./components/become_seller_components.jsx/help";
import SellOnline from "./components/become_seller_components.jsx/sell_online";
import SellerNavbar from "./components/become_seller_components.jsx/seller_navbar";

import Bookmark from "./components/become_seller_components.jsx/bookmark";

function Layout() {
  return (
    <div className="grid-container">
      <div className="grid-box-1">
        <SellerNavbar />
      </div>
      <div className="grid-box-2">
        <SellOnline />
      </div>

      <div className="grid-box-5">
        <Bookmark />
      </div>

      <div className="grid-box-3">
        <CreateAccount />
        <ListProducts id="#b2" />
        <Storage />
        <Payments />
        <GrowFaster />
        <SellerApp />
        <Help />
      </div>
      <div className="grid-box-4">
        <SellerFooter />
      </div>
    </div>
  );
}

export default Layout;
