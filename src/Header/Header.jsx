import TopHeader from './TopHeader.jsx';
import BottomHeader from './BottomHeader.jsx';

function Header() {

    const divStyle = {
        backgroundColor: "rgb(231, 223, 210)",
        marginTop: "0",
        minHeight: "9rem"
    }
    const hrStyle={
        backgroundColor: "rgb(148, 112, 57)"
    }

    return(
        <header id="header-wrapper" style={divStyle}>
            <TopHeader />
            <hr style={{backgroundColor: "rgb(148, 112, 57)",
                border: "1px solid transparent"
            }} />
            <BottomHeader />
        </header>
    )
}

export default Header;