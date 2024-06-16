"use client";
import "./HeaderTop.css";
import { FaXTwitter } from "react-icons/fa6";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaTiktok,
  FaInstagram,
  FaSnapchatGhost,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
export default function HeaderTop() {
  const [selectedItem, setSelectedItem] = useState("English");

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="HeaderTop">
      <div className="container">
        <nav>
          <div className="logo">
            <img src="/assets/Groves-Logo.png" alt="" />
          </div>
          <div className="socials">
            <ul>
              <li>
                <a href="">
                  <FaTiktok size={20} color="#929292" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram size={20} color="#929292" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaXTwitter className="fax" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaSnapchatGhost size={20} color="#929292" />
                </a>
              </li>
              <li>
                <button
                  className="log"
                  style={{
                    background:
                      "linear-gradient(to bottom, #B08A4C, #B18C4D, #B28D4E, #B48E4F, #B58F50, #B69151, #B79252, #B89353, #B99454, #BA9656, #BB9756, #C19D5C, #C6A260, #C7A361, #C9A663, #D1AF6B, #D5B36E, #D7B570, #D8B671)",
                  }}
                >
                  Log in
                </button>
              </li>
              <li>
                <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="bg-transparent border-none flex items-center text-black text-left"
                  >
                    {selectedItem === "English" && (
                      <img
                        src="/assets/unitedkingdom.png"
                        alt=""
                        className="w-10 h-5"
                      />
                    )}
                    <span>{selectedItem}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-left">
                    <Dropdown.Item eventKey="English">English</Dropdown.Item>
                    <Dropdown.Item eventKey="Arabi">Arabi</Dropdown.Item>
                    <Dropdown.Item eventKey="Hindi">Hindi</Dropdown.Item>
                    <Dropdown.Item eventKey="Ukranian">Ukranian</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
          <Button variant="primary" onClick={handleShow} className="btn2">
            <GiHamburgerMenu size={30} style={{ color: "#A5783D" }} />
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {" "}
                <img src="/assets/Groves-Logo.png" alt="" />
              </Offcanvas.Title>
              <FaTimes
                size={20}
                className="fa-solid fa-x"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="offcanva">
                <li className="nav_content">
                  <Link href="#">DINE WITH US</Link>
                </li>
                <li className="nav_content">
                  <Link href="#">PLAN YOUR VISIT</Link>
                </li>
                <li className="nav_content">
                  <Link href="#">EVENTS</Link>
                </li>
                <li className="nav_content">
                  <Link href="#">VIEW GROVES MAP</Link>
                </li>
                <li className="nav_content">
                  <Link href="#">OUR STORY</Link>
                </li>
                <li className="nav_content">
                  <Link href="#">CONTACT US</Link>
                </li>
              </ul>
              <ul className="ul2">
                <li>
                  <a href="#" className="socials">
                    <FaTiktok size={20} color="#929292" />
                  </a>
                  <a href="#" className="socials">
                    <FaInstagram size={20} color="#929292" />
                  </a>
                  <a href="#" className="socials">
                    <FaXTwitter className="fax" />
                  </a>
                  <a href="#" className="socials">
                    <FaSnapchatGhost size={20} color="#929292" />
                  </a>
                </li>

                <li>
                  <button
                    className="log"
                    style={{
                      background:
                        "linear-gradient(to bottom, #B08A4C, #B18C4D, #B28D4E, #B48E4F, #B58F50, #B69151, #B79252, #B89353, #B99454, #BA9656, #BB9756, #C19D5C, #C6A260, #C7A361, #C9A663, #D1AF6B, #D5B36E, #D7B570, #D8B671)",
                    }}
                  >
                    Log in
                  </button>
                </li>
                <li>
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="bg-transparent border-none flex items-center text-black text-left"
                    >
                      {selectedItem === "English" && (
                        <img
                          src="/assets/unitedkingdom.png"
                          alt=""
                          className="w-10 h-5"
                        />
                      )}
                      <span>{selectedItem}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-left">
                      <Dropdown.Item eventKey="English">English</Dropdown.Item>
                      <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="Another action">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Something else">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="headert_bottom">
          <ul>
            <li>
              <Link href="#">DINE WITH US</Link>
            </li>
            <li>
              <Link href="#">PLAN YOUR VISIT</Link>
            </li>
            <li>
              <Link href="#">EVENTS</Link>
            </li>
            <li>
              <Link href="#">VIEW GROVES MAP</Link>
            </li>
            <li>
              <Link href="#">OUR STORY</Link>
            </li>
            <li>
              <Link href="#">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
