function addEmoji() {
  var inputText = document.getElementById("input").value;
  var words = inputText.split(" ");

  var output = words.map((word) => `${word} 🤸🏼‍♂️`).join(" ");

  document.getElementById("output").innerText = output;
}

function copyOutputText() {
  var outputText = document.getElementById("output");
  var range = document.createRange();
  range.selectNode(outputText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  var copyButton = document.getElementById("copy-button");
  copyButton.classList.add("copied");
  setTimeout(function () {
    copyButton.classList.remove("copied");
  }, 1000);

  Swal.fire({
    icon: "success",
    title: "Text copied!",
    showConfirmButton: false,
    timer: 1500,
  });
}
