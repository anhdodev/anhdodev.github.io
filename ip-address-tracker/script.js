var api_key = "at_tMqBk9baKio0Mwnt4To1OC72XU9RF";

function buildMap(lat, lng) {
  var mymap = L.map("ip-map").setView([lat, lng], 13);
  mymap.invalidateSize();
  var container = L.DomUtil.get("ip-map");
  if (container != null) {
    container._leaflet_id = null;
  };
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoicmljaGJyb29rMTAxIiwiYSI6ImNra2gxeTRsNTFiMmcyd3F1N2NhNjI0ZWIifQ.nYR_JOscd1iXvmWTTqMRrQ",
    }
  ).addTo(mymap);
  var marker = L.marker([lat, lng]).addTo(mymap);
}

function handleIpRequest(ip) {
  $.ajax({
    url: "https://geo.ipify.org/api/v1",
    data: {
      apiKey: api_key,
      ipAddress: ip,
    },
    success: function (data) {
      var ipDATA = JSON.stringify(data, "", 2);
      $("#ip-address").text(ip);

      var city = data.location.city;
      var country = data.location.country;
      var provider = data.isp;
      var timezone = data.location.timezone;
      var mapLat = Number(data.location.lat);
      var mapLng = Number(data.location.lng);

      $("#location").text(city + ", " + country);
      $("#timezone").text("GMT " + timezone);
      $("#isp").text(provider);

      buildMap(mapLat, mapLng);
    },
    error: function (jqXHR, exception) {
      var msg = "";
      if (jqXHR.status === 422) {
        msg = "Please enter a valid IP Address!";
        alert(msg);
      }
    },
  });
}

$(window).on('load', function () {
  $.ajax({
    method: "GET",
    url: "https://api.ipify.org/",
    success: function(data) {
      handleIpRequest(data);
    },
    error: function (jqXHR, exception) {
      var msg = "";
      if (jqXHR.status === 422) {
        msg = "Please enter a valid IP Address!";
        alert(msg);
      }
    }
  });
});



$(document).ready(function () {
  $(".submit-button").on("click", function (e) {
    e.preventDefault();
    var ip = $(this).parent().find("input[type=text]").val();
    handleIpRequest(ip);
  });
});
