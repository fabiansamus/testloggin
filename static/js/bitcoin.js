// var url= "https://blockchain.info/ticker";
// var url="https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD";
// var url1 = "https://api.coinmarketcap.com/v1/ticker/";
// var url="https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD"
// var info;
var pricesusd=[
    {
        '.btc-200-b':200,
        '.btc-500-b':500,
        '.btc-1000-b':1000}
];

function handledatabuy(){
  var url="https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD";
  $.getJSON(url, function(data){
    // info=data;s
    //console.log(data[0].price_usd);
    add_value(data[0]);
  })
  return 0;
};


function add_value(data){
    $.each(pricesusd[0], function(index, value) {
        // var result       = Math.round((value/data.price_usd)*1000000)/1000000;
        var result= value/data.price_usd;
        // Shockwave
        var changeResult = result * 7 / 100;
        var finalResult  = result + changeResult;
        // end Shockwave
        $(index).text(finalResult.toFixed(4));
    });
};


// function add_value(data){
//     var changeResult = data.price_usd * 7 /100;
//     var finalResult  = data.price_usd + changeResult;
//     $.each(pricesusd[0], function(index, value) {
//         var result       = Math.round((value/finalResult)*1000000)/1000000;
//         // Shockwave
//         // var changeResult = result * 7 / 100;
//         // var finalResult  = result + changeResult;
//         // end Shockwave
//         $(index).text(toString(result.toFixed(4)));
//     });
// };

refreshId = setInterval(function() {
  handledatabuy();
}, 1000);
