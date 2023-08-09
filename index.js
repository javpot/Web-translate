let boole = true;

let speechRecognition = new webkitSpeechRecognition();

if ("webkitSpeechRecognition" in window) {
  console.log("allo");
} else {
  console.log("Speech Recognition Not Available");
}