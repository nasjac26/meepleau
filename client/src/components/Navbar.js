import { NavLink, useNavigate } from "react-router-dom";

function Navbar( { user, setUser } ) {
  const navigate = useNavigate();

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
          setUser(null);
          }
      });
    navigate('/');
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
        <NavLink className="btn btn-secondary m-3" to="/profile">Log a Game Session!</NavLink>
      )
  }




  
  
  
  return ( 


    <div className="container">

        <nav className="navbar navbar-styling rounded">
          <div className="">
            <NavLink className="btn btn-secondary m-3" to="/">Home</NavLink>
            {user ? showProfileButton() : null}
            {!user ? showSignupButton() : null}
            {!user ? showLoginButton() : showLogoutButton()}
            
            </div>
        </nav>

    </div>

  );
}

export default Navbar;


