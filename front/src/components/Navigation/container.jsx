import Navigation from "./presentation";
import {connect} from "react-redux";
import { getNextMonth, getPreviousMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";

const mapStateToProps = state =>({calendar: state.calendar});
const mapDispatchToProps = dispatch => ({
    /*mapDispatchToPropsはconnectの第二引数の関数
    これがないとdispatchできない*/
    setMonth: month => {
        dispatch(calendarSetMonth(month));
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    setNextMonth: () => {
        //高階関数のやつ
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);