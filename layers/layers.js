var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SIAYACOUNTYBOUNDARIES_1 = new ol.format.GeoJSON();
var features_SIAYACOUNTYBOUNDARIES_1 = format_SIAYACOUNTYBOUNDARIES_1.readFeatures(json_SIAYACOUNTYBOUNDARIES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIAYACOUNTYBOUNDARIES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIAYACOUNTYBOUNDARIES_1.addFeatures(features_SIAYACOUNTYBOUNDARIES_1);
var lyr_SIAYACOUNTYBOUNDARIES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SIAYACOUNTYBOUNDARIES_1, 
                style: style_SIAYACOUNTYBOUNDARIES_1,
                interactive: false,
                title: '<img src="styles/legend/SIAYACOUNTYBOUNDARIES_1.png" /> SIAYA COUNTY BOUNDARIES'
            });
var format_8METRESBUFFERZONE_2 = new ol.format.GeoJSON();
var features_8METRESBUFFERZONE_2 = format_8METRESBUFFERZONE_2.readFeatures(json_8METRESBUFFERZONE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8METRESBUFFERZONE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8METRESBUFFERZONE_2.addFeatures(features_8METRESBUFFERZONE_2);
var lyr_8METRESBUFFERZONE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8METRESBUFFERZONE_2, 
                style: style_8METRESBUFFERZONE_2,
                interactive: false,
                title: '<img src="styles/legend/8METRESBUFFERZONE_2.png" /> 8 METRES BUFFER ZONE'
            });
var format_KOBONGCENTRELINE_3 = new ol.format.GeoJSON();
var features_KOBONGCENTRELINE_3 = format_KOBONGCENTRELINE_3.readFeatures(json_KOBONGCENTRELINE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOBONGCENTRELINE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOBONGCENTRELINE_3.addFeatures(features_KOBONGCENTRELINE_3);
var lyr_KOBONGCENTRELINE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KOBONGCENTRELINE_3, 
                style: style_KOBONGCENTRELINE_3,
                interactive: false,
                title: '<img src="styles/legend/KOBONGCENTRELINE_3.png" /> KOBONG CENTRELINE'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SIAYACOUNTYBOUNDARIES_1.setVisible(true);lyr_8METRESBUFFERZONE_2.setVisible(true);lyr_KOBONGCENTRELINE_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SIAYACOUNTYBOUNDARIES_1,lyr_8METRESBUFFERZONE_2,lyr_KOBONGCENTRELINE_3];
lyr_SIAYACOUNTYBOUNDARIES_1.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_8METRESBUFFERZONE_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KOBONGCENTRELINE_3.set('fieldAliases', {'id': 'id', });
lyr_SIAYACOUNTYBOUNDARIES_1.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_8METRESBUFFERZONE_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KOBONGCENTRELINE_3.set('fieldImages', {'id': 'TextEdit', });
lyr_SIAYACOUNTYBOUNDARIES_1.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_8METRESBUFFERZONE_2.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KOBONGCENTRELINE_3.set('fieldLabels', {'id': 'no label', });
lyr_KOBONGCENTRELINE_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});