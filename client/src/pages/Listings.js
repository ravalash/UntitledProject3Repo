import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import ListingsBox from "../components/ListingsBox";
import API from '../utils/API';

function Listings() {

    const [savedListings, setSavedListings] = useState([]);

    useEffect(() => {
        API.loadAllListings().then(res => { setSavedListings(res.data) })
    }, [])

    return (
        <div className="container" id="dashboard-container">
            <div className="row">
                <div className="col-3" id="user-col">
                    <UserCard />
                </div>
                <div className="col-9" id="new-listings-col">
                    <ListingsBox data={savedListings} />
                </div>
            </div>
        </div>
    )
}

export default Listings