import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Films = () => {
    const [film, setFilm] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilm(allFilms))
            .catch(err => alert(err))
    }, []);

    return (
        <main className="container">
                <div className="text-center m-5">
                    <h1>Studio Ghibli Films</h1>
                </div>

                <div className="text-center">
                    <div className="row justify-content-center mt-5">
                        {film.map(films => {
                            return (
                                <div className="col-md-4" key={films.id}>
                                    <div className="card shadow my-2">
                                        <div className="card-body">
                                            <h3 className="card-title">{films.title}</h3>
                                            <Link to={`/films/${films.id}`}> About Film</Link>
                                        </div>
                                    </div>



                                </div>
                            )

                        })}
                    </div>
                </div>



            </main>
    )
}

export default Films;