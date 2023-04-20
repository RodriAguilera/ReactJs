import "./ItemListContainer.css"

export const ItemListContainer = ( { Item } ) => {

    return(
        <div>
            <h2 className="lista">Lista de Items</h2>
            <hr />
            <p>{Item}</p>
        </div>
    )

}