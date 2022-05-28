const getTheTitles = function( userObjectArray) {

    let titlesArray = [];

    for (let objecti of userObjectArray) {
        
        titlesArray.push(objecti.title);
    }
    return titlesArray


};

// Do not edit below this line
module.exports = getTheTitles;
