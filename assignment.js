// https://github.com/jahid218875/Problem-Solving-Assignment 

// kilometre to metre

function kilometerToMeter(kilometer){
    if (kilometer <= 0) {
        return 'Entet valid kilometer'
    } else {
        let meter = kilometer * 1000
        return meter
    }
}

let house = kilometerToMeter(10)
console.log(house);

// Budget Calculator

function budgetCalculator(watch,phone,laptop){
    if (watch <= 0 && phone <= 0 && laptop <= 0) {
        return 'Enter valid Product Quantity';
    } else {
        let watchPrice = watch * 50
        let  phonePrice = phone * 100
        let laptopPrice = laptop * 150
        return watchPrice + phonePrice + laptopPrice;
    }
}

let totalBudget = budgetCalculator(2,1,3)
console.log(totalBudget);

// Hotel Cost 

function hotelCost(day){
   
    if (day <= 0) {
            return 'Enter valid Day'
    } else if (day <= 10) {
            return day * 100;
    } else if (day <= 20) {
            var oneToTenDay = 10 * 100;
            var elevenToTwentyDay = (day - 10) * 80
            return oneToTenDay + elevenToTwentyDay;
    } else if (day >= 21) {
            var oneToTenDay = 10 * 100;
            var elevenToTwentyDay = 10 * 80;
            var upToTwentyDay = (day - 20) * 50;
            return oneToTenDay + elevenToTwentyDay + upToTwentyDay
   }
    
}

var stayingDay = hotelCost(50)
console.log(stayingDay);

//  Mega Friend 

function megaFriend(name){
    let megaName = name[0]

    for (let i = 0; i < name.length; i++) {
        let element = name[i]

        if (element.length > megaName.length) {
            megaName = element
        }
    }
    return megaName
}

let bigName = megaFriend(['faisal', 'saifull', 'morshed alam', 'jahidul islam faisal'])
console.log(bigName);