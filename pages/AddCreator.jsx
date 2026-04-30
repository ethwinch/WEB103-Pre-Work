import { useState } from "react"
import supabase from '../client.js'

const AddCreator = () => {
    const [creatorName, setCreatorName] = useState("");
    const [socialURL, setSocialURL] = useState("");
    const [desc, setDesc] = useState("");
    const [imgURL, setImgURL] = useState("");

    const [creator, setCreator] = useState([]);

    const submitCreator = async () => {
        const {data, error} = await supabase.from("creators").insert([{creator_name: creatorName, url: socialURL, desc: desc, imgURL: imgURL}]);

        if (error) {
            console.error(error.message)
        }else{
            setCreator([...creator, data[0]]);
        }
    }

    return (
        <>
        <h1>Add a Creator</h1>
        <div className="create-post">
            <input type="text" placeholder="Creator Name" id="name" name="name" value={creatorName} onChange={(e) => setCreatorName(e.target.value)}></input>
            <input type="text" placeholder="Contact Link" id="social-url" name="social-url" value={socialURL} onChange={(e) => setSocialURL(e.target.value)}></input>
            <input type="text" placeholder="Description" id="desc-input" name="desc-input" value={desc} onChange={(e) => setDesc(e.target.value)}></input>
            <input type="text" placeholder="Image URL" id="img-url" name="img-url" value={imgURL} onChange={(e) => setImgURL(e.target.value)}></input>

            <button className="submit-btn" onClick={submitCreator}>Submit Creator</button>
        </div>
        </>
    )
}

export default AddCreator;