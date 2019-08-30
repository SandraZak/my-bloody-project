const minDayBetweenDonate = {
    "M": 180,
    "F": 120
};

const getAvaiblesGroups = () => {
    return {
        'AB+': ['AB+','AB-','A+','A-','B+','B-','0+','0-'], //AB+ – może otrzymać każdą krew
        'AB-': ['AB-','A-','B-','0-'], //AB- – może otrzymać 0-, B-, A-, AB-
        'A+': ['A+','A-','0+','0-'], //A+ – może otrzymać 0-, 0+, A-, A+
        'A-': ['A-','0-'], //A- – może otrzymać 0-, A-
        'B+': ['0-','0+','B-','B+'], //B+ – może otrzymać 0-, 0+, B-, B+
        'B-': ['0-','B-'], //B- – może otrzymać 0-, B-
        '0+': ['0-','0+'], //0+ – może otrzymać 0-, 0+
        '0-': ['0-'], //0- – może otrzymać 0-
    };
};

const getLastAvaibleDate = (sex) => {
    const now = new Date();
    const nowTime = now.getTime();
    const maxTime = nowTime - minDayBetweenDonate[sex]*24*60*60*1000;
    return maxTime;
};

const getAvaibleGroup = (recipient) => {
    let groups = getAvaiblesGroups();
    return groups[recipient];
};

const checkGroup = (giver,recipient) => {
    let avaibles = getAvaibleGroup(recipient);
    return avaibles.includes(giver);
};

const checkDate = (value,sex) => {
    let date = new Date(value);
    const maxTime = getLastAvaibleDate(sex);
    const dateTime = date.getTime();
    return maxTime > dateTime;
};

const avaible = {
    'AB+': 'AB RH+',
    'AB-': 'AB RH-',
    'A+': 'A RH+',
    'A-': 'A RH-',
    'B+': 'B+ RH+',
    'B-': 'B RH-',
    '0+': '0 RH+',
    '0-': '0 RH-',
};

const sex = {
    'M': 'Mężczyzna',
    'F': 'Kobieta',
};

export default {
    checkDate: checkDate,
    checkGroup: checkGroup,
    avaible: avaible,
    sex: sex
};
