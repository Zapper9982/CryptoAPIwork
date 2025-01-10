const axios = require('axios');
const Cryptodata = require('../models/Cryptodata.model')

const fetchCryptoData = async () => {
  try {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: { vs_currency: 'usd', ids: 'bitcoin,matic-network,ethereum' }});

const records = data.map((coin) => ({
      coin: coin.id,
      price: coin.current_price,
      marketCap: coin.market_cap,
 '24hChange': coin.price_change_percentage_24h,
    }));
    await Cryptodata.insertMany(records);
    console.log('Crypto data updated successfully');
  }    catch (error) {
    console.error('Error fetching crypto data:', error.message);
  }
};

module.exports = fetchCryptoData;
