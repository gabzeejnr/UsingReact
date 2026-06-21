import LeftBody from './LeftBody/LeftBody.jsx';
import RightBody from './RightBody/RightBody.jsx';
import './Body.css';
import { name } from '../AboutClient.jsx';

function Body() {
    return (
        <div id="body-wrapper">
            <div id="top">
                <h1>{name.join(' ').toUpperCase()}</h1>
            </div>
            <div id="bottom-body-wrapper">
                <LeftBody />
                <RightBody />
            </div>
        </div>
    );
}

export default Body;