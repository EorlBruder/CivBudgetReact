class CycleFormatter {

    static format(cycle) {
        switch (cycle) {
            case "YEARLY":
                return "yearly";
            case "ELEVEN_MONTHLY":
                return "every eleven months";
            case "TEN_MONTHLY":
                return "every ten months";
            case "NINE_MONTHLY":
                return "every nine months";
            case "EIGHT_MONTHLY":
                return "every eight months";
            case "SEVEN_MONTHLY":
                return "every seven months";
            case "HALF_YEARLY":
                return "every half year";
            case "FIVE_MONTHLY":
                return "every five months";
            case "FOUR_MONTHLY":
                return "every four months";
            case "THREE_MONTHLY":
                return "every three months";
            case "TWO_MONHTLY":
                return "every two months";
            case "MONTHLY":
                return "monthly";
            case "WEEKLY":
                return "weekly";
            case "DAILY":
                return "daily";
            default:
                return "Unknown Cycle"
        }
    }
}

export default CycleFormatter