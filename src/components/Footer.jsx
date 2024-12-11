import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Import the WhatsApp icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Centre Ben Nahia</p>
        <p>
        <FontAwesomeIcon icon={faWhatsapp} style={{ marginLeft: "8px" , color :"#25d366" ,     marginRight:"2%" , fontSize: "18px" }} /> {/* WhatsApp icon */}

          <a
            href="https://wa.me/97111206"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
                      97 111 206
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
