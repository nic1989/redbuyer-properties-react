import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import PropertyCard from './PropertyCard';

const PropertyListing = () => {
    const [propertyListingData, setPropertyListingData] = useState(null);
    useEffect(() => {
        getPropertiesListing();
    }, [])

    async function getPropertiesListing() {
        const data = await fetch('https://run.mocky.io/v3/058dbada-3f7f-46c6-83d2-a3c5575b2c6a',
        {
            headers: { 'auth': '60o45uk4tw538uaq9vvnx7nm5iuif4j2' },
        });
        const result = await data.json();
        setPropertyListingData(result.data);
    }

    return (
        <>
            {
                (() => {
                    if (!propertyListingData) {
                        return (
                            <Shimmer />
                        )
                    } else if (propertyListingData.length > 0) {
                        return (
                            <div className="container mt-5">
                                <h2 className="text-center">Browse Homes</h2>
                                <p className="text-center">View your Dream Home</p>
                                <div className="row">
                                    {propertyListingData.map((item, index) => {
                                        return <PropertyCard item={item} key={index} />
                                    })}
                                    
                                </div>
                            </div>
                        )
                    }
                    else if (propertyListingData.length === 0) {
                        return (
                            <div className="container">
                                <div className="row">
                                    <h2 className="text-center">No Data Found</h2>
                                </div>
                            </div>
                        )
                    }
                })()
            }
        </>
        
    )
}

export default PropertyListing;
