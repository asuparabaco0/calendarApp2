//container component is responsible only for logic
//access from component to Redux( for the above reason )
import Counter from "./presentation";
import {connect} from "react-redux"
import { increment, decrement } from "../../redux/count/actions";

//props は object なので返り値も object
/**
 * const mapStateProps = state => {
  return { count: state.count };
}; 
*/
const mapStateProps = ({ count }) => ({ count });

const mapDispatchProps = dispatch => ({
    //props.increment()と呼び出せる
    increment: count => {
        dispatch(increment(count));
    },
    decrement: count => {
        dispatch(decrement(count));
    }
});
//Hight Order Component カリー化
export default connect(
    //store からどの state を引っ張ってくるかを定義
    mapStateProps,
    //どんな dispatcher を props に渡すかを定義
    mapDispatchProps
)(Counter);
