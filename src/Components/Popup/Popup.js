import React from "react";
import "./Popup.css";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" }
    }

    componentDidMount() {
        this.setState({ input: this.props.cardClicked.name })
    }

    input = (event) => {
        this.setState({ input: event.target.value })
    }

    AddProducts = () => {
        if (this.state.input !== "") {
            this.props.addButtonClicked(this.state.input);
        }
    }

    editProduct = () => {
        console.log("je moder")
    }

    render() {
        let button = <button onClick={this.AddProducts} className="popup__button">Voeg toe</button>
        if(this.props.editMode === true){
            button = <button onClick={this.editProduct} className="popup__button">Pas aan</button>
        }
        return (
            <article className="popup">
                <div className="popup__wrapper">
                    <label htmlFor="name" className="popup__label">Naam:</label>
                    <input onChange={this.input} value={this.state.input} type="" className="popup__input" id="name" />
                </div>
                {button}
            </article>
        );
    }
}

export default Popup;