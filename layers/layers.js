var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SECCIONES_2 = new ol.format.GeoJSON();
var features_SECCIONES_2 = format_SECCIONES_2.readFeatures(json_SECCIONES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECCIONES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECCIONES_2.addFeatures(features_SECCIONES_2);
var lyr_SECCIONES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SECCIONES_2, 
                style: style_SECCIONES_2,
                popuplayertitle: "SECCIONES",
                interactive: true,
    title: 'SECCIONES<br />\
    <img src="styles/legend/SECCIONES_2_0.png" /> CUARTA SECCION<br />\
    <img src="styles/legend/SECCIONES_2_1.png" /> QUINTA SECCION<br />\
    <img src="styles/legend/SECCIONES_2_2.png" /> SEXTA SECCION<br />'
        });
var format_CALLES_4ta_5ta_6ta_SECCIONES_3 = new ol.format.GeoJSON();
var features_CALLES_4ta_5ta_6ta_SECCIONES_3 = format_CALLES_4ta_5ta_6ta_SECCIONES_3.readFeatures(json_CALLES_4ta_5ta_6ta_SECCIONES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CALLES_4ta_5ta_6ta_SECCIONES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CALLES_4ta_5ta_6ta_SECCIONES_3.addFeatures(features_CALLES_4ta_5ta_6ta_SECCIONES_3);
var lyr_CALLES_4ta_5ta_6ta_SECCIONES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CALLES_4ta_5ta_6ta_SECCIONES_3, 
                style: style_CALLES_4ta_5ta_6ta_SECCIONES_3,
                popuplayertitle: "CALLES_4ta_5ta_6ta_SECCIONES",
                interactive: true,
                title: '<img src="styles/legend/CALLES_4ta_5ta_6ta_SECCIONES_3.png" /> CALLES_4ta_5ta_6ta_SECCIONES'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_SECCIONES_2.setVisible(true);lyr_CALLES_4ta_5ta_6ta_SECCIONES_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_SECCIONES_2,lyr_CALLES_4ta_5ta_6ta_SECCIONES_3];
lyr_SECCIONES_2.set('fieldAliases', {'id': 'id', 'SECCIONES': 'SECCIONES', });
lyr_CALLES_4ta_5ta_6ta_SECCIONES_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'DEPTO': 'DEPTO', });
lyr_SECCIONES_2.set('fieldImages', {'id': 'TextEdit', 'SECCIONES': 'TextEdit', });
lyr_CALLES_4ta_5ta_6ta_SECCIONES_3.set('fieldImages', {'NOMBRE': 'TextEdit', 'DEPTO': 'TextEdit', });
lyr_SECCIONES_2.set('fieldLabels', {'id': 'inline label - always visible', 'SECCIONES': 'inline label - always visible', });
lyr_CALLES_4ta_5ta_6ta_SECCIONES_3.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'DEPTO': 'inline label - always visible', });
lyr_CALLES_4ta_5ta_6ta_SECCIONES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});