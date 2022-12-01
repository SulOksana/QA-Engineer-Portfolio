
let count=0;
console.log('start count = count');
let ask=prompt('How many planets in the Solar System?');
if (ask=='8'||ask=='eight'){console.log('Yes');
    count++;}

let ask1=prompt('What planet is located the first from the Sun?');
if (ask1=='Mercury'||ask1=='mercury'){console.log('Yes');count++;}

let ask2=prompt('What planet is located the second from the Sun?');
if (ask2=='Venus'||ask2=='venus'){console.log('Yes');
    count++}

let ask3=prompt('What planet is located the third from the Sun?');
if (ask3=='Earth'||ask3=='earth'){console.log('Yes');
    count++}

let ask4=prompt('What planet is located the fourth from the Sun?');
if (ask4=='Mars'||ask4=='mars'){console.log('Yes');
    count++;}

let ask5=prompt('What planet is located the fifth of the Sun?');
if (ask5=='Jupiter'||ask5=='jupiter'){console.log('Yes');
    count++;}

let ask6=prompt('What planet is located the sixth from the Sun?');
if (ask6=='Saturn'||ask6=='saturn'){console.log('Yes');
    count++;}

let ask7=prompt('What planet is located the seventh from the Sun?');
if (ask7=='Uranus'||ask7=='uranus'){console.log('Yes');
    count++;}

let ask8=prompt('What planet is located the eighth from the Sun?');
if (ask8=='Neptune'||ask8=='neptune'){console.log('Yes');
    count++;}

let ask9=prompt('What is the hottest planet in the Solar System?');
if (ask9=='Venus'||ask9=='venus'){console.log('Yes');
    count++;}

let ask10=prompt('What is the coldest planet in the Solar System?');
if (ask10=='Uranus'||ask10=='uranus')console.log('Yes');count++;
console.log(count);

if(count>=0 && count <=4) {console.log('Try again.');}

else if(count>4 && count<=7) {console.log('Good.');}

else if(count>7 && count<=11) {console.log('Excellent!');}

console.log('Number of correct answers:'+ count)

