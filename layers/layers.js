var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_studium_kierunki_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_mirsk",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_kierunki",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_kierunki',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_kierunki_1, 1]);
var lyr_studium_dod_info_pow_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_mirsk",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_dod_info_pow",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_dod_info_pow',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_dod_info_pow_2, 1]);
var lyr_studium_dod_info_pkt_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_mirsk",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_dod_info_pkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_dod_info_pkt',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_dod_info_pkt_3, 1]);
var lyr_studium_dod_info_lin_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_mirsk",
                              attributions: ' ',
                              params: {
                                "LAYERS": "studium_dod_info_lin",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'studium_dod_info_lin',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_studium_dod_info_lin_4, 1]);
var lyr_mpzp_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_mirsk",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mpzp",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'mpzp',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_mpzp_5, 1]);
var lyr_dod_info_pow_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_mirsk",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_pow",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'dod_info_pow',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_dod_info_pow_6, 1]);
var lyr_dod_info_pkt_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_mirsk",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_pkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'dod_info_pkt',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_dod_info_pkt_7, 1]);
var lyr_dod_info_lin_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapa.inspire-hub.pl/ows/gmina_mirsk",
                              attributions: ' ',
                              params: {
                                "LAYERS": "dod_info_lin",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'dod_info_lin',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_dod_info_lin_8, 1]);
var format_Dzialki_9 = new ol.format.GeoJSON();
var features_Dzialki_9 = format_Dzialki_9.readFeatures(json_Dzialki_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dzialki_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dzialki_9.addFeatures(features_Dzialki_9);
var lyr_Dzialki_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dzialki_9, 
                style: style_Dzialki_9,
                popuplayertitle: 'Dzialki',
                interactive: false,
                title: '<img src="styles/legend/Dzialki_9.png" /> Dzialki'
            });
var format_Budynki_10 = new ol.format.GeoJSON();
var features_Budynki_10 = format_Budynki_10.readFeatures(json_Budynki_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Budynki_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Budynki_10.addFeatures(features_Budynki_10);
var lyr_Budynki_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Budynki_10, 
                style: style_Budynki_10,
                popuplayertitle: 'Budynki',
                interactive: false,
                title: '<img src="styles/legend/Budynki_10.png" /> Budynki'
            });
var format_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11 = new ol.format.GeoJSON();
var features_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11 = format_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11.readFeatures(json_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11.addFeatures(features_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11);
var lyr_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11, 
                style: style_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11,
                popuplayertitle: 'WNIOSKI (WNIOSKOWANE PRZEZNACZENIE)',
                interactive: true,
                title: '<img src="styles/legend/WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11.png" /> WNIOSKI (WNIOSKOWANE PRZEZNACZENIE)'
            });
var format_WNIOSKILICZBAWNIOSKOWNADZIALKE_12 = new ol.format.GeoJSON();
var features_WNIOSKILICZBAWNIOSKOWNADZIALKE_12 = format_WNIOSKILICZBAWNIOSKOWNADZIALKE_12.readFeatures(json_WNIOSKILICZBAWNIOSKOWNADZIALKE_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WNIOSKILICZBAWNIOSKOWNADZIALKE_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WNIOSKILICZBAWNIOSKOWNADZIALKE_12.addFeatures(features_WNIOSKILICZBAWNIOSKOWNADZIALKE_12);
var lyr_WNIOSKILICZBAWNIOSKOWNADZIALKE_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WNIOSKILICZBAWNIOSKOWNADZIALKE_12, 
                style: style_WNIOSKILICZBAWNIOSKOWNADZIALKE_12,
                popuplayertitle: 'WNIOSKI (LICZBA WNIOSKOW NA DZIALKE)',
                interactive: true,
                title: '<img src="styles/legend/WNIOSKILICZBAWNIOSKOWNADZIALKE_12.png" /> WNIOSKI (LICZBA WNIOSKOW NA DZIALKE)'
            });
var format_Granicagminy_13 = new ol.format.GeoJSON();
var features_Granicagminy_13 = format_Granicagminy_13.readFeatures(json_Granicagminy_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Granicagminy_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Granicagminy_13.addFeatures(features_Granicagminy_13);
var lyr_Granicagminy_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Granicagminy_13, 
                style: style_Granicagminy_13,
                popuplayertitle: 'Granica gminy',
                interactive: false,
                title: '<img src="styles/legend/Granicagminy_13.png" /> Granica gminy'
            });
var group_MPZP = new ol.layer.Group({
                                layers: [lyr_mpzp_5,lyr_dod_info_pow_6,lyr_dod_info_pkt_7,lyr_dod_info_lin_8,],
                                fold: "open",
                                title: 'MPZP'});
var group_STUDIUM = new ol.layer.Group({
                                layers: [lyr_studium_kierunki_1,lyr_studium_dod_info_pow_2,lyr_studium_dod_info_pkt_3,lyr_studium_dod_info_lin_4,],
                                fold: "open",
                                title: 'STUDIUM'});

