import React, { useEffect } from 'react';
import { useAuth } from '../utils/AuthContext';

function Logout() {
  const auth = useAuth();
  return (
    <div className="container">
      <div>
        <button onClick={() => auth.logOut()} className="btn-submit">
          logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
