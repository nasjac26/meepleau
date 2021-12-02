import { NavLink } from "react-router-dom";

function Navbar( { user, setUser } ) {

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
          setUser(null);
          }
      });
  }
  
  function showLoginButton() {
      return (
        <NavLink className="btn btn-secondary m-3" to="/login">Login</NavLink>
      );
    } 
  function showLogoutButton() {
      return (
      <button type="button" className="btn btn-secondary m-3" onClick={handleLogoutClick}>Logout</button>  
      );
    }

  function showSignupButton() {
      return (
        <NavLink className="btn btn-secondary m-3" to="/signup">Signup</NavLink>
      );
    }
  
  function showProfileButton() {
      return (
        <NavLink className="btn btn-secondary m-3" to="/profile">My Profile</NavLink>
      )
  }




  
  
  
  return ( 


    <div className="container">

        <nav class="navbar navbar-light bg-dark rounded">
          <div class="d-flex mx-auto me-1">
            <NavLink className="btn btn-secondary m-3" to="/">Home</NavLink>
            {user ? showProfileButton() : null}
            {!user ? showSignupButton() : null}
            {!user ? showLoginButton() : showLogoutButton()};
            </div>
        </nav>

    </div>

  );
}

export default Navbar;


