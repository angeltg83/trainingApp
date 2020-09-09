import React from "react";

class ExerciseForm extends React.Component {
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
        <h3>New exercise</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="title"
              name="title"
              onChange={onChange}
              value={form.title}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="description"
              name="description"
              onChange={onChange}
              value={form.description}
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
                placeholder="leftColor"
                name="leftColor"
                onChange={onChange}
                value={form.leftColor}
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="rightColor"
                name="rightColor"
                onChange={onChange}
                value={form.rightColor}
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
export default ExerciseForm;
