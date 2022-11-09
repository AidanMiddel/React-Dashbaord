import "./Dashboard.css";
import React from "react";
import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import Popup from "../Popup/Popup";
import flowerImage from "../../img/flowers.jpg";
import bananaImage from "../../img/banana.jpg";
import skyImage from "../../img/sky.jpg";
import fantaImage from "../../img/fanta.jpg"

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { productCards: [], open: true }
    }

    componentDidMount() {
        let productCards = [
            {
                name: "placeholder"
            },
            {
                name: "flowers",
                img: flowerImage
            },
            {
                name: "banana",
                img: bananaImage
            },
        ];
        this.setState({ productCards: productCards })
    }

    onButtonClicked = () => {
        this.setState({ open: !this.state.open })
    }

    addButtonClicked = (inputFromPopup) => {
        let toBeAddedImage;
        switch (inputFromPopup) {
            case ("banana"):
                toBeAddedImage = bananaImage;
                break;
            case ("flowers"):
                toBeAddedImage = flowerImage;
                break;
            case ("sky"):
                toBeAddedImage = skyImage;
                break;
            case ("fanta"):
                toBeAddedImage = fantaImage;
                break;
            default:
                toBeAddedImage = skyImage;
                break;
        }
    
        let toBeAdded = [
    {
        name: inputFromPopup,
        img: toBeAddedImage,
    }
]
let mergedArrays = this.state.productCards.concat(toBeAdded);
this.setState({
    productCards: mergedArrays,
    open: !this.state.open,
})
    }

render() {
    let navigationListItems =
        [
            {
                name: "home",
                message: 0,
            },
            {
                name: "Facturen",
                message: 3,
            },
            {
                name: "Bestellingen",
                message: 0,
            },
            {
                name: "Retour",
                message: 1,
            },
            {
                name: "Contact",
                message: 2,
            },
            {
                name: "FAQ",
                message: 0,
            },
        ];
    if (this.state.open === true) {
        return (
            <article className="dashboard" >
                <LeftPane navigationListItems={navigationListItems} buttonText="Go Premium!" />
                <RightPane onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="Mijn producten:" buttonSymbol="+" buttonText="Voeg een product toe" />
            </article>
        )
    }
    return (
        <Popup addButtonClicked={this.addButtonClicked} />
    )
}
}

export default Dashboard;