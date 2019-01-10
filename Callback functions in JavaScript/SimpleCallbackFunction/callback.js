function sayHello() {
    console.log('Hello');
}

function executeCallback( callback ) {
    callback();
}

//anonymous function
executeCallback(function() {
    console.log("Hello goodbye");
});

//anonymous arrow function
executeCallback( () => console.log("Bye"));