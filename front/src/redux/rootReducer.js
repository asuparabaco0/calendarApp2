import { combineReducers } from "redux"
import calendarReducer from "./calendar/reducer"
import addScheduleReducer from "./addSchedule/reducers";
import schedulesReducer from "./schedules/reducer";
import currentScheduleReducer from "./currentSchedule/reducer"
// combineReducarsの引数は{[state名]: [reducer]}という感じで対応付け
const rootReducer = combineReducers({
    calendar: calendarReducer,
    addSchedule: addScheduleReducer,
    schedules: schedulesReducer,
    currentSchedule: currentScheduleReducer
});

export default rootReducer