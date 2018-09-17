currentMode = "doctor";

var injectionNotificationTimeout;
var measurementNotificationTimeout;

// patient details
var patient = {
    active: false,
    name:"",
    age:"",
    isTeen: false,
};

var measurements = [];
var measurement = []

var measurementFace = [
    "assets/face-low.png",
    "assets/face-high.png",
    "assets/face-ok.png"
];

var measurementImage = [
    "assets/tube-low.png",
    "assets/tube-high.png",
    "assets/tube-ok.png"
];
