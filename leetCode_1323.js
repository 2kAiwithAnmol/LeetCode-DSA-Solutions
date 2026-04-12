var maximum69Number  = function(num) {

    // convert number to array of digits
    let arr = num.toString().split('');

    // loop through each digit
    for(let i = 0; i < arr.length; i++) {

        // if we find a '6'
        if(arr[i] === '6') {

            // change it to '9' to maximize the number
            arr[i] = '9';

            // stop after first change (most important digit)
            break;
        }
    }

    // convert array back to number and return
    return parseInt(arr.join(''));
};