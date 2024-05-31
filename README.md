# cmdR_msgCopy ブックマークレット
- cohare for AI の、command-R と会話をしていったあと、最後にコピペしたいときのブックマークレットを作っています。
- このブックマークレットを使用すると、会話ログを取り出す支援として、ブックマークレット（またはF12の開発者モード）で実行すると、チャットインターフェースからメッセージをクリップボードにまとめてコピーできます。

## 特徴

- 指定されたチャットインターフェースから会話内容を抽出してコピーします。
- 動的に追加されたHTML要素を処理し、安定したデータ抽出を実現します。

## インストール

### ブックマークレット

1. [google_chrome.js](https://github.com/pumpCurry/cmdR_msgCopy/blob/main/google_chrome.js)からJavaScriptコードをコピーします。
2. Chromeブラウザを開きます。
3. 任意のページをブックマークします（Ctrl+DまたはCommand+D）。
4. ブックマークを編集し、URLをコピーしたJavaScriptコードに置き換えます:
    ```javascript
    javascript:(function()%7Bvar%20script%20%3D%20document.createElement(%27script%27)%3Bscript.src%20%3D%20%27https%3A%2F%2Fraw.githubusercontent.com%2FpumpCurry%2FcmdR_msgCopy%2Fmain%2Fgoogle_chrome.js%27%3Bdocument.body.appendChild(script)%3B%7D)();
    ```
## 使い方

1. [Hugging Faceスペース](https://huggingface.co/spaces/CohereForAI/c4ai-command-r-plus)のチャットインターフェースはiframeを利用しているため、そのiframe側「[https://cohereforai-c4ai-command-r-plus.hf.space/?__theme=light](https://cohereforai-c4ai-command-r-plus.hf.space/?__theme=light)」を開きます。
2. 作成したブックマークレットをクリックします。
3. メッセージが出るので、指示に従うと、会話内容がクリップボードにコピーされます。
4. クリップボードではなく、テキストボックスで眺めたい場合は、その次に別画面でひらきますか？にはいを押すと、クリップボードではなく別タブで開きます。
  - ポップアップブロックされる場合は、重要な会話結果ではない別の会話をつくり、こんにちはと会話したあと、再度ブックマークレットを実行して、ブロックを解除してください。
  - 別の会話にする理由は、その会話を保全する前に、ブラウザがタブを再読み込みすることがあるのを防ぎます。有益な会話が消滅することを予防することができます。


## トラブルシューティング

ブックマークレットが期待通りに動作しない場合：

- チャット自体がiframeを用いてhuggingface.co内にあるように見せているため、実態のチャットインターフェースURL ([https://huggingface.co/spaces/CohereForAI/c4ai-command-r-plus](https://cohereforai-c4ai-command-r-plus.hf.space/?__theme=light)) にいることを確認してください。
- ブックマークレットのJavaScriptコードが正しくコピーされていることを確認してください。
- [GitHubリポジトリ](https://github.com/pumpCurry/cmdR_msgCopy)で更新や問題を確認してください。

## ファイル構成

- `google_chrome.js`: Chrome用ブックマークレットスクリプト。
- `README.md`: このドキュメント。
- `LICENSE`: LGPL-2.1ライセンスファイル。

## ライセンス

このプロジェクトはLGPL-2.1ライセンスの下でライセンスされています。詳細は[LICENSE](LICENSE)ファイルを参照してください。
