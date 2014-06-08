var data = [
    {text:'nauczyć się angulara', done:true},
    {text:'zaliczyć BIU', done:false}
];

module.exports = function (socket) {
	socket.emit('change', data);

	socket.on('change', function(obj) {
		console.log(obj);
		data = obj;
		socket.broadcast.emit('change', data);
	});
};