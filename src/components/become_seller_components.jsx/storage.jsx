function Storage() {
  return (
    <div
      id="b3"
      style={{
        marginTop: "20px",
        marginBottom: "20px"
      }}
    >
      <h3 style={{}}>Storage and Shipping</h3>
      <p style={{ lineHeight: "1.8" }}>
        Congratulations on receiving your first order! When it comes to shipping
        your products to customers, Flipkart understands the importance of fast
        and reliable delivery in secure packaging.
      </p>
      <p>The two popular fulfilment options:</p>
      <ol>
        <li>Fulfilment by Flipkart (FBF)</li>
        <li>Non Fulfilment by Flipkart (NFBF)</li>
      </ol>
      <p style={{ lineHeight: "1.8" }}>
        Consider the fulfilment option that best suits your needs and
        preferences to ensure timely and secure delivery of your products to
        Flipkart customers.
      </p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%" }}>
          <h4>Fulfilment by Flipkart (FBF)</h4>
          <p style={{ lineHeight: "1.8" }}>
            Eliminate worries about storage, packing, shipping, and delivery by
            leveraging Flipkart's Fulfilment by Flipkart (FBF) service. FBF
            offers a comprehensive solution that handles all your shipping needs
            under one roof. With FBF, you can entrust Flipkart to efficiently
            manage the entire process, from storing your products to expertly
            packing and shipping them to customers. FBF maintains the standards
            required by FAssured, enabling a Flipkart seller to have access to
            the FAssured badge on their listings. Enjoy a hassle-free experience
            and focus on growing your business while Flipkart takes care of the
            logistics.
          </p>
        </div>
        <iframe
          width="400"
          height="215"
          src="https://www.youtube.com/embed/HUDj5NbChv0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ borderRadius: "8px" }}
        ></iframe>
      </div>

      <ol className="items">
        <li>Pick-up from seller location to Flipkart warehouse</li>
        <li>Faster delivery to customer</li>
        <li>Seamless order processing</li>
        <li>Customer returns handled end to end</li>
        <li>Warehouse space</li>
        <li>Quality selection recommendation</li>
        <li>Rigorous quality checks</li>
        <li>Quality packaging materials</li>
      </ol>

      <h4>Non Fulfilment by Flipkart (NFBF)</h4>
      <p style={{ lineHeight: "1.8" }}>
        With Non-Fulfillment by Flipkart (NFBF), you can benefit from end-to-end
        delivery of your products directly from your location to the customer.
        In NFBF, it is the responsibility of the seller to ensure that the
        product is properly packed and ready for dispatch before the delivery
        agent arrives at the seller's location. This service allows you to
        maintain control over the packaging process while leveraging Flipkart's
        logistics network for efficient and reliable delivery.
      </p>

      <ol>
        <li>Delivery to 19000+ pin codes across India</li>
        <li>Tracking of your product</li>
        <li>Customer returns support</li>
        <li>Logistics support from community warehouse available</li>
      </ol>

      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#edf6fc" }}>
            <th width="300px" height="80px"></th>
            <th width="300px" height="80px">
              Fulfilment by Flipkart (FBF)
            </th>
            <th width="300px" height="80px">
              Non Fulfilment by Flipkart (NFBF)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "80px" }}>
            <td width="300px">Packaging</td>
            <td width="300px">Flipkart will pack your products</td>
            <td width="300px">
              Seller will pack their products before pick-up
            </td>
          </tr>

          <tr style={{ height: "80px" }}>
            <td width="300px">Storage</td>
            <td width="300px">
              Flipkart will store your products at the nearest Flipkart
              warehouse
            </td>
            <td width="300px">
              Seller will store products at their premise or community warehouse
            </td>
          </tr>

          <tr style={{ height: "80px" }}>
            <td width="300px">Shipping</td>
            <td width="300px">
              Flipkart will pick and deliver your products to the customer
            </td>
            <td width="300px">
              Seller will schedule a pick-up & a delivery agent will pick your
              order
            </td>
          </tr>

          <tr style={{ height: "80px" }}>
            <td width="300px">Fees</td>
            <td width="300px">Relevant FBF fees will be applicable</td>
            <td width="300px">
              Normal shipping cost will be applicable to help deliver your
              product to your customer, based on local, zonal or national
              delivery.
            </td>
          </tr>

          <tr style={{ height: "80px" }}>
            <td width="300px">Returns</td>
            <td width="300px">Managed by Flipkart</td>
            <td width="300px">Managed by Flipkart</td>
          </tr>

          <tr style={{ height: "80px" }}>
            <td width="300px">Customer Service</td>
            <td width="300px">Managed by Flipkart</td>
            <td width="300px">Managed by Flipkart</td>
          </tr>
        </tbody>
      </table>
      <img src="images/Seller_images/assured.png" alt="" />
      <p style={{ lineHeight: "1.8" }}>
        FAssured by Flipkart is an exclusive reliability program designed to
        offer additional visibility and benefits to your products. By
        participating in FAssured, your products undergo extra quality checks
        and are guaranteed to be delivered within 2-4 days of ordering. The
        FAssured tag not only ensures faster delivery but also brings increased
        visibility, higher quality, and more orders for your products. It serves
        as Flipkart's seal of trust, emphasising reliability and speed. Earning
        the FAssured badge can lead to higher revenue and garner greater trust
        from customers, enhancing your overall online selling experience on
        Flipkart
      </p>
    </div>
  );
}

export default Storage;
