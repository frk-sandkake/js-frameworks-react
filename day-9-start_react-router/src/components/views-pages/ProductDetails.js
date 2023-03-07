import { useParams } from "react-router-dom";

const ProductDetails = () => {
    let params = useParams();
    console.log(params);
    console.log(params.id);

    return (
        <div className="home">
            <h2>This is the product details page {params.id}</h2>
        </div>
    );
};

export default ProductDetails;
