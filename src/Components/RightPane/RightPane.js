import "./RightPane.css"
import ProductCard from "../ProductCard/ProductCard";
import Placeholder from "../Placeholder/Placeholder";



const RightPane = ({ productCards, headerText, buttonSymbol, buttonText, onButtonClicked, onProductCardClicked }) => {
    let addProduct = () => {
        onButtonClicked();
    }

    let onCardClicked = (idFromCard) => {
        onProductCardClicked(idFromCard);
    }

    let productCardsToBeRenderd = productCards.map(product => {
        if (product.name === "placeholder") {
            return (
                <Placeholder onCardClicked={onCardClicked} key={product.id} id={product.id} buttonSymbol="+" buttonText="Voeg product toe" />
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