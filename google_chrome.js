(function() {
    function copyToClipboard(text) {

      var textArea = document.createElement("textarea");
      textArea.style.position = 'fixed';
      textArea.style.top = 0;
      textArea.style.left = 0;
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = 0;
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand('copy');
        if (successful) {
          alert('メッセージがクリップボードにコピーされました！');
        } else {
          throw new Error('コピーに失敗しました: ' + document.execCommand('copy').message);
        }
      } catch (err) {
        console.error('クリップボードにコピーできませんでした:', err);
        alert('メッセージのコピー中にエラーが発生しました: ' + err.message);
      } finally {
        document.body.removeChild(textArea);
      }
    }

    var element = document.querySelector('button[data-testid]');
    if (!element) {
      alert('メッセージの要素が得られませんでした。');
      return;
    }

    var allButtons = document.querySelectorAll('button[data-testid]');
    var messagesUsr = document.querySelectorAll('button[data-testid="user"], button[data-testid="user-message"]');
    var messagesBot = document.querySelectorAll('button[data-testid="bot"], button[data-testid="bot-message"]');
    var messagesAll = document.querySelectorAll('button[data-testid="user"], button[data-testid="bot"], button[data-testid="user-message"], button[data-testid="bot-message"]');

    var textAll = '';
    var textUsr = '';
    var textBot = '';

    var username, date;

    messagesAll.forEach(function(button) {
      username = button.getAttribute('data-username');
      var ariaLabel = button.getAttribute('aria-label');
      textAll += username + ': ' + ariaLabel + '\n';
    });

    messagesBot.forEach(function(button) {
      date = new Date().toLocaleString();
      var ariaLabel = button.getAttribute('aria-label');
      textBot += 'Bot (' + date + '): ' + ariaLabel + '\n';
    });

    messagesUsr.forEach(function(button) {
      date = new Date().toLocaleString();
      var ariaLabel = button.getAttribute('aria-label');
      textUsr += 'User (' + date + '): ' + ariaLabel + '\n';
    });

    var allButtonsList = Array.from(allButtons).map(button => button.getAttribute('data-testid')).join(', ');

    if (messagesAll.length === 0) {
      alert('メッセージが見つかりませんでした。');
      return;
    }
     
    var confirmation = confirm('メッセージをクリップボードにコピーしますか？\nメッセージ数: user: ' + messagesUsr.length + ' / bot: ' + messagesBot.length + ' / All: ' + messagesAll.length + ' / 文字数: ' + textAll.length + '\n\nすべてのボタン: ' + allButtonsList);

    if (confirmation) {
      copyToClipboard(textAll);
    }

    var confirmation2 = confirm('メッセージを別画面に表示させしますか？\nメッセージ数: user: ' + messagesUsr.length + ' / bot: ' + messagesBot.length + ' / All: ' + messagesAll.length + ' / 文字数: ' + textAll.length + '\n\nすべてのボタン: ' + allButtonsList);

    if (confirmation2) {

      (function(){

        const newWindow = window.open();
        if (newWindow !== null) {
          const d = newWindow.document;
          d.writeln(
            `<html><body><textarea style="width:80%;height:80%;">${textAll}</textarea></body></html>`
          );
          d.close();
        } else {
          alert('別ウィンドウを開けませんでした。ポップアップ ブロッカーが有効になっている可能性があります。');
        }

      })();

    }


})(document);
