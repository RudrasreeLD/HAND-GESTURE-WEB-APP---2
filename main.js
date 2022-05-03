
prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img = "captured_image" src = "' + data_uri + '"/>';
    })
}

console.log('ml5 version:', ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nLVHdt-0S/model.json", modelLoaded);

function modelLoaded() {
    console.log('Yahoo!!! Model Is Working');
}

function speak() {
    var synth = window.speechSynthesis;
    v1 = "The first prediction is" + prediction_1;
    v2 = "and the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(v1 + v2);
    synth.speak(utterThis);
}