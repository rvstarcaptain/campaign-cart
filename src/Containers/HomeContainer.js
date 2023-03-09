/** container is basically use to connect react with redux */
import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../Service/Actions/Action";

/**in this component we basically get the data and dispatch the data
 * to the desired component as per the action performed
 */

const mapStateToProps = (state) => ({
  data: state.cartItems
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
