# 基于create-react-app引入router的脚手架搭建

## 一、背景介绍
由于`create-react-app`没有集成`router`路由跳转，要想实现页面跳转的效果，除了 a 标签外，只能通过引入`router`来实现路由跳转，达到页面跳转和组件跳转的效果。

## 二、实现步骤

### 1、创建项目
选择你想要存放项目的路径，假定当前所在的文件目录为` D:\work\workspace\react` ，在目录空白处按住键盘shift键，同时鼠标右键，选择“在此处打开命令窗口”，在打开的命令行窗口中输入命令

	create-react-app react-router-demo

,其中`react-router-demo`是你想创建的项目名字，输入完全后，按回车，可以看到命令行窗口一直在跳动，这样`create-react-app`就会自动帮我们下载项目所要依赖的文件了，我们只要等待项目创建完成就可以了。当命令行窗口出现`Happy hacking!`，即项目创建完成，我们可以在`D:\work\workspace\react`目录下发现该目录下多了一个`react-router-demo`的文件夹，这就是我们创建的项目了。

### 2、项目文件目录结构
	├── node_modules                            // 项目第三方依赖文件
	├── public                                  // 放静态资源
	├── src                                     // 源码目录
	│   ├── App.css                             // 组件样式
	│   ├── App.js                              // 组件文件
	│   ├── App.test.js                         // 组件测试文件
	│   ├── index.css                           // 项目入口文件样式
	│   ├── index.js                            // 项目入口文件
	│   ├── logo.svg                            // 项目图标文件
	│   ├── serviceWorker.js                    // 资源缓存
	├── .gitignore                              // 告诉Git哪些文件不需要添加到版本管理中
	├── package-lock.json                       // 锁定安装时的包的版本号
	├── package.json                            // 项目配置文件，项目依赖包版本号
	├── README.md                               // 项目的说明文件

![项目目录结构](https://github.com/LiJinLan/react-router-demo/raw/master/docImages/file_structure.png "项目目录结构")

### 3、启动项目
创建好项目后，需要先启动项目查看项目是否能够正常运行。在命令行窗口中输入命令

	cd react-router-demo

进入项目，再输入命令

	npm start

启动项目，项目启动后会自动打开一个浏览器窗口加载页面，则项目启动完成。当浏览器加载页面情况如下图代表启动成功。

![启动成功](https://github.com/LiJinLan/react-router-demo/raw/master/docImages/start.png "启动成功")

### 4、引入router

#### (1). 下载router依赖
打开`package.json`文件，发现在`dependencies`中没有`router`的依赖文件，所以要下载`router`依赖。先关闭刚才启动的项目，在命令行窗口，同时按住键盘`ctrl+C`按键，在显示的命令处输入“y”即可关闭项目。在命令行窗口输入

	npm install react-router-dom --save

,回车，即下载`router`依赖文件。其中`--save`代表默认将依赖安装到`dependencies`。下载完成后，打开`package.json`文件，即可发现在`dependencies`中多了`react-router-dom`的版本号。

![package.json](https://github.com/LiJinLan/react-router-demo/raw/master/docImages/install_router.png "package.json")

#### （2). 引入router
打开`src`目录下的`index.js`文件，在文件头部引入`Router、Route`,用Router包裹住Route,Route是声明路由，声明跳转的路径和跳转后加载的组件，有两个属性path和component，path表示路由跳转的地址，component表示路由跳转后加载的组件。我们是实现在两个不同的页面进行跳转，所以这里声明两个路由，要把用到的组件引入进来，实现在App组件和Page2组件之间的跳转。

`index.js`文件的代码如下所示：
```js
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page2 from './components/Page2.js';

ReactDOM.render(
	<Router>		
		<Route exact path="/" component={ App }></Route>
		<Route path="/page2" component={ Page2 }></Route>				
	</Router>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
#### （3). 修改App.js
为了方便查看效果，在App组件中提供一个Link点击触发路由实现跳转。

`App.js`文件中的代码为如下，

	import React from 'react';
	import { Link} from 'react-router-dom';
	import './App.css';
	import Page2 from './components/Page2.js';

	class App extends React.Component {
	  render() {
		  return ( 
			  <div>
				  <h1>home</h1>
				  <Link to="/page2">跳转Page2</Link>

			  </div> 
		  );
	  }
	}

	export default App;

#### （4). 新建一个组件 Page2
在`src`文件夹下新建一个文件夹`components`,用来存放自定义的组件,在`components`文件夹下新建一个文件`Page2.js`,在该文件中写页面跳转的组件。

`Page2.js`文件的代码如下：

	import React from 'react';
	import { Link } from 'react-router-dom';
	import App from '../App.js';

	 class Page2 extends React.Component {
		render() {
			return (
				<div>
					<div>
						<p>这是page2的内容</p>
						<Link to="/">返回home</Link>

					</div>
				</div>
			);
		}
	 }
	 export default Page2;


#### (5). 实现效果
在主页面显示出一个`home`,点击跳转到`Page2`,则会渲染到`Page2`页面的内容，从`Page2`也可以跳转返回到`home`主页，实现页面之间的跳转。

![主页面效果](https://github.com/LiJinLan/react-router-demo/raw/master/docImages/homePage.png "主页面效果")

![跳转到Page2界面](https://github.com/LiJinLan/react-router-demo/raw/master/docImages/Page2.png "跳转到Page2界面")
