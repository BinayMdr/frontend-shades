import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function ThnankYou() {
  
  return (
    <Layout>
      <section className="thank-you-section span">
        <div className="container">
          <div className="thank-you-content">
            <h2>Thank You for Your Purchase!</h2>
            <p>Dear [Customer's Name],</p>
            <p>Thank you for choosing us! Your order is confirmed and on its way. We appreciate your support!</p>
            
            <p>If you have any questions or need assistance, feel free to contact us at [Customer Support Email/Phone Number].</p>

            <p>Thank you again for choosing us!</p>

            <div className="text-center">
                <Link href="/products" className="primary-btn">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </section>     
    </Layout>       
  );
}
