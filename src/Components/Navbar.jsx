import React from "react";

function Navbar() {
  
  return (
    <>
      <nav className="navbar  navbar-expand-lg bg-body-tertiary  m-0 p-0">
        <div className="container-fluid bg-dark ">
          <a className="navbar-brand text-light fs-2" href="#">
            Text
          </a>
          <button
          style={{color: "white",
            background: "white"}}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light  fs-4" aria-current="page" href="#">
                  Home
                </a>
              </li>
             
            </ul>
            <form className="d-flex" role="search">
             
             
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
