(function() {
  function copyToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.error('Unable to copy', err);
    }
    document.body.removeChild(textArea);
  }

  var userMessages = document.querySelectorAll('button[data-testid="user"]');
  var botMessages = document.querySelectorAll('button[data-testid="bot"]');
  var text = '';

  userMessages.forEach(function(button) {
    var ariaLabel = button.getAttribute('aria-label');
    text += ariaLabel + '\n';
  });

  botMessages.forEach(function(button) {
    var ariaLabel = button.getAttribute('aria-label');
    text += ariaLabel + '\n';
  });

  copyToClipboard(text);
})();
