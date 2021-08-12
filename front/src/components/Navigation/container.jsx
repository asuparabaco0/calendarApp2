import Navigation from "./presentation";
import { connect } from "react-redux";
import { getMonth, getNextMonth, getPreviousMonth, formatMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";

const mapStateToProps = state => ({ calendar: state.calendar });
const mapDispatchToProps = dispatch => ({
    /*mapDispatchToPropsはconnectの第二引数の関数
    これがないとdispatchできない*/
    setMonth: month => {
        dispatch(calendarSetMonth(month));
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    // reduxのstate → dayjs(状態管理とインスタンスの相互変換を実装している)
    //mergePropsでmonthという state に redux の state からdayjsに変換して props として提供
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {
        //高階関数のやつ
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);
    },

    setMonth: dayObj => {

        // dayjs → reduxのstate
        const month = formatMonth(dayObj);
        dispatchProps.setMonth(month);
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigation);
//connectの引数にあるpropsが渡ったNavigationを渡す