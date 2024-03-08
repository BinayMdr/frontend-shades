"use client"
import Link from 'next/link';

const Error = () => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '0 20px',
        textAlign: 'center',
      }}>
        <h2>500 - Server Error</h2>
        <p>Oops! Something went wrong.</p>
        <Link href="/">
          <span style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Go back to home page</span>
        </Link>
      </div>
    );
  };
  

export default Error;
