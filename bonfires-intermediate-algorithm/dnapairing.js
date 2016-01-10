function pair(str) {
    var result = [];
    var find = function(strand) {
        switch (strand) {
            case "A":
                result.push(["A", "T"]);
                break;
            case "T":
                result.push(["T", "A"]);
                break;
            case "G":
                result.push(["G", "C"]);
                break;
            case "C":
                result.push(["C", "G"]);
                break;
        }
    };
    for (var i = 0; i <= str.length; i++) {
        find(str[i]);
    }
    return result;
}

pair("GCG");
