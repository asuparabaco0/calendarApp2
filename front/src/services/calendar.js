import dayjs from 'dayjs'

export const isSameDay = (d1, d2) => {
    const format = "YYYYMMDD";
    return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
    const format = "YYYYMM";
    return m1.format(format) === m2.format(format);
};

export const isFirstDay = day => day.date() === 1;

export const createCalendar = month => {
    //add first day of this month
    //getMonth() 下に定義
    const firstDay = getMonth(month)
    console.log(month)
    //.day day of week
    const firstDayIndex = firstDay.day();

    return Array(35)
        .fill(0)
        //第2引数はインデックス番号、インデックス番号だけがホ地井
        .map((_, i) => {
            const diffFromfirstDay = i - firstDayIndex
            // add 35 to day
            const day = firstDay.add(diffFromfirstDay, 'day')

            return day
        })
}

export const getMonth = ({year, month}) => {
    return dayjs(`${year}-${month}`)
}

/*高階関数　引数もしくは戻り値が関数
const getMonthState = getMonthStateCreator(3) 3=diff
getMonthState(5) 5=month
function getMonthStateCreator(diff){
    return function (month) {
        const day = getMonth(month).add(diff, "month");
        return formatMonth(day)
    }
}
diffは分かっている　monthは分かっていないから関数を返しておく
*/

const getMonthStateCreator = diff => month => {
    const day = getMonth(month).add(diff, "month");
    console.log(day)
    return formatMonth(day);
};




export const getNextMonth = getMonthStateCreator(1)

export const getPreviousMonth = getMonthStateCreator(-1)

export const formatMonth = day => ({
    month: day.month() + 1,
    year: day.year()
});