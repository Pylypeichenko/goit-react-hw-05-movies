import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>
        This page was not found. Please return BACK or go to{' '}
        <Link to="/">main page</Link>{' '}
      </p>
    </div>
  );
};

export default NotFound;
