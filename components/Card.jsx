import { Link } from "react-router-dom"

export default function Card(creator) {
    return (
        <div className="Card">
            <img id="person-icon" className="icon" src="src/assets/blue_person_icon.png" />
            <h2 id="creator-name">{creator.creator_name}</h2>
            <img id="globe-icon" className="icon" src="src/assets/globe_icon.png" />
            <p id="social">{creator.url}</p>
            <p id="desc">{creator.desc}</p>
            <img id="img" src={creator.imgURL} />

            <Link to={`/view/${creator.id}`} id="btn">Read More</Link>
        </div>
    )
}
