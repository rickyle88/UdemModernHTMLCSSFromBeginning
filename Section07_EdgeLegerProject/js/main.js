// For Google Maps
// jQuery

// var map;
function initMap() {

    //Your location
    const loc = {lat: 33.755131, lng: -117.981018};

    // Centered map on location
    map = new google.maps.Map(document.querySelector(".map"), {
        // center: { lat: -34.397, lng: 150.644 },
        center: loc,
        zoom: 8
    });

    // The marker, positioned at location
    const marker = new google.maps.Marker({position: loc, map: map});
}

// Sticky menu background
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    }else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth scrolling with jQuery
$('#navbar a').on('click', function(event){
    if(this.hash != ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        },
        800);
    }
});