import "./Dashboard.css";
import React from "react";
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import Popup from "../Popup/Popup";
import chooseImage from "../../helpers/chooseImage";
import productsObject from "../../data/products";
import navigationItemsObject from "../../data/navigationItems";


class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { productCards: [], open: true }
    }

    componentDidMount() {

        this.setState({ productCards: productsObject.products })
    }

    onButtonClicked = () => {
        this.setState({ open: !this.state.open })
    }

    addButtonClicked = (inputFromPopup) => {
        let imageFromHelper = chooseImage(inputFromPopup);
        let toBeAdded = [
            {
                id: this.state.productCards.length + 1,
                name: inputFromPopup,
                img: imageFromHelper,
            }
        ]
        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        })
    }

    onCardClicked = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        if (this.state.open === true) {
            return (
                <article className="dashboard" >
                    <LeftPane navigationListItems={navigationItemsObject.navigtionItems} buttonText="Go Premium!" />
                    <RightPane onCardClicked={this.onCardClicked} onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="Mijn producten:" buttonSymbol="+" buttonText="Voeg een product toe" />
                </article>
            )
        }
        return (
            <Popup addButtonClicked={this.addButtonClicked} />
        )
    }
}

export default Dashboard;