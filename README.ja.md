# name2pic

## 福井県の観光地検索

`name2pic` は、福井県の観光地の名称から、その観光地の画像URLを取得することができます。

## 機能

- 福井県の観光地の名称から、その画像URLを取得できます。
- 観光地の部分一致検索にも対応しています。

## 必要環境

- JavaScript 実行環境

## 使い方

`name2pic.js` をインポートし、`name2pic()` 関数を呼び出すことで、観光地の画像URLを取得できます。

以下のように使用できます:

```JavaScript
import { name2pic } from "https://code4fukui.github.io/name2pic/fukui.js";

console.log(await name2pic("東尋坊"));
```

## データ・API

- 画像データは[福井県観光地 by ふくいドットコム](https://github.com/code4fukui/fukui-spot/)のデータを使用しています。

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
