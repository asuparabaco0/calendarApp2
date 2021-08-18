import React from "react";
import { Typography } from "@material-ui/core"
import dayjs from "dayjs";
import * as styles from "./style.css";
import { isSameMonth, isFirstDay, isSameDay, getMonth} from "../../services/calendar";
import Schedule from "../Schedule";
const CalendarElement = ({ day, month, schedules, ...props }) => {
    const isFirstDay = day.date() === 1;
    //当日がどうか判断
    const format = isFirstDay ? "M月D日" : "D";
    // judge today or not
    const today = dayjs()
    const compareFormat = "YYYYMMDD"
    const isToday = isSameDay(day, today)
    const currentMonth = getMonth(month);
    //今月以外をグレードダウン
    const isCurrentMonth = isSameMonth(day, currentMonth)
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                color={textColor}
                align="center"
                variant="caption"
                component="div"
            >
                <span className={isToday ? styles.today : ""}>
                    {day.format(format)}
                </span>
            </Typography>
            <div className={styles.schedules}>
                {schedules.map(e=>(
                    //CalendarElementでpropsという変数に残ったpropsを全て格納し、ここでもう一度展開している
                    <Schedule key={e.id} schedule={e} {...props}/>
                ))}
            </div>
        </div>
    );
};

export default CalendarElement;