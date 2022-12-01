
function checkNum(a) {
    if (a == 0) {
        return `${a}`
    }
    else if (a % 2 !== 0) {
        return `${a} непарне`
    }
    else if (a % 2 == 0) {
        return ` ${a} парне `
    }
}
let data = checkNum(0);
console.log(data);