if ("webkitSpeechRecognition" in window) {
  const recongition = new window.webkitSpeechRecognition();

  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const status = document.getElementById("status");
  const transcript = document.getElementById("transcript");

  recongition.continuous = true;
  recongition.lang = "en-US";

  recongition.onstart = () => {
    status.innerText = "Listening...";
  };

  recongition.onend = () => {
    status.innerText = "Done!";
  };

  recongition.onerror = () => {
    status.innerText = "Something went wrong, please try again!";
  };

  recongition.onresult = (e) => {
    const results = e.results;

    transcript.innerText = results[results.length - 1][0].transcript;
  };

  start.onclick = () => {
    recongition.start();
  };

  stop.onclick = () => {
    recongition.stop();
  };
} else {
  alert(
    "This feature is unsupported by your browser, try switching to chrome or edge."
  );
}
