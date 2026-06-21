import companyLogo from '../assets/company-logo.png';
import { address, email } from '../AboutClient.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function TopHeader() {

    
    const addressStyle ={
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
    }
    const wrapperStyle={
        minHeight: "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontStyle: "Time New Roman",
        padding: "12px 24px",
        gap: "20px"
    }
    const imageStyle = {
        maxHeight: "70px",
        width: "auto",
        background: "rgb(148, 112, 57)"
    };
    const mailStyle ={
        color: "rgb(75, 69, 59)",
        textDecoration: "none"
    }

    return(
        <div style={wrapperStyle}>
            <p style={addressStyle}>
                <FontAwesomeIcon icon={faLocationDot} />
                {address}
            </p>
            <img style={imageStyle} src={companyLogo} alt="Our Company Logo" />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginRight: "1rem" }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "rgb(177, 151, 107)" }} />
                <a style={mailStyle} href={`mailto:${email}`} className="active-header-link">
                    {email}
                </a>
                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "green", fontSize: "1.2rem" }} />
            </div>

        </div>
    )
}

export default TopHeader