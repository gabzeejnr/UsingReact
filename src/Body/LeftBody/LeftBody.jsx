import { email } from '../../AboutClient';
import clientPicture from '../../assets/johnlmichels.jfif';
import './LeftBody.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function LeftBody() {
    return (
        <div id="left-body-wrapper">
            <img src={clientPicture} alt="Client" />
            <div className="about">
                <p>
                    Partner,
                    <br />
                    Managing Partner, Los Angeles office,
                    <br />
                    Member of DLA Piper's Executive Committee,
                    <br />
                    Co-Chair, Investment Funds practice
                    <br />
                    Member, Executive Committee
                    <br />
                    Global Head, Family Law Practice
                </p>

                <div className='team_member_details'>
                    <p className='details-title'>Contacts</p>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href={`mailto:${email}`}>{email}</a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LeftBody;