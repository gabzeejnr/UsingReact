import companyLogo from '../assets/company-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function MobileHeader() {
    return(
        <div id="mobile-header-wrapper">
            <FontAwesomeIcon icon={faBars} className='mobile-header-left-icon' />
            <img src={companyLogo} alt="Our Company Logo" />
            <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} className='mobile-header-right-icon' />
            </a>
        </div>
    );
};

export default MobileHeader;