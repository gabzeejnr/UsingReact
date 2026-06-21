import './Header.css'

function BottomHeader() {

    const divStyle ={
        color: "black",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem"
    }

    return(
        <div style={divStyle}>
            <a className="active-header-link" href="#">HOME</a>
            <a className="active-header-link" href="#">ABOUT</a>
            <a className="active-header-link" href="#">CASE STUDIES</a>
            <a className="active-header-link" href="#">AREAS OF PRACTICE</a>
            <a className="active-header-link" href="#">CONTACTS</a>
        </div>
    )
}

export default BottomHeader