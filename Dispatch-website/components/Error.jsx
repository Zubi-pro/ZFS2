import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/error.css';

function Error() {
  let location = useLocation();

  return (
    <div className="not-found">
      <h1 className="not-found-text">Oops! Page Not Found for {location.pathname}</h1>
    </div>
  );
}

export default Error;
