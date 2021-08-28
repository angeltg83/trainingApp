import React from "react";

class ProductForm extends React.Component {
  //   handleClick = () => {
  //     console.log("click!!");
  //   };
  //   state = {};
  //   handleChange = (e) => {
  //     // console.log(`${e.target.name}: ${e.target.value} `);
  //     //   let partialState={};
  //     //   partialState[e.target.name]= e.target.value
  //     this.setState({
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  render() {
    const { onChange, onSubmit, form } = this.props;
    return (
      <div className="container">
        <h3>New product</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="nombre"
              name="nombre"
              onChange={onChange}
              value={form.nombre}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="precio"
              name="precio"
              onChange={onChange}
              value={form.precio}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="lote"
              name="lote"
              onChange={onChange}
              value={form.lote}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="descripcion"
              name="descripcion"
              onChange={onChange}
              value={form.descripcion}
            />
          </div>


          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="img"
              name="img"
              onChange={onChange}
              value={form.img}
            />
          </div>

          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="existencias"
                name="existencias"
                onChange={onChange}
                value={form.existencias}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="tipo"
                name="tipo"
                onChange={onChange}
                value={form.tipo}
              />
            </div>
          </div>

         

          <br></br>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default ProductForm;
