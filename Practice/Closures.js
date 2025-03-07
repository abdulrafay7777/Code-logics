

function outerFunction() {
    let name = "AbdulRafay";

    function innerFunction() {
        console.log(name);
    }

    return innerFunction;
}

let inner = outerFunction();
inner();



