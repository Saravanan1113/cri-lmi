import React from "react";
import { Link } from "react-router-dom";
import course1 from "../img/course-1.jpg";
import course2 from "../img/course-2.jpg";
import course3 from "../img/course-3.jpg";
const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Quick Link</h4>
            <Link className="btn btn-link" to="/about">
              About Us
            </Link>
            <Link className="btn btn-link" href="">
              Contact Us
            </Link>
            <Link className="btn btn-link" href="">
              Privacy Policy
            </Link>
            <Link className="btn btn-link" href="">
              Terms & Condition
            </Link>
            <Link className="btn btn-link" href="">
              FAQs & Help
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York,
              USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
            <div className="d-flex pt-2">
              <Link className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Gallery</h4>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={course1} alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={course2} alt="" />
              </div>{" "}
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={course3} alt="" />
              </div>{" "}
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={course3} alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={course2} alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src={course1} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;
              <Link className="border-bottom" href="#">
                Your Site Name
              </Link>
              , All Right Reserved. Designed By
              <Link className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </Link>
              <br />
              <br />
              Distributed By
              <Link className="border-bottom" href="https://themewagon.com">
                ThemeWagon
              </Link>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link href="">Home</Link>
                <Link href="">Cookies</Link>
                <Link href="">Help</Link>
                <Link href="">FQAs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
