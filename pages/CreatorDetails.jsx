import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// import Card from '../components/Card.jsx'

import supabase from "../client";

const CreatorDetails = () => {
    const {creator} = useParams();
    const [creatorDetails, setCreatorDetails] = useState([]);

    useEffect(() => {
        getCreators();
    }, []);

    async function getCreators() {
        const { data } = await supabase.from("creators").select("*").eq('id', creator);
        setCreatorDetails(data[0]);
    }
    
    return (
        <>
        <h1>Creator Details</h1>

        <div className="Card">
            <img id="person-icon" className="icon" src="../src/assets/blue_person_icon.png" />
            <h2 id="creator-name">{creatorDetails.creator_name}</h2>
            <img id="globe-icon" className="icon" src="../src/assets/globe_icon.png" />
            <p id="social">{creatorDetails.url}</p>
            <p id="desc">{creatorDetails.desc}</p>
            <img id="img" src={creatorDetails.imgURL} />
        </div>

        {/* <Card id={creatorDetails.id} creator_name={creatorDetails.creator_name} url={creatorDetails.url} desc={creatorDetails.desc} imgURL={creatorDetails.imgURL} /> */}

        <Link to={`/edit_creator/${creator}`} className="btn">Edit Creator Info</Link>
        <Link to="/" className="btn">Return Home</Link>
        </>
    )
}

export default CreatorDetails;