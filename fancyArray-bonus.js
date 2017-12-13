var arr = ["James", "Jill", "Jane", "Jack"];

function fancyArray(symbol, reversed) {
    console.log("Symbol - "+symbol);
    console.log("Reversed order - "+reversed);

    if (reversed == null) {
        for (x=0; x < arr.length; x++) {
            if (symbol == null) {
                console.log(x+" -> "+arr[x]);
            } else {
                console.log(x+" "+symbol+" "+arr[x]);
            }
        }
    } else {
        for (x=arr.length-1; x >= 0; x--) {
            if (symbol == null) {
                console.log(x+" -> "+arr[x]);
            } else {
                console.log(x+" "+symbol+" "+arr[x]);
            }
        }
    }
    console.log(" *** ");
}

fancyArray();
fancyArray(null,true);
fancyArray(" :: ",true);