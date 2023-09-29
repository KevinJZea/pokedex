import { Link } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="NotFound--main-container">
      <h1>404 - Page Not Found</h1>
      <h2>Sorry, 😥 we couldn&apos;t find the page you were looking for.</h2>
      <h3>
        Go back to the <Link to="/">Home Page</Link>
      </h3>
    </div>
  );
};
