### Node.js	启动调试方式  #

- 通过node命令启动

		#通过shell终端进入server\bin目录
		node www
		
- webstorm配置启动入口

		有express框架构建的node，直接运行bin下面的www文件。
	
		#调出webstorm的终端：alt+f12
		node server\bin\www
- pm2

		#安装pm2
		cnpm i pm2 -g
		#进入项目路径
		pm2 start server/bin/www
		#停止pm2
		pm2 stop server\bin\www
		#查看当前运行的node项目
		pm2 list
		#查看日志
		pm2 log

### 基于express开发查询接口  #

- 安装mongoose（mongodb的封装，提供了增删改查的api，比较方便）

		cnpm i mongoose --save

- 创建model（实体）

	在server创建models文件夹；创建goods.js（model实体）

- 创建路由（要通过路由来调model实体，以此来查询数据库）

	在routes文件夹建路由：goods.js;同时在index.js加一级路由
	然后pm2查看是否上线。
	用node命令 node server\bin\www

- 基于mongoose，实现商品列表的查询功能
		
		
		