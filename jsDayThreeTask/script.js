// Day  3 Task
// json iteration using for, forin , for of loop

// JSON iteratiion using for loop;


var json = {
    jsonData: [{
    one: [11, 12, 13, 14, 15]
    }, {
    two: [21, 22, 23]
    }, {
    three: [31, 32]
    }]
    };
    
    for (var i = 0; i < json.jsonData.length; i++) {
        for (var key in json.jsonData[i]) {
            for (var j = 0; j < json.jsonData[i][key].length; j++) {
                console.log(json.jsonData[i][key][j])
            }
        }
    }
    
    
    // ouput  in for loop
    
    // 11
    // 12
    // 13
    // 14
    // 15
    // 21
    // 22
    // 23
    // 31
    // 32


   