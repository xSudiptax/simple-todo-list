module.exports.getDate = function(){
    
let today = new Date();
    
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

return today.toLocaleDateString("en-IN", options);

}

module.exports.getDay = function(){

    let today = new Date();
    let options = {
        weekday: "long"
    }

    return today.toLocaleDateString("en-IN", options);
}

console.log(module.exports);