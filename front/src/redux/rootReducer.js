import { combineReducers } from "redux"
import calendarReducer from "./calendar/reducer"

// combineReducarsの引数は{[state名]: [reducer]}という感じで対応付け
const rootReducer = combineReducers({calendar: calendarReducer});

export default rootReducer