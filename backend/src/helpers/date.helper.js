// helpers/date.helper.js

function getMonthStartEnd(periode) {
    // periode format: "2026-01"
    const [year, month] = periode.split("-");
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 0); // dernier jour du mois
    return { start, end };
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

module.exports = {
    getMonthStartEnd,
    countSelectedDays,
    isLate
};
