const sortByDate = async (items) => {
    return items.sort((a, b) => {
        return new Date(b.metadata.timeCreated) - new Date(a.metadata.timeCreated);
    });
};

export default sortByDate;
