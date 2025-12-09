import { Link } from 'react-router-dom';
import { PageMeta } from '../components/shared/PageMeta';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <PageMeta
        title="Page Not Found | SACKOBA Qatar"
        description="The page you are looking for doesn’t exist or has been moved."
        canonical="https://sackobaqatar.com/404"
        ogImage="https://sackobaqatar.com/images/og/404.jpg"
      />
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};
