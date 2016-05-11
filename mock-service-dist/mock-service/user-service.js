'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 10301;

app.post('/users', function (req, res) {
    res.status(200).json({
        name: 'koly',
        role: 'admin'
    });
});

app.use(function (req, res) {
    res.status(404).json({ message: 'Hi, I am kidding...' });
});

app.listen(port, function (_) {
    console.log('mock user service is running at ' + port + '...');
});
//# sourceMappingURL=user-service.js.map
