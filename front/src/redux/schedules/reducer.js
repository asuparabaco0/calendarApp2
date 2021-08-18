import dayjs from "dayjs";
import { 
SCHEDULES_ADD_ITEM,
SCHEDULES_FETCH_ITEM,
SCHEDULES_SET_LOADING,
SCHEDULES_DELETE_ITEM,
SCHEDULES_ASYNC_FAILURE,
SCHEDULES_RESET_ERROR } from "./actions";

const init = {
    //schedule.formのデータ構造を配列で持つ必要がある
    items: [],
    //サーバーからデータを取得するためload中かを判定する
    isLoading: false,
    error: null
}

const schedulesReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {
        case SCHEDULES_ADD_ITEM:
            return {
                ...state,
                /**effects で追加に成功した予定だけを
                 フロントの状態にも追加する*/
                items: [...state.items, payload]
            };
        case SCHEDULES_SET_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case SCHEDULES_FETCH_ITEM:
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case SCHEDULES_DELETE_ITEM:
            return{
                ...state,
                isLoading: false,
                items: payload
            };
        case SCHEDULES_ASYNC_FAILURE:
            return {
                ...state,
                error
            };
        case SCHEDULES_RESET_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

export default schedulesReducer;
