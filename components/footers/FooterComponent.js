import React from "react";
import Link from "next/link";
import { DISCORDLINK, GITHUBLINK, INSTAGRAMLINK } from "@/app/shared/LINKS";

function Footer(props) {
  return (
    <footer className="site-footer text-center text-lg-start bg-light text-muted">
      {/* Section: Social Media  */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none-d-lg-block">
          <span>Connect with us on social media</span>
        </div>
        {/* Left - end*/}
        {/* Right */}
        <div>
          <a href={INSTAGRAMLINK} className="me-4 text-reset">
            <i className="bi bi-instagram" />
          </a>
          <a href={GITHUBLINK} className="me-4 text-reset">
            <i className="bi bi-github" />
          </a>
          <a href={DISCORDLINK} className="me-4 text-reset">
            <i className="bi bi-discord" />
          </a>
        </div>
        {/* Right - end */}
      </section>
      {/* Section: Social Media - end  */}
      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column - 1 */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">TUDev</h6>
              <p>
                We are a student club established at Temple University. We are a
                focused community of designers, developers, hackers, and makers.
              </p>
            </div>
            {/* Grid column - 1 end */}
            {/* Grid column - 2 */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <Link className="text-reset text-decoration-none" href="/">
                  Home
                </Link>
              </p>
              <p>
                <Link className="text-reset text-decoration-none" href="#about">
                  About
                </Link>
              </p>
              <p>
                <Link
                  className="text-reset text-decoration-none"
                  href="#events"
                >
                  Events
                </Link>
              </p>
              <p>
                <Link
                  className="text-reset text-decoration-none"
                  href="#projects"
                >
                  Projects
                </Link>
              </p>
            </div>
            {/* Grid column - 2 end */}
            {/* Grid column - 3 */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <Link
                className="text-reset text-decoration-none"
                href="https://maps.google.com/?q=1801 N Broad St,
                  Philadelphia, PA 19122, USA"
              >
                <p>
                  <i className="bi bi-house-fill me-3" /> 1801 N Broad St,
                  Philadelphia, PA 19122, USA
                </p>
              </Link>
              <Link
                className="text-reset text-decoration-none"
                href="mailto:temple.tudev@gmail.com"
              >
                <p>
                  <i className="bi bi-envelope-fill me-3"></i>
                  temple.tudev@gmail.com
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="/" className="text-reset fw-bold text-decoration-none">
            TUDev.org
          </a>
        </p>
      </div>
      {/* Copyright */}
    </footer>
  );
}
export default Footer;
