import "./RightPane.css"
import ProductCard from "../ProductCard/ProductCard";



const RightPane = ({ productCards, headerText, buttonSymbol, buttonText, onButtonClicked }) => {
    let addProduct = () => {
        onButtonClicked();
    }

    let onCardClicked = (idFromCard) => {
        console.log("touch" + idFromCard)
    }

    let productCardsToBeRenderd = productCards.map(product => {
        if (product.name === "placeholder") {
            return (
                <li key={product.id} className="productsList__item">
                    <button onClick={addProduct} className="productsList__button">{buttonSymbol || "*"}</button>
                    <p className="productsList__text">{buttonText || "bottom text"}</p>
                </li>
            )
        }

        return (<ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} productImg={product.img} />)

    });
    return (
        <section className="productsWrapper">
            <header className="header">
                <h1 className="header__h1">{headerText || "placeholder"}</h1>
            </header>
            <ul className="productsList">
                {productCardsToBeRenderd}
            </ul>
        </section>
    )
}

export default RightPane;