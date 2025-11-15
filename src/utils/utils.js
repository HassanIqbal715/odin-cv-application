export function convertDate(date) {
    const months = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    };

    const dateList = date.split("-");

    const day = dateList[2]
    const month = dateList[1];
    const year = dateList[0];

    return `${day} ${months[month]} ${year}`;
}