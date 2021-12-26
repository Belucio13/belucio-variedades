var L;

window.onload = function() {
L.mapquest.key = '18gIpGQcFa9B9JVf0TAv664fI4StOKEI';
var map = L.mapquest.map('map', {
    center: [-1.3591597,-48.4751602,21],
    layers: L.mapquest.tileLayer('map'),
    zoom: 15
});


L.mapquest.textMarker([-1.3591597,-48.4751602,21], {
text: 'Belucio Variedades',
position: 'right',
type: 'marker',
icon: {
    primaryColor: '#095f03',
    secondaryColor: '#09b403',
    shadow: true,
    size: 'md',
    symbol: 'B'
}
})
.bindPopup(`<img src="image/frente-loja.png"> 
            <h3>Loja Belucio Variedades</h3>
            <p>Loja de variedades</p> 
            <p>Aberto das 8:00 às 20:00</p>
            <p>R. Vip, 94</p> 
            <p>whatsapp: xxxxx-xxxx</p>
        `)
.addTo(map)
}