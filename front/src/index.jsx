import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { createStore } from "redux"
import CalendarBoard from "./components/CalendarBoard/container";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
//execute localization here because this file is executable file
dayjs.locale('ja')
const store = createStore(rootReducer)

const App = () => (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DayjsUtils}>
            <Navigation />
            <CalendarBoard />
        </MuiPickersUtilsProvider>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
