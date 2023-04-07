import './Home.css'
import useFetch from '../hooks/useFetch';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Footer from './Footer';

// react icons
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';

const Home = () => {

    const [allcountries, setAllCountries] = useState([])
    const [getFilteredCountries, setGetFilteredCountries] = useState([])     

    const mainMenu = document.querySelector('.mainMenu')
    const closeMenu = document.querySelector('.closeMenu')
    const openMenu = document.querySelector('.openMenu')

    // openMenu.addEventListener('click', show);
    // closeMenu.addEventListener('click', closeBtn);

    // function show() {
    //     mainMenu.style.display = 'flex';
    //     mainMenu.style.top = '0';
    // }

    // function closeBtn() {
    //     mainMenu.style.top = '-100%'
    // }

    useEffect(()=>{
        fetchCountries()
    }, [])

    async function fetchCountries() {
        const response = await fetch('https://restcountries.com/v2/all?fields=name,region,flag');
        const json = await response.json();
        setAllCountries(json);
        setGetFilteredCountries(json)
    }

    
    function handleClick(textValue) {
        const data = filterCountries(textValue, allcountries)
        setGetFilteredCountries(data)
    }

    function filterCountries(textValue, data) {
        return data.filter((country) => country.region.toLowerCase().includes(textValue.toLowerCase()))
    }

    function fetchAllCountries() {
        setGetFilteredCountries(allcountries)
    }

    return (
    <div>
        <header className="header">
            <h2>Countries</h2>

            {/* web version of nav */}
            <nav className='web-nav'>
                <ul>
                    <li>
                        <a 
                            href="#" 
                            onClick={fetchAllCountries}>
                            All
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#" 
                            onClick={(e)=>handleClick(e.target.innerHTML, data)}>
                            Asia
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#" 
                            onClick={(e)=>handleClick(e.target.innerHTML, data)}>
                            Europe
                        </a>
                    </li>
                </ul>
            </nav>

            {/* mobile version of nav */}
            <nav className='mobile-nav'>
                <div className='openMenu'>
                    <GiHamburgerMenu />
                </div>
                <ul className='mainMenu'>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Asia</a></li>
                    <li><a href="#">Europe</a></li>
                    <li><a href="#">Africa</a></li>
                    <div className='closeMenu'>
                     <GrClose />
                    </div>
                </ul>
            </nav>

        </header>
        
        <div className='section'>
            {
                getFilteredCountries
                .map((country)=>(
                    <Card key={country.name}>
                        <Card.Img variant="top" src={country.flag}/>
                        <Card.Body>
                            <Card.Title>
                                {country.name}
                            </Card.Title>
                            <Card.Text>{country.region}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
        
        <div className='icons'>
            <Footer />
        </div>
    </div>
    )
}   

export default Home
