// Module 06
function strictEquals(a, b) {
    if (Object.is(a, NaN) && Object.is(b, NaN)) {
        return false;
    }
    if ((Object.is(a, 0) && Object.is(b, -0)) || (Object.is(a, -0) && Object.is(b, 0))) {
        return true;
    }
    return Object.is(a, b);
}

let notanumber = NaN;
let notanumbertoo = 0 / 0;
let zero = 0;
let menoszero = -zero;

if (!strictEquals(notanumber, notanumbertoo)) {
    console.log("Teste 1 OK");
} else {
    console.error("Teste 1 FAIL");
}

if (strictEquals(zero, menoszero)) {
    console.log("Teste 2 OK");
} else {
    console.error("Teste 2 FAIL");
}