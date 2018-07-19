var url= "https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD";

$(document).ready(function(){
    $('.coin-b').keyup(function(){
      $.getJSON(url, function(data){
        var x = $('.coin-b').val();
        var result= x / data[0].price_usd;
        // Shockwave
        var beforeResult = result * 7 / 100;
        var finalResult  =beforeResult + result;
        // end Shockwave
        $('.btc-b').val(finalResult.toFixed(4));
      })
  });
});

$(document).ready(function(){
    $('.btc-b').keyup(function(){
      $.getJSON(url, function(data){
        var x = $('.btc-b').val();
        var result= x * data[0].price_usd;
        // Shockwave
        var finalResult  = result + ((result*6.5)/100);

        // end Shockwave
        $('.coin-b').val(finalResult.toFixed(4));
      })
  });
});


function clearData() {
    $('.coin-b').val('');
    $('.btc-b').val('');
}
