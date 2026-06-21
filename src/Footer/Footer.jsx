import companyLogo from '../assets/company-logo.png';
import { address, email } from '../AboutClient.jsx';
import './Footer.css';

function Footer() {

    const imgStyle ={
        background: "#transparent",
        maxHeight: "70px",
        maxWidth: "140px",
        marginLeft: "-1rem",
    }

    const h4Style ={
        marginBottom: "0.5rem",
    }

    return(
        <footer id="footer-wrap">
            <div className="footer-left">
                <img src={companyLogo} style={imgStyle} alt="Our Company Logo" />

                Copyright &copy; John L. Michels {new Date().getFullYear()}.
                <br />
                John L. Michels is a global law firm operating through various separate and distinct legal entities.
                <br />
                All Rights Reserved.</div>
            <div className="footer-right">
                <div className="footer-right-top" style={{color: "white"}}>
                    <h4 style={h4Style}>VISIT OFFICE:</h4>
                    {address ? <p style={{marginTop: "0.5rem"}}>{address}</p> : null}
                </div>
                <div className="footer-right-bottom" style={{color: "white"}}>
                    <h4 style={h4Style}>CONTACT US</h4>
                    {email ? <p style={{marginTop: "0.5rem"}}>{email}</p> : <p style={{marginTop: "0.5rem"}}>Email not available</p>}
                </div>
            </div>
        </footer>
    )
}

export default Footer;