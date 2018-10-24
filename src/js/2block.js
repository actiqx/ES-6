function showNamesLength(names) {
    if (names.length > 5) {
        let moreThanFive = 'there are more than 5 names';
        alert(moreThanFive);
        //other code......
    } else {
        let lessThanFive = 'there are less than 5 names';
        //console.log(moreThanFive); //moreThanFive - causes reference error
        alert(lessThanFive);
        //other
    }

    //both let variables don't exist here either
}

showNamesLength(["Cagarweyne", "John", "Nick", "Kieran", "Priya"]);