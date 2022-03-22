import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const People = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople))
            .catch(err => alert(err))
    }, []);

    return (
        <main className="container">
                <div className="text-center m-5">
                    <h1>Studio Ghibli Characters</h1>
                </div>

                <div className="text-center">
                    
                    <div className="row justify-content-center mt-5">
                        {people.map(person => {
                            return (
                                <div className="col-md-4" key={person.id}>
                                    <div className="card shadow my-2">
                                        <div className="card-body">
                                            <h3>{person.name}</h3>
                                            <Link to={`/people/${person.id}`} >About Me</Link>
                                            
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

export default People;