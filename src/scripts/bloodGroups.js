const checkGroup = (giver,recipient) => {
    return true;
};

const checkDate = (date) => {
    return true;
};

const avaible = [
    'A',
    'B',
    'AB',
    '0',
];

export default {
    checkDate: checkDate,
    checkGroup: checkGroup,
    avaible: avaible
};
