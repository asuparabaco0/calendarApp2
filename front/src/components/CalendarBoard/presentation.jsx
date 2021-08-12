import React from 'react';
import { ImageList, StylesProvider, Typography } from '@material-ui/core'
import * as styles from './style.css'
import CalendarElement from '../CalendarElement/index';

const days = ["日", "月", "火", "水", "木", "金", "土"];
const CalendarBoard = ({ calendar, month }) => {
    console.log(calendar)
    return (
        <div className={styles.container}>
            <ImageList className={styles.grid} cols={7} gap={0} rowHeight='auto'>
                {days.map(d => (
                    <li key={d}>
                        <Typography
                            className={styles.days}
                            color="textSecondary"
                            align="center"
                            variant="caption"
                            component="div">
                            {d}
                        </Typography>
                    </li>
                ))}
                {calendar.map(i => (
                    <li key={i.toISOString()}>
                        <CalendarElement day={i} month={month}/>
                    </li>
                ))}
            </ImageList>
        </div>
    )
}

export default CalendarBoard