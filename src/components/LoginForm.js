import React from "react";

class LoginForm extends React.Component {
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
        <h3>Iniciar sesion</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="username"
              name="username"
              onChange={onChange}
              value={form.username}
            />
          </div>

          <div className="form-group">
            <input
            
              type="password"
              className="form-control"
              placeholder="contrasena"
              name="contrasena"
              onChange={onChange}
              value={form.contrasena}
            />
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
export default LoginForm;
