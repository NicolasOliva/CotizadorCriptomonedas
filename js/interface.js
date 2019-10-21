class Interface {

  constructor(){
    this.CreateSelect();
  }

  CreateSelect(){
      quote.GetCurrencyApi()
        .then(data => {
          let select = document.getElementById('cryptocurrency');
          for(let prop in data) {            
              let option = document.createElement('option');
              option.value = data[prop].id;
              option.appendChild(document.createTextNode(data[prop].name));
              select.appendChild(option);
          }
        })
  } 

  showMessages (message,classes) {
      let div = document.createElement('div');
      div.className = classes;
      div.appendChild(document.createTextNode(message));

      let divMessage = document.querySelector('.messages');
      divMessage.appendChild(div);

      setTimeout(()=>{
        document.querySelector('.messages div').remove();
      },3000);
  }

  showResult (result, currency){

    let previousResult = document.querySelector('#result > div');
    if(previousResult) {
        previousResult.remove();
    }

    this.showSpinner();

    let hour = new Date(result.last_updated * 1000);
    let updatedHour = `${hour.getHours()}:${hour.getMinutes()}`;

    let htmlTemplate = `
          <div class="card cyan darken-3">
                  <div class="card-content white-text">
                       <span class="card-title">result:</span>
                       <p>The price of ${result.name} to currency ${currency} is of: $ ${result.quotes[currency].price}</p>
                       <p>Last hour: ${result.quotes[currency].percent_change_1h}</p>
                       <p>Last day: ${result.quotes[currency].percent_change_24h}</p>
                       <p>Last 7 days: ${result.quotes[currency].percent_change_7d}</p>
                       <p>Last Update: ${updatedHour} hs</p>
                  </div>
             </div>
      `;

      setTimeout(() => {
              document.querySelector('.spinner img').remove();
              document.querySelector('#result').innerHTML = htmlTemplate;
      },3000);

    }

  showSpinner(){
    let spinner = document.createElement('img');
    spinner.src = 'img/spinner.gif';
    document.querySelector('.spinner').appendChild(spinner);
  }

}
