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
        </>
    )
}
export default Footer