import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming initially the user is logged in
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary logout actions (e.g., clear local storage, send a logout request to the server)
    // For simplicity, here we are just changing the local state
    setIsLoggedIn(false);

    // Redirect to the login page or any other appropriate page after logout
    navigate('/home');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;



// import React, { useState } from 'react';

// const Logout = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogout = () => {
//     // Your logout logic here
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <button onClick={handleLogout}>Logout</button>
//       ) : (
//         <p>You are not logged in.</p>
//       )}
//     </div>
//   );
// };

// export default Logout;
