import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import ErrorSnackBar from "./components/ErrorSnackbar/container"
//execute localization here because this file is executable file
dayjs.locale('ja')
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
//ストアに登録することで非同期処理を扱えるようになる
const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
            <CurrentScheduleDialog/>
            <ErrorSnackBar/>
        </MuiPickersUtilsProvider>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
