import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
    return (
        <section className='paymentsuccess'>
            <main>
                <h1>Order Confirmed</h1>
                <p>Order Placed Successfully, you can check order status below</p>
                <Link to='/myorders'>Cheack Status</Link>
            </main>
        </section>
    )
}

export default PaymentSuccess
