import './Home.css'
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const {data, loading, error} = useFetch('https://restcountries.com/v2/all?fields=name,region,flag')
    
    // const [countries, setCountries] = useState(data.slice(0, 20))
    
    console.log(data)

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
        
    </div>
    )
}   

export default Home
