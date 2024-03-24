"use client"
import Link from 'next/link';
import { useAppSelector } from '@/store';

const NotFound = () => {
  const animation = useAppSelector((state) => state.splash.splashState);

  return (
    <>
      {!animation && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '0 20px',
            textAlign: 'center',
          }}
        >
          <h2>404 - Page Not Found</h2>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <Link href="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
            Go back to home page
          </Link>
        </div>
      )}
    </>
  );
};

export default NotFound;
