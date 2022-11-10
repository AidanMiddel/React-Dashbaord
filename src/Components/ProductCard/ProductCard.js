import "./ProductCard.css"

const ProductCard = (props) => {
    const productCardClicked = () => {
        props.onCardClicked(props.id);
    }
    return (
        <li onClick={productCardClicked} className="productsList__item productsList__item--gray">
            <img className="productsList__img" src={props.productImg} alt={props.name} />
            <p className="productsList__imgText">{props.name}</p>
        </li>
    )

}

export default ProductCard;