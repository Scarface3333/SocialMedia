export const formatToClientDate = (date) => {
    if (!date) {
        return '';
    }
    return new Date(date).toLocaleDateString();
};
