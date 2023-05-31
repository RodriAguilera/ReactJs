import ItemCard from "../ItemCard/ItemCard"


const ItemList = ( {items} ) => {

    return (
        <div>
            <h1 className="text-center">Productos</h1>
            <hr/>

            <div className="row">

                {
                    
                    items.map((prod) => <ItemCard item={prod} key={prod.id}/>)
                }
            </div>
        </div>
    )
}

export default ItemList