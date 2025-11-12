import React from "react";
function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg mx-auto shadow-sm py-3"
      style={{
        background: "linear-gradient(90deg, #055CA3 0%, #02233D 100%)",
        borderRadius: "20px",
        width: "80%", 
        fontFamily: "Poppins",
        position: "sticky",
      }}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold ms-3" href="#">
          AG Clinic
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div
            className="navbar-nav gap-4 text-center"
            style={{
              fontSize: "17.5px",
              fontWeight: "500",
            }}
          >
            <a className="nav-link text-white" href="#">
              Home
            </a>
            <a className="nav-link text-white" href="#">
              About us
            </a>
            <a className="nav-link text-white" href="#"
            
           >
              Services
            </a>
            <a className="nav-link text-white" href="#">
              Team
            </a>
            <a className="nav-link text-white" href="#">
              Blogs
            </a>
            <a className="nav-link text-white" href="#">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
