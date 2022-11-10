import "./RightPane.css"



const RightPane = ({ productCards, headerText, buttonSymbol, buttonText, onButtonClicked }) => {
    let addProduct = () => {
        onButtonClicked();
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

        return (
            <li key={product.id} className="productsList__item">
                <img className="productsList__img" src={product.img} alt="" />
                <p className="productsList__imgText">{product.name}</p>
            </li>
        )

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