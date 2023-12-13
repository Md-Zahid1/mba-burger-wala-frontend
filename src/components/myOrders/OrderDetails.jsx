import React from 'react'

const OrderDetails = () => {
    return (
        <section className='orderDetails'>
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address</b>
                        {"asdf 1234 lkj"}
                    </p>
                </div>

                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Abhishek"}
                    </p>
                    <p>
                        <b>Phone</b>
                        {123567890}
                    </p>
                </div>


                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"11-12-2023"}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        {"13-12-2023"}
                    </p>
                </div>

                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Payment Reference</b>
                        #{"11-as12-hjf2023"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"13-12-2023"}
                    </p>
                </div>

                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total</b>
                        ₹{12345}
                    </p>

                    <p>
                        <b>Shipping Charges</b>
                        ₹{200}
                    </p>

                    <p>
                        <b>Tax</b>
                        ₹{250}
                    </p>
                    <p>
                        <b>Total Amount</b>
                        ₹{2500}
                    </p>
                </div>
                <article>
                    <h1>Orderd Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{12}</span>x<span>{1212}</span>
                        </div>
                    </div>

                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{10}</span>x<span>{121}</span>
                        </div>
                    </div>

                    <div>
                        <h4>Burger Fries</h4>
                        <div>
                            <span>{10}</span>x<span>{1213}</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 800, }}>Sub Total</h4>
                        <div style={{ fontWeight: 800, }}>₹{2345}</div>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails
