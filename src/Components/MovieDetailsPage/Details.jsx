import "./movieDetails.css"

export const Details = () => {

    const data=  
    {
    "id": 1,
    "title": "Game Over: Kasparov and the Machine",
    "director": "Mirabella Ciani",
    "starring": "Felix Broadley",
    "subtitles": "Bosnian",
    "audio_languages": "Bengali",
    "season": 1,
    "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    "genre": "Documentary",
    "duration": "2 h 50 min",
    "year": "2021",
    "rating": "5.7",
    "producers": "Dil Raju",
    "studio": "24 Frames Factory",
    "content_advisory": "Smoking, substance use, alcohol use, foul language, sexual content, violence",
    "supporting_cast":"Naveen Chandra, Navdeep, Harsha, Mahima Makwana, Karma McCain"
  }

    return (
        <div>
             <h3 style={{textAlign:"left"}}>More Details</h3>
             <div className="extraDetail_div">
                        <div className="headings">
                            <p>Producers </p>
                            <p>Studio </p>
                            <p>Content advisory</p>
                            <p>Supporting actors</p>
                        </div>
                        <div className="details">
                            <p className="colorChan">{data.producers}</p>
                            <p>{data.studio}</p>
                            <p>{data.content_advisory}</p>
                            <p className="colorChan">{data.supporting_cast}</p>
                        </div>
                    </div>
        </div>
    )
}