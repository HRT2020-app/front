# HRT2020-app front

簡単な説明です  
(npmよりyarnがいいとか、あまり細かいことは考えてないので悪しからずww)

## 動かす

1. コマンドプロンプト/ターミナル立ち上げ
2. cd front
3. (node.js, react, react-scripts, react-dom, react-router-dom のインストール)  
    Node.js → https://nodejs.org/ja/  
    他      → npm install [  ]  
5. npm start
  
PC版 → http://localhost:3000, http://localhost:3000/pc  
SP版 → http://localhost:3000/sp                   

### 参考までに（伊藤の実行環境）

node.js (12.18.3)  
react (16.13.1)  
react-scripts (3.4.3)  
react-dom (16.13.1)  
react-router-dom (5.2.0)  

## code

基本的にはPC担当はpc/内で、スマホ担当はsp/内で作業してください  
その中であれば好きにファイルなどを追加していってください  
(別途加えたいところがあれば、随時声かけてください)  

<pre>
front/  
　├ src/  
    ├ apis/  
    │   └ fetchData.js [サーバとのデータのやり取り]  
    ├ pc/  
    │   └ pc.js [PC版javascript]  
    ├ sp/  
    │   └ sp.js [スマホ版javascript]  
    ├ App.js  
       :  
</pre>


### pc.js, sp.js
書き方は上手くまとめられないので、「reactの書き方」など各自調べてもらいたいです  
とりあえず、render()内にhtml形式で書けば何かしらは表示されます  

### fetchData.js
細かいところは後で変えるかもしれませんが、とりあえずこれで  
引数やらは、コードを見れば分かると思います  
現状では実際にサーバとやり取りせずに仮の値が返るようになっています  

| 関数名 |  |
----|---- 
| fetchGetList | 予約一覧取得 |
| fetchApply | 新しく予約する |
| fetchDelete | 削除する |
| fetchGetNumList | 予約人数の一覧だけ取得 |
| fetchGetSummary | （※現状放置）エクセルデータをダウンロード？ |

###　追加でインストールしたパッケージ

"bootstrap": "^4.5.2",
"immutability-helper": "^3.1.1",
"jquery": "^3.5.1",
"list": "^2.0.19",
"peer": "^0.5.3",
"popper": "^1.0.1",
"react-datepicker": "^3.1.3",
"typescript": "^4.0.2"

# ↓ 基からあったREADME


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
