静的ファイルを置く
 - global.css -> そのまま、 template.htmlで読み込まれる全体に反映されるスタイル
 - index.css -> postcssでTailwind.cssをトランスコードした結果などが入るはず。package.jsonのscriptで実行される。
 - manifest.json -> PWA向けのマニフェストファイル。