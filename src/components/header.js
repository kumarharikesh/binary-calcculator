import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div style="padding-bottom: 1rem">
      <nav className="navigation container">
        <div className="nav-brand">
          <a
            href="http://harrystyle.000webhostapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            Harikesh Patel
          </a>
        </div>
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <a
              className="link link-active"
              href="https://kumarharikesh-portfolio.netlify.app/index.html"
            >
              Home
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://kumarharikesh-portfolio.netlify.app/projects.html"
            >
              Projects
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://kumarharikesh-portfolio.netlify.app/blogs.html"
            >
              Blogs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
