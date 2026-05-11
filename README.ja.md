# name2pic

福井県の観光地名から画像URLを取得するシンプルなJavaScript/TypeScriptモジュールです。

これは福井県観光地専用のバージョン（福井観光地編）です。

## 使い方

Denoやモダンブラウザ、その他のESM対応環境で、URLから直接モジュールをインポートします。

```javascript
import { name2pic } from "https://code4fukui.github.io/name2pic/fukui.js";

const imageUrl = await name2pic("東尋坊");
console.log(imageUrl);
//> "https://www.fuku-e.com/lsc/upfile/spot/0000/1476/1476_2_l.jpg"
```

## API

### `name2pic(name: string): Promise<string | null>`

指定された観光地名に対応する画像URLを非同期で取得します。

- **`name`**: 観光地の名前（例: `"東尋坊"`）。
- **戻り値**: 一致する観光地が見つかった場合は画像URLの文字列を、見つからなかった場合は `null` を解決する `Promise` を返します。

この関数はまず完全一致を試みます。完全一致が見つからない場合は、部分一致（指定された `name` が観光地の正式名称の一部に含まれているか）を試みます。内部で使用するJSONデータは、初回呼び出し時に取得およびキャッシュされ、2回目以降のリクエストのパフォーマンスを向上させます。

## データソース

データは [fuku-e-spot.jsonld](https://code4fukui.github.io/fukui-spot/fuku-e-spot.jsonld) から取得しています。

**出典:** [福井県観光地 by ふくいドットコム](https://github.com/code4fukui/fukui-spot/)

## ライセンス

MIT
