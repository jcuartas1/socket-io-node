// Comando para establecer la conexion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.on('estadoActual', function(result) {
    label.text(result.actual);
});

$('button').on('click', function() {
    socket.emit('siguenteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});