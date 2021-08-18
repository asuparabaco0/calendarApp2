import { Schedule } from "@material-ui/icons";
import dayjs from "dayjs";

import { isSameDay } from "./calendar";

export const setSchedules = (calendar, schedules) =>
    calendar.map(c => ({
        date: c,
        //それぞれのcalendarの日付に一致するものだけをfiletrする
        schedules: schedules.filter(e => isSameDay(e.date, c))
    }));

//../redux/schedules/effects.js
export const formatSchedule = schedule => ({
    ...schedule,
    date: dayjs(schedule.date)
})