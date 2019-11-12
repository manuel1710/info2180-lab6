{
  box-sizing:border-box;
}

form.super input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}


form.super button {
  float: left;
  width: 35%;
  padding: 20px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 3px solid grey;
  border-left: none;
  cursor: pointer;
}

form.super button:hover {
  background: #0b7dda;
}


form.super::after {
  content: "";
  clear: both;
  display: table;
}

$(document).ready(function() {
    var xmlBtn = $('#hero');

    xmlBtn.on('click', function() {
        $.ajax('superheroes.php', {
            method: "GET",
            dataType: 'xml'
        }).done(function(response) {
          window.alert('There was a problem with the request.');
            var people = $(response).find('person');
            $('#results').append("<ul></ul>");
            $(people).each(function() {
                $('#results ul').append('<li>' + $(this).find('name').text() + '</li>');
            });
        }).fail(function() {
            alert('There was a problem with the request.');
        });
    });
});
        
});