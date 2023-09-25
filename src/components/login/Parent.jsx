import Footer from "./footer";
import Navbar from "./navbar";
import Header from "./header";
import Content1 from "./content1";
import Beauty from "./beauty";
import Specials from "./specials";
import Cart from "./cart";

function LoginParent() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="header_component">
        <Header></Header>
      </div>
      <img
        src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20"
        alt="aeroplane_image"
        className="aeroplane_img"
        style={{ width: "90vw", marginLeft: "5vw" }}
      ></img>
      <div className="Electronics">
        <Content1 heading="Best of Electronics" />
        <img
          src="images/content1_images/aeroplane_banner.png"
          alt="aeroplane_image"
          id="image"
          style={{ marginLeft: "1vw" }}
        ></img>
      </div>
      <div className="Beauty">
        <Beauty heading="Beauty,Food,Toys and more..."></Beauty>
      </div>

      <div className="Independence_day">
        <Specials></Specials>
        <img
          src="images/independence_day/specials.png"
          alt=""
          style={{ height: "700px", width: "65%", float: "right" }}
        />
      </div>

      <Footer></Footer>
    </div>
  );
}
export default LoginParent;
