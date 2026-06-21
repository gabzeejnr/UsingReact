import companyLogo from '../assets/company-logo.png';
import { address, email } from '../AboutClient.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import './Header.css';

function TopHeader() {

    return(
        <div id="top-header-wrapper">
            <p className="left">
                <FontAwesomeIcon icon={faLocationDot} />
                {address}
            </p>
            <img src={companyLogo} alt="Our Company Logo" />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginRight: "1rem" }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "rgb(177, 151, 107)" }} />
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="active-header-link">
                    {email}
                </a>
                <a href={`https://wa.me/${email}`} target="_blank" rel="noopener noreferrer" className="active-header-link">
                    <FontAwesomeIcon icon={faWhatsapp} style={{ color: "green", fontSize: "1.2rem" }} />
                </a>
            </div>

        </div>
    )
}

export default TopHeader