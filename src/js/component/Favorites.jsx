import React, {useContext} from "react";
import { Context } from "../store/appContext.js";


export const Favorites = () =>{
    const {store, actions} = useContext(Context)


    const handleAdd = () =>{
        actions.setFavorites("item");
    }

    const handleRemove = () => {actions.removeFavorites('item 1')}

    
        

    return (
        <div className="container">
            <h1>Favorites</h1>
            <button onClick={handleAdd}>Agregar</button>
            <button onClick={handleRemove}>Desagregar</button>
            {/*<button onClick={handleGetDetails}>Detalles</button>*/}

        </div>
    )
}