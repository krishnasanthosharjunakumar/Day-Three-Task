// day 3 task JSON IteratION using for  in loop

// JSON iteration using  for in loop

var json = {
    jsonData: {
    one: [11, 12, 13, 14, 15],
    two: [21, 22, 23],
    three: [31, 32]
    }
    };
    
    for (var key in json.jsonData) {
        for (var key1 in json.jsonData[key]) {
            console.log(json.jsonData[key][key1])
        }
    }
    // output:
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
    
