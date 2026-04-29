export default function Card(creator) {
    return (
        <div className="Card">
            <h2>{creator.creator_name}</h2>
            <h4>Socials: {creator.url}</h4>
            <p>{creator.desc}</p>
            <img src={creator.imgURL} />
        </div>
    )
}
