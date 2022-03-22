import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const AboutFilm = () => {
    const { filmsid } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmsid}`)
            .then(res => res.json())
            .then(allFilms => setDetails(allFilms))
            .catch(err => alert(err))
    }, [filmsid]); 


    return (
        <main className="container">
                <div className="text-center m-5">
                    <h1>Studio Ghibli Films</h1>
                </div>
                <div className="col-md-6">
                    <div className="card shadow rounded">
                        <div className="card top">
                            <img src={details?.image} alt="" height='400px'/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{details?.title} </h4>
                            <h4 className="card-title"> Released: {details?.release_date} </h4>
                            <h4 className="card-title">{details?.description} </h4>
                            <Link to={"/films"} className = "btn btn-outline-secondary mt-3" >Back To Films</Link>

                        </div>
                    </div>
                </div>
                



            </main>
    )
}

export default AboutFilm;