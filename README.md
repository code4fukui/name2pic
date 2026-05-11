# name2pic

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple JavaScript/TypeScript module to get an image URL for a Fukui Prefecture tourist spot by its name.

This is the Fukui-specific version (福井観光地編).

## Usage

Import the module directly from its URL in Deno, modern browsers, or other ESM-compatible environments.

```javascript
import { name2pic } from "https://code4fukui.github.io/name2pic/fukui.js";

const imageUrl = await name2pic("東尋坊");
console.log(imageUrl);
//> "https://www.fuku-e.com/lsc/upfile/spot/0000/1476/1476_2_l.jpg"
```

## API

### `name2pic(name: string): Promise<string | null>`

Asynchronously retrieves an image URL for a given tourist spot name.

-   **`name`**: The name of the tourist spot (e.g., `"東尋坊"`).
-   **Returns**: A `Promise` that resolves to the image URL string if a match is found, or `null` otherwise.

The function first attempts an exact match. If no exact match is found, it falls back to a partial match (i.e., if the provided `name` is a substring of a spot's full name). The underlying JSON data is fetched and cached on the first call to improve performance on subsequent requests.

## Data Source

Data is sourced from [fuku-e-spot.jsonld](https://code4fukui.github.io/fukui-spot/fuku-e-spot.jsonld).

**Attribution:** [福井県観光地 by ふくいドットコム](https://github.com/code4fukui/fukui-spot/)

## License

MIT