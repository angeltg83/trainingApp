import React from "react";
// import excersiceImg from "../images/exercise.png";
import circlesImg from "../images/circles.png";
import CurrencyFormat from "react-currency-format";
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
    const { nombre, precio, img, descripcion } = this.props;

    const leftColor = "#30E8BF";
    const rightColor = "#FF8235";
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
              <img width="300" height="300" src={img} />
            </div>

            <div className="col-6 Fitness-Card-Info">
              <h1>{nombre}</h1>
              <p>
                <CurrencyFormat
                  value={precio}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
              <p>{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
