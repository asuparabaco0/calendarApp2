export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";

export const calendarSetMonth = payload => ({
    type: CALENDAR_SET_MONTH,
    //state と同じ構造の月と年のオブジェクトを想定している
    payload
});