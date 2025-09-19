import Item from "./Item";

function ItemListConteiner (props){
    return(
        <div>
            <h3>{props.greeting}</h3>
            <Item/>
        </div>    
    )
}

export default ItemListConteiner;