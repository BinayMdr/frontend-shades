import Link from 'next/link';

const NotFound = () => {
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
        <h2>404 - Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link href="/">
          <span style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Go back to home page</span>
        </Link>
      </div>
    );
  };
  

export default NotFound;
