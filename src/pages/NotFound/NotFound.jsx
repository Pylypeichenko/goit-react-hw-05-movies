import { Link } from 'react-router-dom';

import { Notify } from './NotFound.styled';

const NotFound = () => {
  return (
    <Notify>
      This page was not found. Please return to &#32;
      <Link to="/">main page</Link>
    </Notify>
  );
};

export default NotFound;
