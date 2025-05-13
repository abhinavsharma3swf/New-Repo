import {useState} from "react";
import axios from "axios";
import {Foodcard} from "./Foodcard.jsx";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

function Search() {
    const [searchItem, setSearchItem] = useState("")
    const [selectedFood, setSelectedFood] = useState([])
    const [loading, setLoading] = useState(false)
    const [carousel, setCarousel] = useState(0)
    const [search1, setSearch1] = useState(false)

    const id = import.meta.env.VITE_API_ID;
    const key = import.meta.env.VITE_API_KEY;


const handleSearch = () => {
        if( !searchItem)
            return;

        setLoading(true)
        setSearch1(true)

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
        setSearchItem(event.target.value);
    }

    const handlePrev = () => {
    if(carousel > 0)
        setCarousel(carousel -1);
    }

    const handleNext = () => {
    if(carousel < selectedFood.length -1){
        setCarousel(carousel +1)
    }
    }


    let content;
    if (loading) {
        content = <p>Loading food data...</p>;
    } else if (selectedFood.length > 0) {
        content = <Foodcard data={selectedFood[carousel]} />;
    } else if (searchItem !== "" && search1 === true) {
        content = (
            <p style={{ marginTop: '20px', color: 'gray' }}>
                No results found. Please try a different food name.
            </p>
        );
    } else {
        content = null;
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
                {content}

                {/*{loading ? ( <p> Loading food data...</p>) : selectedFood.length > 0 ? (*/}
                {/*    <Foodcard data={selectedFood[carousel]}/>*/}
                {/*) : searchItem.trim() !== "" ? (*/}
                {/*    <p style={{ marginTop: '20px', color: 'gray' }}>No results found. Please try a different food name.</p>*/}
                {/*    ):null}*/}
                <div style={{ marginTop: '10px' }}>
                    <Button onClick={handlePrev} disabled={carousel === 0} style={{ marginRight: '8px' }}>
                        ⬅️ Prev
                    </Button>
                    <Button onClick={handleNext} disabled={carousel === selectedFood.length - 1}>
                        Next ➡️
                    </Button>
                </div>

                {/*//Checking if the search item exist//*/}

                {/*Another way to write this will be selectedFood?.map then the same line*/}
            </div>
        </div>
    )
}

export default Search;