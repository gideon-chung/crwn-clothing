import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //stripe wants to see prices in cents or the whole integer
  const publishableKey =
    "pk_test_51IMGqUDIeKrCnaZRvzEsEo5lUMdPFpCJWH8v5ezVEtoKdPMsS4uJLf6j6dY2dcxzuaxps1gQYmMw94WcJKfQv6Bg00Rs3R9qw5";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;