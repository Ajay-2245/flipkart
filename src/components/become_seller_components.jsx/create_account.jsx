import GST from "./gst_in";
import Products from "./products";
function CreateAccount() {
  return (
    <div id="b1">
      <h3>Create Account</h3>
      {/*  */}
      <div style={{ display: "flex", width: "100%" }}>
        <p style={{ lineHeight: "1.8" }}>
          Creating your Flipkart seller account is a quick process, taking less
          than 10 minutes, and requires only 3 documents. Follow the checklist
          to ensure a seamless account creation experience. By having these
          documents ready, you can streamline the account creation process and
          get started on Flipkart as an online seller in no time.
          <p>* for selling in all categories except for book</p>
          <p> ** for selling under books category</p>
        </p>
        <img
          src="images/Seller_images/create_account.png"
          alt=""
          style={{ height: "400px" }}
        />
      </div>

      <GST />
      <Products />
    </div>
  );
}

export default CreateAccount;
