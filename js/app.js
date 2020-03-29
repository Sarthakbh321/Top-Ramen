$(document).ready(function() {

    var ramens;

    $.ajax({
        url: 'data/test.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data) {
            data.forEach(function(item) {
                console.log(item);
            });
        }
    })
})