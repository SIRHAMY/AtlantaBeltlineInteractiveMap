//var map = L.map('map').setView([51.505, -0.09], 13);
var map = L.map('map');

var geojsonFeature; // = new L.GeoJson.AJAX("./Data/Maps/NPUs.json");

$.ajax({
dataType: "json",
url: "./Data/Maps/NPUs.json",
success: function(data) {
    $(data.features).each(function(key, data) {
        geojsonFeature.addData(data);
    });
}
}).error(function() {});

geojsonFeature.addTo(map);
