import React from "react";
// import excersiceImg from "../images/exercise.png";
import circlesImg from "../images/circles.png";
import "../styles/Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }
  render() {
    // se define una funcion q devuelve un elemento
    const { leftColor, rightColor, title, description, img } = this.props;
    return (
      <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor} , ${rightColor})`,
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={img} />
            </div>

            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
