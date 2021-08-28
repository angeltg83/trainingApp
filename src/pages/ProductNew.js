import React from "react";
import ProductForm from "../components/ProductForm";
import Card from "../components/Card";

class ProductNew extends React.Component {
  state = {
    form: {
      nombre: "",
      descripcion: "",
      img: "",
      precio: "",
      lote: "",
      tipo: "",
      existencias: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    // console.log(this.state);
    try {
      e.preventDefault();
      this.setState({
        loading: true,
      });
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      };

      let res = await fetch("http://localhost:7000/new-product", config);
      let json = await res.json();
      //   console.log("res ", json);
      this.setState({
        loading: false,
      });
      this.props.history.push("/home");
    } catch (err) {
      console.log(err);
      this.setState({
        loading: false,
        err,
      });
    }
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-sm">
            <Card {...this.state.form} />
          </div>

          <div className="col-sm">
            <ProductForm
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              form={this.state.form}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductNew;
