import Rate from "./Rate";

class RateMapper {

    static mapToDomain(responseData) {
        console.log(responseData);
        return new Rate(responseData.id, responseData.name, responseData.value, responseData.cycle,
            new Date(responseData.startDate), responseData.dailyValue);
    }

    static mapToDomains(data) {
        const result = [];
        for (const responseData in data) {
            result.push(RateMapper.mapToDomain(data[responseData]));
        }
        return result;
    }

    static mapToDTO(rate) {
        return {
            id: rate.id,
            name: rate.name,
            value: rate.value,
            cycle: rate.cycle,
            startDate: RateMapper.toISODateString(rate.startDate),
            dailyValue: rate.dailyValue
        }
    }

    static toISODateString(date) {
        const pad = (number) => {
            return number < 10 ? '0' + number : number
        };
        return date.getUTCFullYear() + '-'
            + pad(date.getUTCMonth() + 1) + '-'
            + pad(date.getUTCDate());
    }


}

export default RateMapper;