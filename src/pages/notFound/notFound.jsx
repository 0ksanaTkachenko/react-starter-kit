import { Link } from 'react-router-dom';
import routes from '@data/routes';

const NotFound = () => {
  return (
    <div
      className="container flex-center flex-column"
      style={{ minHeight: '100vh', textAlign: 'center' }}
    >
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn’t exist.</p>
      <Link to={routes.home} style={{ marginTop: '16px', color: 'blue' }}>
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
