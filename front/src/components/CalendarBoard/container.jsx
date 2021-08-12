import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

//store から必要な状態を選択して props の形にする関数
const mapStateToProps = state => ({ calendar: state.calendar });

//mergePropsは、mapStatePropsの結果が前回と異なっていたときにだけ実行される
const mergeProps = (stateProps, dispatchProps) => ({
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar)
})
export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);