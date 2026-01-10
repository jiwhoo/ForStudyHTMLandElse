const one_sec = 1000;
let start_time = Date.now;
let expected_time = Date.now + one_sec;

function timer(){
    const drift = date.now - expected_time;
    expected_time += one_sec;

    setTimeout(timer, math.max(0, one_sec - drift))
}