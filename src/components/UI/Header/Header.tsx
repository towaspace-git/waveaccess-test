import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import {useLocation} from 'react-router-dom'
const Header = () => {
  const location = useLocation()
  interface ILink {
    to: string;
    linkText: string;
  }
  const linkArray: ILink[] = [
    {
      to: "/active",
      linkText: "Active",
    },
    {
      to: "/completed",
      linkText: "Completed",
    },
  ];
  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
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
          <span className="navbar-brand">Car Service</span>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {linkArray.map((link) => {
                return (
                  <Link className={`nav-link ${link.to === location.pathname ? "active": ""}`} to={link.to} key={link.linkText}>
                    {link.linkText}
                  </Link>
                );
              })}
              <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#modal"
              >
                Add new car
              </button>
            </div>
          </div>
        </nav>
      </header>
      <Modal/>
    </>
  );
};

export default Header;
