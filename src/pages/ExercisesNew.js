import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";

class ExerciseNew extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
      rightColor: "",
      leftColor: "",
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
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      };

      let res = await fetch("http://localhost:7000/excersiceNew", config);
      let json = await res.json();
      //   console.log("res ", json);
      this.setState({
        loading: false,
      });
      this.props.history.push('/exercises');
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
            <ExerciseForm
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
export default ExerciseNew;
