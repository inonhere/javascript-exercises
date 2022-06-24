const sumAll = function(x, y) {
    if (x < 0 || y < 0)
        {return ('ERROR')}
    else if (typeof x === 'string' || typeof y === 'string')
        {return 'ERROR'}
    else if (typeof x === 'object' || typeof y === 'object')
        {return 'ERROR'}
    var aToZ = x + y;
    var sum = (aToZ * (aToZ - 1)) / 2;
    return sum

};

// Do not edit below this line
module.exports = sumAll;
