import React, { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';


const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

const {url} = useSelector((state) => {
 return   state.home
})
    const { data, loading } = useFetch('movie/upcoming');

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)

        }
    }

    return (
        <div className="heroBanner">
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">Unlock a world of entertainment with a vast collection of movies, TV shows, and enthusiasts. Begin your journey now.</span>
                    <div className="searchInput">
                        <input type="text"
                            placeholder='Search for a movie or tv show...'
                            value={query}
                            onChange={(e) => { setQuery(e.target.value) }}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
