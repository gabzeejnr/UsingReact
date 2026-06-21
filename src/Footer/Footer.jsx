function Footer() {

    const footerStyle ={
        background: "rgb(177, 151, 107)",
        marginTop: "auto"
    }

    return(
        <footer id="footer-wrap">
            <div>Copyright &copy; John L. Michels {new Date().getFullYear()}.
                <br />
                John L. Michels is a global law firm operating through various separate and distinct legal entities.
                <br />
                All Rights Reserved.</div>
            <div>THis is a footer</div>
        </footer>
    )
}

export default Footer;