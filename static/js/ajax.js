$('#button').on('click', function() {
  postItem();
});

function postItem() {
  var name =  $('#nombre').val();
  var apellido = $('#apellido').val();
  var test = $('#test').val();
  $.ajax({
            type: "POST",
            url: "/api_users",
            timeout: 2000,
            datatype: 'json',
            data: {name, apellido, test},
            success: function(data) {
                //show content
                alert('Success!')
            },
            error: function(jqXHR, textStatus, err) {
                //show error message
                alert('text status '+textStatus+', err '+err)
            }
        });
}
