import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
// addScheduleSetValueを追加
import {
    addScheduleCloseDialog,
    addScheduleSetValue,
    addScheduleStartEdit
} from "../../redux/addSchedule/actions";
import { asyncSchedulesAddItem } from "../../redux/schedules/effects"

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    },
    setSchedule: value => {
        dispatch(addScheduleSetValue(value));
    },
    saveSchedule: schedule => {
        //saveScheduleとして以下二つの関数を呼ぶ
        dispatch(asyncSchedulesAddItem(schedule))
        dispatch(addScheduleCloseDialog());
    },
    setIsEditStart: () =>{
        dispatch(addScheduleStartEdit)
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
        const {
            schedule: { form: schedule }
        } = stateProps;
        //dispatchToPropsの方のsaveSchedule()を上書きして
        //使いたいsaveSchedule()だけをコンポーネントに渡す
        //講師に説明聞く
        dispatchProps.saveSchedule(schedule);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddScheduleDialog);
