import './contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import twitterIcon from '../../assets/images/twitterIcon.png';
import facebookIcon from '../../assets/images/facebookIcon.png';
import skypeIcon from '../../assets/images/skypeIcon.png';
import Button from '../Button/button';



export default function Contacts (props) {
    return (
        <div className="contactsContainer"> 
             <table className="contactBox">
                <tbody className="contact">
                    <th>
                        <Button icon={<FontAwesomeIcon icon={faPhone} />}/>
                    </th>
                    <th>
                        <h1><a href='tel:500-342-0242'>500 342 242</a></h1>
                    </th>
                </tbody>
                <tbody  className="contact">
                    <th>
                        <Button icon={<FontAwesomeIcon icon={faEnvelope} onClick={() => window.location = 'mailto:yourmail@gmail.com'} />}/> 
                    </th>
                    <th>
                        <h1><a href="mailto:yourmail@gmail.com">y.stashevskaya@gmail.com</a></h1>
                    </th>
                </tbody>
                <tbody className="contactBoundle">
                    <th>
                        <Button icon={<img src={twitterIcon} className="contactImg" alt="twitter"/>} /> 
                    </th>
                    <th>
                        <div>
                            <h1>Twitter</h1> <h2><a href="https://www.twitter.com">https://www.twitter.com</a></h2>
                        </div>
                    </th>
                </tbody>
                <tbody className="contactBoundle">
                    <th>
                        <Button icon={<img src={facebookIcon} className="contactImg" alt="facebook" />}/>
                    </th>
                    <th>
                        <div>
                            <h1>facebook</h1>
                            <h2><a href="https://www.facebook.com/facebook">https://www.facebook.com/facebook</a></h2>                
                        </div>
                    </th>
                </tbody>
                <tbody>
                    <th>
                        <Button icon={<img src={skypeIcon} className="contactImg" alt="skype"/>}/>
                    </th>
                    <th>
                        <div>
                            <h1>Skype</h1>
                            <h2><a href="skype:<username>?<action>">https://www.skype.com</a></h2>  
                        </div>
                    </th>
                </tbody>
            </table>
        </div>
    )
}
