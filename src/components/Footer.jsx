import { CiFacebook } from 'react-icons/ci';
import { TfiTwitter } from 'react-icons/tfi';
import { SlSocialLinkedin } from 'react-icons/sl';
import {SlSocialYoutube} from 'react-icons/sl' 
import './Footer.css';

const Footer = () => {
    return (
        <>
            <CiFacebook className='icon' />
            <TfiTwitter className='icon' />
            <SlSocialLinkedin className='icon' />
            <SlSocialYoutube className='icon' />
            <p className='icon-email'>
                Example@email.com
            </p>
            <p className='icon-copy'>
                Copyright &copy; 2020 Name. All rights reserved.
            </p>
        </>
    )
}
export default Footer