import React from "react";
import AddButton from "../components/AddButton";
import Logout from "../components/LogoutButton";
import ProductList from "../components/ProductList";
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
    console.log(localStorage.getItem("user"));
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
      console.log(user, token);
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

  logout = () => {
    console.log('entro!')
    localStorage.clear("token");
    localStorage.clear("user");
    this.props.history.push("/login");
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <Welcome username={this.state.user} />
        <AddButton/>
        <Logout logout={this.logout} />
        <ProductList exercise={this.state.data} />
      </React.Fragment>
    );
  }
}

export default Home;
