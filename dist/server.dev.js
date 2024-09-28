"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
// Load .env file
_dotenv["default"].config();

var app = (0, _express["default"])(); // Menyajikan file statis dari folder 'public'

app.use(_express["default"]["static"](_path["default"].join(process.cwd(), 'public'))); // Route untuk halaman utama

app.get('/', function (req, res) {
  res.sendFile(_path["default"].join(process.cwd(), 'public', 'index.html'));
}); // Endpoint untuk mendapatkan URL API

app.get('/api/geminiApiUrl', function (req, res) {
  var geminiApiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=".concat(process.env.GEMINI_API_KEY);
  res.json({
    geminiApiUrl: geminiApiUrl
  });
}); // Mengatur port dan memulai server

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});