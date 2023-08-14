import React from 'react';
import PropertyListing from '../components/PropertyListing';
import Banner from '../components/Banner';
import Works from '../components/Works';
import Reviews from '../components/Reviews';
import SearchBox from '../components/SearchBox';

const Home = (props) => {
    return (
        <>
            {props.isLoggedIn === 0 ?
                <>
                    <Banner />
                    <Works />
                    <Reviews />
                    <SearchBox />
                </>
                :
                <PropertyListing />
            }
        </>
    )
}

export default Home;