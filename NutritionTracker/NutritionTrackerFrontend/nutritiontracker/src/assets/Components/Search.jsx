import {useState} from "react";
import axios from "axios";
import {Foodcard} from "./Foodcard.jsx";
import {Link} from "react-router-dom";

function Search() {
    const [searchItem, setSearchItem] = useState("")
    const [selectedFood, setSelectedFood] = useState([])
    const [loading, setLoading] = useState(false)

    const id = import.meta.env.VITE_API_ID;
    const key = import.meta.env.VITE_API_KEY;


const handleSearch = () => {
        if( !searchItem)
            return;

        setLoading(true)

        const options = {
            'method': 'POST',
            'url': 'https://trackapi.nutritionix.com/v2/natural/nutrients',
            'headers': {
                'Content-Type': 'application/json',
                'x-app-id': id,
                'x-app-key': key
            },
            data: JSON.stringify({
                "query": searchItem
            })
        };

        axios
            .request(options)
            .then(response => {
                const results = (response.data.foods)
                console.log(results)
                setSelectedFood(results)
                setLoading(false)
            })
            .catch(error => {
                console.log('Error: It is not working', error.message)
                setLoading(false)
            })
    }

    const search = (event) => {
        // const setItem = {[event.target.name]: event.target.value};
        // console.log(setItem);
        //     setSearchItem(setItem);
        setSearchItem(event.target.value);
        // console.log(searchItem);
    }

    return(
        <div className="search-page">
            <div className="food-search">
                <div className='home'>
                <Link to={"/"} style={{ textDecoration: 'none', color: 'Green'}}> Home</Link>
                </div>
                <div className='foodservice'>
                <Link
                    to={'/foodservice'} style={{ textDecoration: 'none', color: 'Green', textAlign:"center" }}>Daily Log</Link>
                </div>
                <div className='bmi'>
                    <Link to={"/bmicalculator"} style={{ textDecoration: 'none', color: 'Green' }}>BMI Calculator</Link>
                </div>
                <input
                    type="text"
                    placeholder='Input food to search'
                    className="search"
                    value={searchItem}
                    onChange={search}>
                </input>
                <Link to={{ textDecoration: 'none', color: 'Green' }} className="name" onClick={handleSearch}>
                    Search
                </Link>
                {loading ? ( <p> Loading food data</p>) : (selectedFood && selectedFood.map((food, index) => (
                    <Foodcard key={index} data={food}/>)))}

                {/*//Checking if the search item exist//*/}

                {/*Another way to write this will be selectedFood?.map then the same line*/}
            </div>
        </div>
    )
}

export default Search;