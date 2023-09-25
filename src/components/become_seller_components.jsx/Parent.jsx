import CreateAccount from "./create_account";
import ListProducts from "./list_products";
import Storage from "./storage";
import Payments from "./payments";
import GrowFaster from "./grow_faster";
import SellerApp from "./seller_app";
import Help from "./help";
import SellerFooter from "./seller_footer";
import Bookmark from "./bookmark";
import SellOnline from "./sell_online";
import SellerNavbar from "./seller_navbar";

function BecomeSellerParent() {
  return (
    <div>
      <SellerNavbar />

      <SellOnline />

      <div>
        <Bookmark />
        <div className="bContent">
          <CreateAccount />
          <ListProducts id="#b2" />
          <Storage />
          <Payments />
          <GrowFaster />
          <SellerApp />
          <Help />
        </div>
      </div>

      <SellerFooter />
    </div>
  );
}

export default BecomeSellerParent;
