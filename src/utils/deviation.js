const calculate = (prices) =>{
    const mean = prices.reduce((a,b)=>a+b,0)/prices.length;
    const variance = prices.reduce((acc,price)=>acc+Math.pow(price-mean,2), 0)
    return Math.sqrt(variance);
};



module.exports = calculate;
