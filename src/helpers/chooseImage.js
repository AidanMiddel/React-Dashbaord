import flowerImage from "../img/flowers.jpg";
import bananaImage from "../img/banana.jpg";
import skyImage from "../img/sky.jpg";
import fantaImage from "../img/fanta.jpg"

function chooseImage(inputFromPopup) {
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
    return toBeAddedImage;
}

export default chooseImage;

