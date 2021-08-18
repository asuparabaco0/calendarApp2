import {
    schedulesSetLoading,
    schedulesFetchItem,
    schedulesAddItem,
    schedulesDeleteItem,
    schedulesAsyncFailure,
} from "./actions";
import { get, post, deleteRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";
import Schedule from "../../components/Schedule";

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
    //switch false to true
    dispatch(schedulesSetLoading());
    //month yearは必須
    try {
        const result = await get(`schedules?month=${month}&year=${year}`);
        //この時返ってくるdateはstringになっているため、dayjsインスタンスに変換する
        const formatedSchedule = result.map(r => formatSchedule(r));
        dispatch(schedulesFetchItem(formatedSchedule));
    } catch (err) {
        console.error(err)
        dispatch(schedulesAsyncFailure(err.message));
    }

};

export const asyncSchedulesAddItem = schedule => async dispatch => {
    // loading: true にする
    dispatch(schedulesSetLoading());
    try {
        const body = { ...schedule, date: schedule.date.toISOString() };
        const result = await post("schedules", body);
        const newSchedule = formatSchedule(result);
        dispatch(schedulesAddItem(newSchedule));
    } catch (err) {
        console.error(err)
        dispatch(schedulesAsyncFailure(err.message));
    }
};

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    //getState()はthunkの関数の第二引数
    const currentSchedules = getState().schedules.items;

    try {
        await deleteRequest(`schedules/${id}`);

        // 成功したらローカルのstateを削除
        //一致するものだけ排除
        const newSchedules = currentSchedules.filter(s => s.id !== id);
        dispatch(schedulesDeleteItem(newSchedules));
    } catch (err) {
        console.error(err)
        dispatch(schedulesAsyncFailure(err.message));
    }
}
