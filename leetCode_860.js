var lemonadeChange = function(bills) {
    let five = 0;  // count of $5 bills
    let ten = 0;   // count of $10 bills

    for (let i = 0; i < bills.length; i++) {

        if (bills[i] === 5) { 
            // customer pays exact, no change needed
            five++;
        }

        else if (bills[i] === 10) { 
            // need to give $5 back
            if (five >= 1) {
                five--;   // give one $5
                ten++;    // keep the $10
            } else {
                return false; // can't give change
            }
        }

        else if (bills[i] === 20) { 
            // need to give $15 back

            // best option: give $10 + $5
            if (five >= 1 && ten >= 1) {
                ten--;    // give one $10
                five--;   // give one $5
            }

            // otherwise give three $5 bills
            else if (five >= 3) {
                five -= 3;
            }

            else {
                return false; // can't give change
            }
        }
    }

    return true; // successfully gave change to everyone
};