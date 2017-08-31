let user = require('./User');



let http = require('http');
let url = require('url');
let util = require('util');

//创建服务端：
let server = http.createServer((req,res)=>{
	res.statusCode = 200;
	
	res.setHeader("Content-Type","text/plain; charset=utf-8");
	
	
	
	res.end(util.inspect(url.parse(req.url))); //此时的req.url没有协议和hash等信息。
	
	/*
	http://localhost:3000/index.html?a=123
	Url {
	  protocol: null,
	  slashes: null,
	  auth: null,
	  host: null,
	  port: null,
	  hostname: null,
	  hash: null,
	  search: '?a=123',
	  query: 'a=123',
	  pathname: '/index.html',
	  path: '/index.html?a=123',
	  href: '/index.html?a=123' }
	*/	
	
	
	//在express框架可用util.inspect(url.parse(req.originalUrl));可以拿到完整的url
	//调试模式util.inspect()
	res.end(util.inspect(url.parse('http://localhost:3000/index.html?a=123#tag')));
	/*
	Url {
	  protocol: 'http:',
	  slashes: true,
	  auth: null,
	  host: 'localhost:3000',
	  port: '3000',
	  hostname: 'localhost',
	  hash: '#tag',
	  search: '?a=123',
	  query: 'a=123',
	  pathname: '/index.html',
	  path: '/index.html?a=123',
	  href: 'http://localhost:3000/index.html?a=123#tag' } 
	*/
	
//	三种模式：
	
	console.log('url:'+req.url); //demo.html?a=123
	
	console.log("parse"+url.parse(req.url)); //[Object Object]
	
	console.log('inspect'+util.inspect(url.parse(req.url)));
	
	/*
	inspectUrl {
	  protocol: null,
	  slashes: null,
	  auth: null,
	  host: null,
	  port: null,
	  hostname: null,
	  hash: null,
	  search: '?a=123',
	  query: 'a=123',
	  pathname: '/index.html',
	  path: '/index.html?a=123',
	  href: '/index.html?a=123' }
	  
	*/
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('服务器已经运行，请打开浏览器，输入 : http://127.0.0.1:3000/ 来进行访问');
});



