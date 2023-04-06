import './Home.css'
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const {data, loading, error} = useFetch('https://restcountries.com/v2/all?fields=name,region,flag')


    // const countries = data.slice(0,20)
    // console.log(countries)

    // const [countriesData, setCountriesData] = useState(countries)

    // console.log(countriesData)



    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
    <div>
        <header className="header">
            <h2>Countries</h2>
            <nav>
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Asia</a></li>
                    <li><a href="#">Europe</a></li>
                </ul>    
            </nav>
        </header>
        <div>
            {data.map((country)=>(
                <>  
                    <h5>{country.name}</h5>
                </>
            ))}
        </div>
    </div>
    )
}   

export default Home
