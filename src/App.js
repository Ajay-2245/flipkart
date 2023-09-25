import "./styles.css";
import Layout from "./layout";
import { Row, Col, Container } from "reactstrap";
import SellerFooter from "./components/become_seller_components.jsx/seller_footer";
import BecomeSellerParent from "./components/become_seller_components.jsx/Parent";
import LoginParent from "./components/login/Parent";

export default function App() {
  return (
    <div>
      {/* <LoginParent /> */}

      {/* <BecomeSellerParent /> */}
      <Layout />
    </div>
  );
}
