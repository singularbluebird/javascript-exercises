const findTheOldest = function(obj) {

    const stillAlive = obj.find(alive => alive.yearOfDeath === undefined);

    let thisYear = new Date().getFullYear();

    if (stillAlive) stillAlive['yearOfDeath'] = thisYear;
    
    const oldest = obj.sort((a, b) => {
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;

        return lastGuy > nextGuy ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
