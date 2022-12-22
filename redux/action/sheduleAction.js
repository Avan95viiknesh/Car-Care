const addToShedule = () => {
    return {
        type: "ADD_TO_SCHEDULE"
    }
}

const removeSheduleCard = () => {
    return {
        type: "REMOVE_FROM_SCHEDULE"
    }
}

export default {
    addToShedule,
    removeSheduleCard
}