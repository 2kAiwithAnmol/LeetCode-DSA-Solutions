var numJewelsInStones = function(jewels, stones) {
    let map1 = new Map(); //Create a map to store character count from string 'stones'
    let totalJewels = 0; //Initialize total jewels count to 0
    for(let i = 0; i < stones.length; i++) { //Loop through string 'stones'
        map1.set(stones[i], (map1.get(stones[i]) || 0 ) + 1); //Count frequency of each element
    }
    for(let i = 0; i < jewels.length; i++) { //Loop throght string 'jewels'
        if(map1.has(jewels[i])) { //If the jewel is present in the map
            totalJewels += map1.get(jewels[i]); //Add its count to totalJewels
 
        }
  
    }
    return totalJewels // Return total jewels found in stones
};