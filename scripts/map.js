var L;

window.onload = function() {
L.mapquest.key = '18gIpGQcFa9B9JVf0TAv664fI4StOKEI';
var map = L.mapquest.map('map', {
    center: [-1.353063, -48.464957],
    layers: L.mapquest.tileLayer('map'),
    zoom: 13.4
})


L.mapquest.textMarker([-1.359063, -48.474957], {
text: 'Belucio Variedades',
position: 'bottom',
type: 'marker',
icon: {
    primaryColor: '#095f03',
    secondaryColor: '#09b403',
    shadow: true,
    size: 'md',
    symbol: 'B'
}
})
.bindPopup(`
            <img src="image/frente-loja.png"> 
            <h3>Loja Belucio Variedades</h3>
            <p>Loja de variedades</p> 
            <p>Aberto das 8:00 às 20:00</p>
            <p>R. Vip, 94</p> 
            <p>whatsapp: (91) 98488-5867</p>
        `)
.addTo(map)
}