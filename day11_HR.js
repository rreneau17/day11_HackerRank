// HackerRank exercise working with 2D Arrays

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

// code above this line was provided by HacherRank
    
    var top = 0;
    var mid = 0;
    var bot = 0;
    var sumTemp = 0;
    var sumTempArr = [];
    // reading thru the 2D array to find hour glass values
    for (var i = 0; i < (arr[i].length - 2); i++) {
        for (var j = 0; j < (arr[i].length - 2); j++) {
            top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            mid = arr[i+1][j+1];
            bot = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            sumTemp = top + mid + bot;
            // create array to track total values from hour glasses. 
            sumTempArr.push(sumTemp);
        }
    }
    // print largest hour glass value
    console.log(Math.max(...sumTempArr));
}