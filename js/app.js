const quote = new Quote();
const ui = new Interface();

const form = document.getElementById('form');

form.addEventListener('submit',(e) => {

  e.preventDefault();

  let currency = document.getElementById('currency');
  let currencySelected = currency.options[currency.selectedIndex].value;

  let crypto = document.getElementById('cryptocurrency');
  let cryptoSelected = crypto.options[crypto.selectedIndex].value;

  if(currencySelected === '' || cryptoSelected === ''){
      ui.showMessages('You must complete both fields', 'deep-orange darken-4 card-panel');
  }else{
    quote.getValues(currencySelected, cryptoSelected)
      .then(data => {
        ui.showResult (data, currencySelected);
      })
  }

})
