import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import { setSchedules } from "../../services/schedule";
import {
    addScheduleOpenDialog,
    addScheduleSetValue
} from "../../redux/addSchedule/actions";
import {
    currentScheduleSetItem,
    currentScheduleOpenDialog
} from "../../redux/currentSchedule/actions";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";
//store から必要な状態を選択して props の形にする関数
const mapStateToProps = state => ({
    calendar: state.calendar,
    schedules: state.schedules
});
const mapDispatchToProps = dispatch => ({
    //以下の関数が引数にdayjsオブジェクトを受け取る
    openAddScheduleDialog: d => {
        dispatch(addScheduleOpenDialog());
        //選択したカレンダーの曜日が反映される
        dispatch(addScheduleSetValue({ date: d }))
    },
    openCurrentScheduleDialog: (schedule, e) => {
        /*他のイベントが発火するのをキャンセル
        日付の箱には新しい予定を作成するための dialog を開くイベントも登録してあるため、そちらも発火してしまう。*/
        e.stopPropagation();

        dispatch(currentScheduleSetItem(schedule));
        dispatch(currentScheduleOpenDialog());
    },
    //yearは？→monthに含まれている
    //mergepropsから現在の月情報をstateより取得
    fetchSchedule: month => {
        dispatch(asyncSchedulesFetchItem(month));
    }
});
//mergePropsは、mapStatePropsの結果が前回と異なっていたときにだけ実行される
const mergeProps = (stateProps, dispatchProps) => {
    const {
        calendar: month,
        schedules: { items: schedules }
    } = stateProps;

    const calendar = setSchedules(createCalendar(month), schedules);

    return {
        ...stateProps,
        ...dispatchProps,
        //logicとviewの責務
        fetchSchedule: () => dispatchProps.fetchSchedule(month),
        calendar,
        month
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);