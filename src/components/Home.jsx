import './Home.css'
import useFetch from '../hooks/useFetch';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const {data, loading, error} = useFetch('https://restcountries.com/v2/all?fields=name,region,flag')

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
        
        <div className='section'>
            {
                data.map((country)=>(
                    <Card>
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
    </div>
    )
}   

export default Home
