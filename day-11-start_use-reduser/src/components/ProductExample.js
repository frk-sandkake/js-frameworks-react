import {useReducer, useState} from "react";

const ACTIONS = {
    ADD_PRODUCT: "add-product",
    DELETE_PRODUCT : "delete-product"
}

function reducer(products, action) { // state is our current state, action is what we pass in the dispatch function
    switch (action.type) {
        case ACTIONS.ADD_PRODUCT:
            return [...products, newProduct(action.payload.name)] // add a new product
        case ACTIONS.DELETE_PRODUCT:       // filter my products and return the products that is not equal to earlier ids
            return products.filter(product => product.id !== action.payload.id) // delete a product
        default:
            return products
    }
}

function newProduct(name) {
    return {
        id: Date.now(),
        name: name
    }
}

const ProductExample = () => {
    const [products, dispatch] = useReducer(reducer, []); // looping through the products with map in the return
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault(); // to avoid refreshing the page
        // add a new product on
        dispatch({type: ACTIONS.ADD_PRODUCT, payload: {name: name}}) // this name is the state name
        // CLEAR the input
        setName("")
        console.log("state productName", name );
    }

    console.log(products);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Product name:</label>
                <input type="text"
                       value={name}
                       placeholder="Write a product name"
                       onChange={event => setName(event.target.value)}/>
            </form>

            <hr />
            <ul>
            {products.map(product => {
                return (
                    <li>
                        <span>{product.name}</span>
                        <button className="BTN-Danger" onClick={() => dispatch({type: ACTIONS.DELETE_PRODUCT, payload: {id: product.id}})}>Delete</button>
                    </li>
                )
            })}
            </ul>
        </div>
    );
};

export default ProductExample;
