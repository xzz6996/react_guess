/* URL 结构
    http://www.happy.com:80/getList?id=1#title
    协议   域名           端口 路径  参数  哈希
*/
/* DNS 查询  (浏览器 <————>  dns服务器+dns缓存)
   域名转化为ip地址 
   tip: dns-prefetch 
*/
/** 资源请求
    浏览器   request-header +(url/body)   -- >        
            < -- status + response-header + body      后端服务器
 */
/* 浏览器解析
    dom  构建渲染树 -- > 布局 --> 绘制
 */