import React from "react";
import AddButton from "../components/AddButton";
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import Loading from "../components/Loading";

class Exercises extends React.Component {
  state = {
    data: [],
    loading: true,
    err: null,
  };

  async componentDidMount() {
    await this.fechExercises();
  }
  fechExercises = async () => {
    try {
      let res = await fetch("http://localhost:7000/get-product");
      let { data } = await res.json();
      console.log("data UU", data);
      this.setState({
        data,
        loading: false,
      });
    } catch (err) {
      this.setState({
        loading: false,
        err,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <Welcome username="Angel" />
        <ExerciseList exercise={this.state.data} />
        <AddButton />
      </React.Fragment>
    );
  }
}

export default Exercises;
