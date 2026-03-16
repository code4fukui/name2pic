# name2pic

## fukui version (福井観光地編)
> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

```JavaScript
import { name2pic } from "https://code4fukui.github.io/name2pic/fukui.js";
A simple library to fetch image URLs for named Fukui, Japan tourist spots.

console.log(await name2pic("東尋坊"));
```
## Features
- Fetches image URLs for Fukui tourist spots by name
- Supports partial name matching

- データ出展: [福井県観光地 by ふくいドットコム](https://github.com/code4fukui/fukui-spot/)
## Requirements
- [Deno](https://deno.land/) runtime

## Usage
1. Install Deno
2. Import the `name2pic` function from `https://code4fukui.github.io/name2pic/fukui.js`
3. Call `name2pic` with the name of a Fukui tourist spot

## Data / API
The image URLs are sourced from the [Fukui Tourism Spots data](https://github.com/code4fukui/fukui-spot/) hosted on GitHub.

## License
This project is licensed under the [MIT License](LICENSE).
