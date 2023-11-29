import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const Planets = ()=> {
    const{ store, actions} = useContext(Context);


    return(
        <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-5 m-2">
            {store.planets.map((item, index)=>{
                const urlImage ="https://starwars-visualguide.com/assets/img/planets/";
                const handleErrorImage = (event) =>{
                    event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                }
                return (
                <div className="container my-2 mx-0">
                    <div className="card" style={{width : "18rem"}}>
                        <img src={`${urlImage}${item.uid}.jpg`} className="card-img-top" alt="..." onError={handleErrorImage}/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <Link href="#" className="btn btn-primary">Details</Link>
                            <Link to= "/" className="btn btn-outline-warning" style={{marginLeft : "113px"}}><i className="far fa-heart fa-lg"></i></Link>
                        </div>
                        </div>
                </div>
                
                )

            })}
        </div>
    )
}