const reverseString = function(string) {
    var array = string.split("")
    var reversed = array.reverse()
    var join = reversed.join()
    var remove = join.replace(/,/g, '')
        return remove
};

// Do not edit below this line
module.exports = reverseString;
