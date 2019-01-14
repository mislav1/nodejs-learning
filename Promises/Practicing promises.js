let calculationPromise = new Promise( function(resolve, reject) {
    let delay = "";
    if(isNaN(delay)){
        setTimeout(resolve("uspješno"), delay);
    } else {
        reject("lalal");
    }
    
});

calculationPromise.then( (value) => console.log(value) ).catch( (err) => console.log(err));