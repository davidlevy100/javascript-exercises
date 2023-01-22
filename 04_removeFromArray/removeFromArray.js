const removeFromArray = function(arr, ...nums) {

    nums.forEach(element => {
        let index = arr.indexOf(element)
        if (index > -1) {
            arr.splice(index, 1)
        }
    });

    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
