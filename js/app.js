$(document).ready(function() {

    $.ajax({
        url: 'data/test.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data) {
            data.forEach(function(item) {
                $(".list").append(`
                <div class="list-item">
                <div class="row">
                  <div class="col-sm-4">
                    <img src="img/ramen1.jpg" alt="ramen-image" class="list-image">
                  </div>
                  <div class="col-sm-8">
                    <p class="list-content brand">` + item["Brand"] + `</p>
                    <p class="list-content variety"><span class="item-head variety">` + item["Variety"] + `</span> </p>
                    <p class="list-content style"><span class="item-head style">` + item["Style"] + `</span> </p>
    
                    <div class="row country-ranking">
                      <div class="col-sm-4">
                        <p class="country-head">Country:</p>
                        <p class="list-content country"><span class="item-head country">` + item["Country"] + `</span> </p>
                      </div>
                      <div class="col-sm-4">
                        <p class="top-ten-head">Ranking: </p>
                        <p class="list-content top-ten"><span class="item-head top-ten">` + item["Top Ten"] + `</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                `)
            });
        }
    })
})