import companyLogo from '../assets/company-logo.png';

function Footer() {

    const imgStyle ={
        background: "#transparent",
        maxHeight: "70px",
        maxWidth: "140px",
        marginLeft: "-1rem",
    }

    return(
        <footer id="footer-wrap">
            <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                <img src={companyLogo} style={imgStyle} alt="Our Company Logo" />

                Copyright &copy; John L. Michels {new Date().getFullYear()}.
                <br />
                John L. Michels is a global law firm operating through various separate and distinct legal entities.
                <br />
                All Rights Reserved.</div>
            <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                <div className="footer-right-top"></div>
                <div className="footer-right-bottom"></div>
            </div>
        </footer>
    )
}

export default Footer;