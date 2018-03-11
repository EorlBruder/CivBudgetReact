class Rate {
    id;
    name;
    value;
    cycle;
    startDate;
    dailyValue;

    constructor(id, name, value, cycle, startDate, dailyValue) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.cycle = cycle;
        this.startDate = startDate;
        this.dailyValue = dailyValue
    }

}

export default Rate;