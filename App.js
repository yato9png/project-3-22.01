let whiteBeans = 75;  
let blackBeans = 150; 

while (whiteBeans + blackBeans > 1) {
    if (whiteBeans >= 2) {
        whiteBeans -= 2;  
        blackBeans += 1;  
    } else {
        blackBeans -= 1;  
    }
}

if (whiteBeans === 1) {
    alert("Белый горошек остался");  
} else {
    alert("Черный горошек остался"); 
