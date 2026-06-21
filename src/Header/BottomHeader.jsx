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
        <>
            <div style={divStyle}>
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">CASE STUDIES</a>
                <a href="#">AREAS OF PRACTICE</a>
                <a href="#">CONTACTS</a>
            </div>
        </>
    )
}

export default BottomHeader