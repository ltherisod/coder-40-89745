const ItemListContainer = ({greeting, saludo})=> {
    // console.log(props)
    // const {greeting, saludo}=props
    console.log('ItemListContainer')
    return(
        <div>
            <h1>{greeting}</h1>
            <h2>{saludo}</h2>
        </div>
    )
}

export default ItemListContainer

