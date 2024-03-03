async function f() {
    console.log('Async function.');
    return Promise.resolve("Output of function f()");
}
f().then(function(result) {
    console.log(result)
});