function hi(){
    console.log("Hello");
}
 
function bye(callback){
    console.log("Bye");
    callback();
}

function wait(){
    console.log("Wait");
}

function exit(callback){
    console.log("Exit");
    callback();
}

exit(wait);
bye(hi);


