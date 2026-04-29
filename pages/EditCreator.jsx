import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const EditCreator = () => {
    const {creator} = useParams();
    
    return (
        <h1>Creator Details</h1>
    )
}

export default EditCreator;