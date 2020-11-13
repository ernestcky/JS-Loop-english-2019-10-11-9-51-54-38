for (var i = 1 ; i < 10; i++) {
    var str = "";
    for (var j = 1; j < i+1; j++) {
        str += (i.toString() + "*" + j.toString() + "=" + (i * j).toString() + "\t");
    }
    console.log(str);
}