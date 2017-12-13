var arr = ["James", "Jill", "Jane", "Jack"];

function fancyArray(reversed) {
    console.log("Reversed order - "+reversed);

    for (x=0; x < arr.length; x++) {
        console.log(x+" -> "+arr[x]);
    }

}

fancyArray();