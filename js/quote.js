class Quote {

  async GetCurrencyApi(){
    let url = await fetch('https://api.coinmarketcap.com/v2/ticker/');
    let coins = await url.json();
    return coins.data;
  }

  async getValues(currency,cripto){
    let url = await fetch(`https://api.coinmarketcap.com/v2/ticker/${cripto}/?convert=${currency}`);
    let coin = await url.json();
    return coin.data;
  }

}
