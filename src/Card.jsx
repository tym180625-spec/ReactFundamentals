function Card(props) {
    const {item, image, description} = props

    return (
        <div className="card">
            <h1>{item}</h1>
            <img src={`/assets/${image}`}></img>
            <p>{description}</p>
        </div>
    )
}

export default Card