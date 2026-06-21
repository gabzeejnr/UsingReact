import companyLogo from '../assets/company-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function TopHeader() {

    const address = `7095 Indiana Ave #200, Riverside, CA 92506`;
    
    const addressStyle ={
        fontSize: "14px",
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
                <a style={mailStyle} href="mailto:johnmicheals815@gmail.com" className="active-header-link">
                    johnmicheals815@gmail.com
                </a>
                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "green", fontSize: "1.2rem" }} />
            </div>

        </div>
    )
}

export default TopHeader