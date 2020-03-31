$(document).ready(function() {

    $(".nav-top").click(function(e) {
        e.preventDefault();

        $('#second-section').get(0).scrollIntoView();
    })

    $(".nav-home").click(function(e) {
        e.preventDefault();

        $(".nav-head").get(0).scrollIntoView();
    })


    var items = [];
    $.ajax({
        url: 'data/test.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data) {
            data.forEach(function(item) {
                items.push(item);
            });

            display_items(data);
        }
    })

    $(".searchbar").on("keyup", function() {
        var text = $(this).val().toLowerCase();

        $(".list >").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(text) > -1)
        })
    })


    $(".sort-brand").click(function(e) {
        e.preventDefault();
        sort_by(items, "Brand");

        $(".list").empty();

        display_items(items);
    })

    $(".sort-name").click(function(e) {
        e.preventDefault();
        sort_by(items, "Variety");

        $(".list").empty();

        display_items(items);
    })

    $(".sort-country").click(function(e) {
        e.preventDefault();
        sort_by(items, "Country");

        $(".list").empty();

        display_items(items);
    })

    $(".sort-style").click(function(e) {
        e.preventDefault();
        sort_by(items, "Style");

        $(".list").empty();

        display_items(items);
    })

    $(".sort-ranking").click(function(e) {
        e.preventDefault();
        sort_by(items, "Top Ten");

        $(".list").empty();

        display_items(items);
    })

})

function sort_by(array, by) {
    return array.sort(function(a,b) {
        var x = a[by];
        var y = b[by];


        if(x > y) {
            return 1;
        }

        if(y > x) {
            return -1;
        }

        return 0;
    })
}


function display_items(array) {
    array.forEach(function(item) {
        $(".list").append(`
            <div class="list-item" data-aos="fade-up">
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
        `)
    })
} 