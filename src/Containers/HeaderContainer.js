/** container is basically use to connect react with redux */
import Header from "../components/Header";
import { connect } from "react-redux";

/**in this component we basically get the data and dispatch the data
 * to the desired component as per the action performed
 */

const mapStateToProps = (state) => ({
  data: state.cartItems
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
