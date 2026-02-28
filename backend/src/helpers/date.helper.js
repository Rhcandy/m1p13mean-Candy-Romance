// helpers/date.helper.js

function getMonthStartEnd(periode) {
    const [year, month] = periode.split("-").map(Number);
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    return { startDate, endDate }; // ⚡️ renommer ici
}

function countSelectedDays(jlocation, startDate, endDate) {
    let count = 0;
    let current = new Date(startDate);

    while (current <= endDate) {
        const day = current.getDay(); // 0 = dimanche

        const map = {
            0: "dimanche",
            1: "lundi",
            2: "mardi",
            3: "mercredi",
            4: "jeudi",
            5: "vendredi",
            6: "samedi"
        };

        if (jlocation[map[day]]) {
            count++;
        }

        current.setDate(current.getDate() + 1);
    }

    return count;
}

function isLate(currentDate, endDate) {
    return currentDate > endDate;
}

function getYearStartEnd(year) {
    const start = new Date(year, 0, 1, 0, 0, 0);
    const end = new Date(year, 11, 31, 23, 59, 59);

    return { start, end };
}

function getMonthNumber(date) {
    return new Date(date).getMonth() + 1; // 1-12
}

function formatMonthLabel(monthNumber) {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    return months[monthNumber - 1];
}

function isCurrentYear(date, year) {
    return new Date(date).getFullYear() === Number(year);
}

module.exports = {
    // Loyer
    getMonthStartEnd,
    countSelectedDays,
    isLate,

    // Stats
    getYearStartEnd,
    getMonthNumber,
    formatMonthLabel,
    isCurrentYear
};
