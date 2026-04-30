import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import supabase from "../client";

const EditCreator = () => {
    const {creator} = useParams();
    const [creatorDetails, setCreatorDetails] = useState([]);
    
    const [creatorName, setCreatorName] = useState("");
    const [socialURL, setSocialURL] = useState("");
    const [desc, setDesc] = useState("");
    const [imgURL, setImgURL] = useState("");


    useEffect(() => {
        getCreatorDetails();
    }, [creator]);

    async function getCreatorDetails() {
        const { data } = await supabase.from("creators").select("*").eq("id", creator);
        setCreatorDetails(data[0]);

        setCreatorName(data[0].creator_name);
        setSocialURL(data[0].url);
        setDesc(data[0].desc);
        setImgURL(data[0].imgURL);
    }


    const updateCreator = async () => {
        const {data, error} = await supabase.from("creators").update([{creator_name: creatorName, url: socialURL, desc: desc, imgURL: imgURL}]).eq("id", creator).select();

        if (error) {
            console.error(error.message)
        }else{
            setCreatorDetails([data[0]]);

            setCreatorName(data[0].creator_name);
            setSocialURL(data[0].url);
            setDesc(data[0].desc);
            setImgURL(data[0].imgURL);
        }
    }

    const deleteCreator = async () => {
        const {error} = await supabase.from("creators").delete().eq("id", creator);

        if (error) {
            console.error(error.message)
        }else{
            setCreatorDetails.filter(item => item !== creatorDetails);
        }
    }

    return (
        <>
        <h1>Edit Creator Details</h1>
        <div className="create-post">
            <input type="text" placeholder="Creator Name" id="name" name="name" value={creatorName} onChange={(e) => setCreatorName(e.target.value)}></input>
            <input type="text" placeholder="Contact Link" id="social-url" name="social-url" value={socialURL} onChange={(e) => setSocialURL(e.target.value)}></input>
            <input type="text" placeholder="Description" id="desc-input" name="desc-input" value={desc} onChange={(e) => setDesc(e.target.value)}></input>
            <input type="text" placeholder="Image URL" id="img-url" name="img-url" value={imgURL} onChange={(e) => setImgURL(e.target.value)}></input>

            <button className="submit-btn" onClick={updateCreator}>Update Creator Info</button>
            <button className="submit-btn" onClick={deleteCreator}>Delete Creator</button>
        </div>
        </>
    )
}

export default EditCreator;