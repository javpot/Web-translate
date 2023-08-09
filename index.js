let button = document.querySelector("#record-button");
let speechRecognition = new webkitSpeechRecognition();
let final_transcript = "";



if ("webkitSpeechRecognition" in window) {
   console.log("hello")
    speechRecognition.continuous = false;
    speechRecognition.interimResults = true;
    speechRecognition.lang = document.querySelector("#select_dialect").value;
    speechRecognition.maxAlternatives = 1;
    console.log(speechRecognition.lang)
} else {
  console.log("Speech Recognition Not Available");
}

function listening(){
   speechRecognition.start();
      console.log("Helloo")
}

function stopListening(){
    speechRecognition.onend = () => {
        console.log("Je n'ecoute pu");
      };
      console.log("stop");
}
speechRecognition.onresult = function(event) {
if(event.results[0].isFinal){
    var text = event.results[0][0].transcript;
  
   console.log(text);
}

  }

  speechRecognition.onspeechend = function() {
    speechRecognition.stop();
  }
  
  
