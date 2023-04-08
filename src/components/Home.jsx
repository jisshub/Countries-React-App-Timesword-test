import './Home.css'
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Footer from './Footer';

const Home = () => {

    const [allcountries, setAllCountries] = useState([])
    const [getFilteredCountries, setGetFilteredCountries] = useState([])     
    
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
            <nav>
                <ul>
                    <li>
                        <a 
                            href="#" 
                            onClick={fetchAllCountries}>
                            All
                        </a>
                    </li>

                    <li><a href="#" onClick={(e)=>handleClick(e.target.innerHTML, allcountries)}>Asia</a></li>

                    <li><a href="#" onClick={(e)=>handleClick(e.target.innerHTML, allcountries)}>Europe</a></li>
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
