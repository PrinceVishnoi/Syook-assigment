import React, { useState, useEffect } from 'react'
export default function Innercomponent() {
    const [users, setUser] = useState([]);

    const getusers = async () => {
        const response = await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json');
        setUser(await response.json());

    }
    useEffect(() => {
        getusers();
    }, []);
    return (
        <>
            <h2>DishPoll</h2>
            {
                users.map((e) => {
                    return (
                        <div>
                            <div className="card mb-3" style={{ maxWidth: "1500px",borderRadius:"20px" ,backgroundColor:"#71ef36",border:"2px solid black"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={e.image}className="img-fluid rounded-start" alt="imgs" style={{borderRadius:"20px"}} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                           <i><h2 className="card-title">{e.dishName}</h2></i>
                                            <i><h4 className="card-text">{e.description}</h4></i>
                                            <hr></hr>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </>
    )
}
