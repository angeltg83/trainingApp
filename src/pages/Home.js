import React from "react";
import AddButton from "../components/AddButton";
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import Loading from "../components/Loading";

class Home extends React.Component {
  state = {
    data: [],
    loading: true,
    err: null,
    token: null,
    user: null,
  };
  async componentDidMount() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token) {
      await this.fechExercises(token, user);
    } else {
      this.props.history.push("/login");
    }
  }
  fechExercises = async (token, user) => {
    try {
      let res = await fetch("http://localhost:7000/get-product");
      let { data } = await res.json();
      user = JSON.parse(user)
      console.log(user)
      this.setState({
        token,
        user,
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
        <Welcome username={this.state.user.nombres} />
        <ExerciseList exercise={this.state.data} />
        <AddButton />
      </React.Fragment>
    );
  }
}

export default Home;
