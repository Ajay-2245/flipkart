function ListProducts() {
  return (
    <div style={{ marginTop: "20px" }} id="b2">
      <h3>List products </h3>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <p style={{ width: "50%", paddingTop: "20px", lineHeight: "1.8" }}>
          What is a listing? A listing refers to the process of registering your
          product on the Flipkart platform, making it visible to customers, and
          enabling them to view and purchase your product. It involves creating
          a detailed product page that includes essential information such as
          product title, description, images, pricing, and other relevant
          details. A well-crafted listing helps attract potential customers and
          facilitates the sale of your product on Flipkart.
        </p>
        <img
          src="images/List_products_images/demo.png"
          alt=""
          height="300px"
          width="400px"
        />
      </div>
      <p style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        Did you know that providing precise and comprehensive information about
        your product, along with clear and captivating images, can increase its
        visibility on our platform by up to 15%.
      </p>

      <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
        Listing on Flipkart can be done in 2 different ways
      </h4>

      <div>
        <ol
          type="1"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <li>
            <div style={{ padding: "0px" }}>
              <p style={{ fontWeight: "500", color: "#333333" }}>
                {" "}
                Match with Existing products
              </p>
              <iframe
                width="350"
                height="200"
                src="https://www.youtube.com/embed/jazZiaTb4_M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p
                style={{
                  textAlign: "left",
                  width: "100%",
                  padding: "0px",
                  lineHeight: "1.8"
                }}
              >
                If your product is already available on Flipkart, you have the
                option to seamlessly link or 'Latch' onto the existing product
                listing. This allows you to make your product live on the
                platform without the need to create a separate listing.
              </p>
            </div>
          </li>
          <li>
            <p style={{ fontWeight: "500", color: "#333333" }}> New Products</p>
            <iframe
              width="350"
              height="200"
              src="https://www.youtube.com/embed/oKPV5sIjXF8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p
              style={{
                width: "100%",
                textAlign: "left",
                padding: "0px",
                lineHeight: "1.8"
              }}
            >
              For products not currently available on Flipkart, you'll need to
              provide complete information and create a new listing with details
              like description, dimensions, features, images, and usage
              instructions.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default ListProducts;
