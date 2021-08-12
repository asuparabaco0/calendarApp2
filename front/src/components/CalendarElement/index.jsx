import React from "react";
import { Typography } from "@material-ui/core"
import dayjs from "dayjs";
import * as styles from "./style.css";
import { isSameMonth, isFirstDay, isSameDay, getMonth} from "../../services/calendar";

const CalendarElement = ({ day, month }) => {
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
        </div>
    );
};

export default CalendarElement;