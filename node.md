# Node基础编程 #

> ###特性：

1. 基于chrome V8引擎，可以构建可扩展高性能服务器。处于高并发有一定的优势。（与c语言在性能方面不相上下）
2. 单线程：同一时间只能干一件事。
3. 可以使用javascript语言来开发后端代码。
4. 非阻塞的IO。（因为nodejs本身基于事件驱动）

> ###common规范

#####nodejs是基于common规范。
#####用module.exports 或者exports.name输出。 


> 搭建基于Express框架运行环境

- 安装express generator生成器。
- 通过生成器自动创建项目。
- 配置分析。

1. 安装：

		cnpm i -g express-generator

2.用自动生成器创建项目：

		express 项目名称

3. 合并package.json

4. 安装依赖：

		cnpm i 

5. cd server  (node bin/www 进去可执行文件。)

		node bin/www   

可以更改server下views的文件，把jade后缀文件改为html后缀文件。



- 先删掉jade文件。

- 安装ejs： cnpm i ejs --save
- 在app.js里加上：

		var ejs = require('ejs');
		app.engine('.html',ejs.__express);
	

