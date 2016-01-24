var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var compress = require('compression');
var multipart = require('connect-multiparty');
var helmet = require('helmet');
var partials = require('./modules/main/partials')(express);
var routes = require('./modules/main/routes')(express);
var api = {};
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(compress());
app.use(express.static(path.join(__dirname, '../front')));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(helmet());
app.use(helmet.xframe());
app.use(helmet.xssFilter());
app.use(helmet.nosniff());
app.disabled('x-powered-by');
app.set('views', path.join(__dirname, '/modules'));
app.set('view engine', 'jade');
app.use('/', routes);
app.use('/partials', partials);

module.exports = app;