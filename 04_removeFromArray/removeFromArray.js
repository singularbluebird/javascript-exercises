const removeFromArray = function(array, ...args) {

    let removed = array;

    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // Determines which elements in the array stay.
            removed = removed.filter(stay => stay !== args[i]);
        }
    }

    return removed;

};

// Do not edit below this line
module.exports = removeFromArray;
