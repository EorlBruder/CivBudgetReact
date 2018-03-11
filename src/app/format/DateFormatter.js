class DateFormatter {
    static format(date) {
        const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
        return date.toLocaleDateString("en-UK", options);
    }
}

export default DateFormatter