lyr_OSMStandard_0.setVisible(true);lyr_studium_kierunki_1.setVisible(true);lyr_studium_dod_info_pow_2.setVisible(true);lyr_studium_dod_info_pkt_3.setVisible(true);lyr_studium_dod_info_lin_4.setVisible(true);lyr_mpzp_5.setVisible(true);lyr_dod_info_pow_6.setVisible(true);lyr_dod_info_pkt_7.setVisible(true);lyr_dod_info_lin_8.setVisible(true);lyr_Dzialki_9.setVisible(true);lyr_Budynki_10.setVisible(true);lyr_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11.setVisible(true);lyr_WNIOSKILICZBAWNIOSKOWNADZIALKE_12.setVisible(true);lyr_Granicagminy_13.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_STUDIUM,group_MPZP,lyr_Dzialki_9,lyr_Budynki_10,lyr_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11,lyr_WNIOSKILICZBAWNIOSKOWNADZIALKE_12,lyr_Granicagminy_13];
lyr_Dzialki_9.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'laczone': 'laczone', });
lyr_Budynki_10.set('fieldAliases', {'ID_BUDYNKU': 'ID_BUDYNKU', 'RODZAJ': 'RODZAJ', 'KONDYGNACJ': 'KONDYGNACJ', 'KONDYGNA_1': 'KONDYGNA_1', });
lyr_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11.set('fieldAliases', {'tresc': 'tresc', 'nr_dzialki': 'nr_dzialki', 'nr_wniosku': 'nr_wniosku', });
lyr_WNIOSKILICZBAWNIOSKOWNADZIALKE_12.set('fieldAliases', {'liczba_wni': 'liczba_wni', });
lyr_Granicagminy_13.set('fieldAliases', {'ID_DZIALKI': 'ID_DZIALKI', 'NUMER_DZIA': 'NUMER_DZIA', 'NUMER_OBRE': 'NUMER_OBRE', 'NUMER_JEDN': 'NUMER_JEDN', 'NAZWA_OBRE': 'NAZWA_OBRE', 'NAZWA_GMIN': 'NAZWA_GMIN', 'POLE_EWIDE': 'POLE_EWIDE', 'KLASOUZYTK': 'KLASOUZYTK', 'GRUPA_REJE': 'GRUPA_REJE', 'DATA': 'DATA', 'KW': 'KW', });
lyr_Dzialki_9.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'laczone': '', });
lyr_Budynki_10.set('fieldImages', {'ID_BUDYNKU': 'TextEdit', 'RODZAJ': 'TextEdit', 'KONDYGNACJ': 'TextEdit', 'KONDYGNA_1': 'TextEdit', });
lyr_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11.set('fieldImages', {'tresc': 'TextEdit', 'nr_dzialki': 'TextEdit', 'nr_wniosku': 'Range', });
lyr_WNIOSKILICZBAWNIOSKOWNADZIALKE_12.set('fieldImages', {'liczba_wni': 'TextEdit', });
lyr_Granicagminy_13.set('fieldImages', {'ID_DZIALKI': 'TextEdit', 'NUMER_DZIA': 'TextEdit', 'NUMER_OBRE': 'TextEdit', 'NUMER_JEDN': 'TextEdit', 'NAZWA_OBRE': 'TextEdit', 'NAZWA_GMIN': 'TextEdit', 'POLE_EWIDE': 'TextEdit', 'KLASOUZYTK': 'TextEdit', 'GRUPA_REJE': 'TextEdit', 'DATA': 'TextEdit', 'KW': 'TextEdit', });
lyr_Dzialki_9.set('fieldLabels', {'ID_DZIALKI': 'no label', 'NUMER_DZIA': 'no label', 'laczone': 'no label', });
lyr_Budynki_10.set('fieldLabels', {'ID_BUDYNKU': 'no label', 'RODZAJ': 'no label', 'KONDYGNACJ': 'no label', 'KONDYGNA_1': 'no label', });
lyr_WNIOSKIWNIOSKOWANEPRZEZNACZENIE_11.set('fieldLabels', {'tresc': 'no label', 'nr_dzialki': 'no label', 'nr_wniosku': 'no label', });
lyr_WNIOSKILICZBAWNIOSKOWNADZIALKE_12.set('fieldLabels', {'liczba_wni': 'no label', });
lyr_Granicagminy_13.set('fieldLabels', {'ID_DZIALKI': 'no label', 'NUMER_DZIA': 'no label', 'NUMER_OBRE': 'no label', 'NUMER_JEDN': 'no label', 'NAZWA_OBRE': 'no label', 'NAZWA_GMIN': 'no label', 'POLE_EWIDE': 'no label', 'KLASOUZYTK': 'no label', 'GRUPA_REJE': 'no label', 'DATA': 'no label', 'KW': 'no label', });
lyr_Granicagminy_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});