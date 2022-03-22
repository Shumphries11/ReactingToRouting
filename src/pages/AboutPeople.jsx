import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const AboutPeople = () => {
    const { peopleid } = useParams();

    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
            .then(res => res.json())
            .then(allPeople => setInfo(allPeople))
            .catch(err => alert(err))
    }, [peopleid]);


    return (
        <main className="container">
                <div className="text-center m-5">
                    <h1>Studio Ghibli Characters</h1>
                </div>
                <div className="col-md-6">
                    <div className="card shadow rounded">
                        <div className="card-body">
                            <h4 className="card-title">Name: {info?.name} </h4>
                            <h4 className="card-title">  Gender: {info?.gender} </h4>
                            <h4 className="card-title">Age: {info?.age} </h4>
                            <h4 className="card-title">Eye Color: {info?.eye_color} </h4>
                            <h4 className="card-title">Hair Color: {info?.hair_color} </h4>
                            <Link to={"/people"} className = "btn btn-outline-secondary mt-3" >Back To People</Link>


                        </div>
                    </div>
                </div>
                



            </main>
    )
}

export default AboutPeople;