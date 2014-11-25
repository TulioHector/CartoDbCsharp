
//window.onload = function (){
//    cartodb.createVis('map', 'http://hromano.cartodb.com/api/v2/viz/0125c4f4-728b-11e4-9caa-0e018d66dc29/viz.json');
//};

function main() {
    cartodb.createVis('map', 'http://hromano.cartodb.com/api/v2/viz/0125c4f4-728b-11e4-9caa-0e018d66dc29/viz.json', {
        shareable: true,
        title: true,
        description: true,
        search: true,
        tiles_loader: true,
        center_lat: 0,
        center_lon: 0,
        zoom: 2
    })
    .done(function (vis, layers) {
        // layer 0 is the base layer, layer 1 is cartodb layer
        // setInteraction is disabled by default
        layers[1].setInteraction(true);
        layers[1].on('featureOver', function (e, pos, latlng, data) {
            cartodb.log.log(e, pos, latlng, data);
        });

        // you can get the native map to work with it
        var map = vis.getNativeMap();

        // now, perform any operations you need
        // map.setZoom(3);
        // map.panTo([50.5, 30.5]);
    })
    .error(function (err) {
        console.log(err);
    });
}

window.onload = main;