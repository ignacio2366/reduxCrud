import { connect } from "react-redux";
import "./App.css";
import { bindActionCreators } from "redux";
import { setUserInfo } from "./redux/actions/user";
const App = (props) => {
  console.log(props);
  return <>{props}</>;
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setUserInfo }, dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
