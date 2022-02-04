import{_ as a,c as e,o as l,a as i}from"./app.19fb4c5e.js";const u='{"title":"\u7269\u8054\u7F51\u5E38\u89C1\u534F\u8BAE","description":"","frontmatter":{},"headers":[{"level":2,"title":"TCP/IP \u7F51\u7EDC\u6A21\u578B","slug":"tcp-ip-\u7F51\u7EDC\u6A21\u578B"},{"level":2,"title":"HTTP \u534F\u8BAE","slug":"http-\u534F\u8BAE"},{"level":2,"title":"CoAP \u534F\u8BAE","slug":"coap-\u534F\u8BAE"},{"level":2,"title":"MQTT \u534F\u8BAE","slug":"mqtt-\u534F\u8BAE"},{"level":2,"title":"MQTT-SN\u534F\u8BAE","slug":"mqtt-sn\u534F\u8BAE"},{"level":2,"title":"LoRaWAN\u534F\u8BAE","slug":"lorawan\u534F\u8BAE"},{"level":2,"title":"NB-IoT\u534F\u8BAE","slug":"nb-iot\u534F\u8BAE"}],"relativePath":"tech/iot.md","lastUpdated":1643990329526}',T={},t=i('<h1 id="\u7269\u8054\u7F51\u5E38\u89C1\u534F\u8BAE" tabindex="-1">\u7269\u8054\u7F51\u5E38\u89C1\u534F\u8BAE <a class="header-anchor" href="#\u7269\u8054\u7F51\u5E38\u89C1\u534F\u8BAE" aria-hidden="true">#</a></h1><p>\u7269\u8054\u7F51\u662F\u4EBA\u5DE5\u667A\u80FD\u843D\u5730\u7684\u4E00\u4E2A\u975E\u5E38\u597D\u7684\u5E94\u7528\u573A\u666F\u3002\u968F\u7740\u4EBA\u5DE5\u667A\u80FD\u7684\u8FC5\u901F\u53D1\u5C55\uFF0C\u7269\u8054\u7F51\u8FD9\u4E2A\u540C\u6837\u5728\u5F88\u591A\u5E74\u524D\u5C31\u63D0\u51FA\u7684\u7406\u8BBA\u548C\u6280\u672F\uFF0C\u4E5F\u4F1A\u8FCE\u6765\u65B0\u7684\u6625\u5929\u3002</p><p>\u7AEF\u5230\u7AEF\u7684\u6C9F\u901A\uFF0C\u4E00\u76F4\u662F\u7269\u8054\u7F51\u4E1A\u52A1\u7684\u96BE\u70B9\u3002\u4F7F\u7528\u7684\u7269\u8054\u7F51\u901A\u8BAF\u534F\u8BAE\u4E0D\u540C\uFF0C\u4F7F\u5F97\u8FD9\u4E9B\u8BBE\u5907\u4E4B\u95F4\u7684\u6C9F\u901A\u5B58\u5728\u5DE8\u5927\u7684\u9E3F\u6C9F\u3002</p><p>\u901A\u8BAF\u534F\u8BAE\u53C8\u79F0\u901A\u8BAF\u89C4\u7A0B\uFF0C\u662F\u901A\u4FE1\u53CC\u65B9\u5BF9\u6570\u636E\u4F20\u9001\u63A7\u5236\u7684\u4E00\u79CD\u7EA6\u5B9A\uFF0C\u53CC\u65B9\u5FC5\u987B\u5171\u540C\u51C6\u5B88\u3002\u7EA6\u5B9A\u7684\u5185\u5BB9\u5305\u62EC\uFF1A\u6570\u636E\u683C\u5F0F\u3001\u540C\u6B65\u65B9\u5F0F\u3001\u4F20\u9001\u901F\u5EA6\u3001\u4F20\u9001\u901F\u5EA6\u3001\u4F20\u9001\u6B65\u9AA4\u3001\u68C0\u7EA0\u9519\u65B9\u5F0F\u3001\u63A7\u5236\u5B57\u7B26\u5B9A\u4E49\u7B49\u3002</p><p>\u53CC\u65B9\u5B9E\u4F53\u9700\u8981\u51C6\u5B88\u901A\u4FE1\u534F\u8BAE\u4E2D\u65E2\u5B9A\u7684\u89C4\u5219\uFF0C\u624D\u80FD\u5C06\u6709\u610F\u4E49\u7684\u4FE1\u606F\u4F20\u9012\u7ED9\u5BF9\u65B9\u3002</p><p>\u5E02\u9762\u4E0A\u6709\u5F88\u591A\u7269\u8054\u7F51\u5E94\u7528\u5C42\u534F\u8BAE\uFF0CCOAP\u3001HTTP\u3001MQTT \u662F\u6700\u5E38\u89C1\u7684\u4E09\u79CD\u3002HTTP \u548C MQTT \u5747\u4F7F\u7528 TCP \u4F5C\u4E3A\u4F20\u8F93\u5C42\u534F\u8BAE\uFF0C\u800C COAP \u5219\u662F\u57FA\u4E8E UDP \u4F20\u8F93\u534F\u8BAE\u3002\u540C\u65F6\uFF0C\u4F20\u8F93\u5C42\u7684 UDP \u548C TCP \u534F\u8BAE\u53C8\u90FD\u662F\u4F9D\u8D56\u7F51\u7EDC\u5C42\u7684 IP \u6280\u672F\u3002</p><h2 id="tcp-ip-\u7F51\u7EDC\u6A21\u578B" tabindex="-1">TCP/IP \u7F51\u7EDC\u6A21\u578B <a class="header-anchor" href="#tcp-ip-\u7F51\u7EDC\u6A21\u578B" aria-hidden="true">#</a></h2><p>TCP/IP \u6A21\u578B\u662F\u4E92\u8054\u7F51\u7684\u57FA\u7840\uFF0C\u5B83\u662F\u4E00\u7CFB\u5217\u7F51\u7EDC\u534F\u8BAE\u7684\u603B\u79F0\u3002\u8FD9\u4E9B\u534F\u8BAE\u53EF\u4EE5\u5212\u5206\u4E3A\u56DB\u5C42\uFF1A</p><ul><li>\u94FE\u8DEF\u5C42\uFF1A\u8D1F\u8D23\u5C01\u88C5\u548C\u89E3\u5C01\u88C5 IP \u62A5\u6587\uFF0C\u53D1\u9001\u548C\u63A5\u6536 ARP \u548C RARP \u62A5\u6587\u7B49\u3002</li><li>\u7F51\u7EDC\u5C42\uFF1A\u8D1F\u8D23\u8DEF\u7531\u4EE5\u53CA\u628A\u5206\u7EC4\u62A5\u6587\u53D1\u9001\u7ED9\u76EE\u6807\u7F51\u7EDC\u6216\u4E3B\u673A\u3002</li><li>\u4F20\u8F93\u5C42\uFF1A\u8D1F\u8D23\u5BF9\u62A5\u6587\u8FDB\u884C\u5206\u7EC4\u548C\u91CD\u7EC4\uFF0C\u5E76\u4EE5 TCP \u6216 UDP \u534F\u8BAE\u683C\u5F0F\u5C01\u88C5\u62A5\u6587\u3002</li><li>\u5E94\u7528\u5C42\uFF1A\u8D1F\u8D23\u5411\u7528\u6237\u63D0\u4F9B\u5E94\u7528\u7A0B\u5E8F\uFF0C\u6BD4\u5982 HTTP\u3001COAP\u3001Telnet\u3001MQTT\u3001DNS \u7B49\u3002</li></ul><p>\u5728\u7F51\u7EDC\u4F53\u7CFB\u7ED3\u6784\u4E2D\uFF0C\u7F51\u7EDC\u901A\u8BAF\u7684\u5EFA\u7ACB\u5FC5\u987B\u662F\u5728\u901A\u8BAF\u53CC\u65B9\u5728\u5BF9\u7B49\u5C42\u8FDB\u884C\uFF0C\u4E0D\u80FD\u4EA4\u9519\u3002</p><p>\u5728\u6574\u4E2A\u6570\u636E\u4F20\u8F93\u8FC7\u7A0B\u4E2D\uFF0C\u6570\u636E\u5728\u53D1\u9001\u7AEF\u65F6\u7ECF\u8FC7\u5404\u5C42\u90FD\u8981\u9644\u52A0\u4E0A\u76F8\u5E94\u5C42\u7684\u534F\u8BAE\u5934\u548C\u534F\u8BAE\u5C3E\uFF08\u4EC5\u6570\u636E\u94FE\u8DEF\u5C42\u9700\u8981\u5C01\u88C5\u534F\u8BAE\u5C3E\uFF09\u90E8\u5206\uFF0C\u4E5F\u5C31\u662F\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u534F\u8BAE\u5C01\u88C5\uFF0C\u4EE5\u6807\u8BC6\u5BF9\u5E94\u5C42\u6240\u7528\u7684\u901A\u8BAF\u534F\u8BAE\u3002</p><p>TCP\uFF08Transmission Control Protocol\uFF0C\u4F20\u8F93\u63A7\u5236\u534F\u8BAE\uFF09\uFF0C\u662F\u662F\u4E00\u79CD\u9762\u5411\u8FDE\u63A5\u7684\u3001\u53EF\u9760\u7684\u3001\u57FA\u4E8E\u5B57\u8282\u6D41\u5F97\u5230\u4F20\u8F93\u5C42\u901A\u4FE1\u534F\u8BAE\uFF0C\u7531 IETF \u7684 RFC 793 \u5B9A\u4E49\u3002</p><p>\u4E3A\u4E86\u9632\u6B62\u51FA\u73B0\u5931\u6548\u7684\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u88AB\u670D\u52A1\u7AEF\u63A5\u6536\u7684\u60C5\u51B5\uFF0C\u4ECE\u800C\u4EA7\u751F\u9519\u8BEF\uFF0C\u5EFA\u7ACB\u4E00\u4E2A TCP \u8FDE\u63A5\u7684\u9700\u8981\u4E09\u6B21\u63E1\u624B\u7684\u8FC7\u7A0B\uFF1A</p><ul><li>\u7B2C\u4E00\u6B21\u63E1\u624B\uFF1A\u5BA2\u6237\u7AEF\u53D1\u9001 SYN\uFF08SEQ=x\uFF09\u62A5\u6587\u7ED9\u670D\u52A1\u5668\uFF0C\u8FDB\u5165 SYN_SEND \u72B6\u6001</li><li>\u7B2C\u4E8C\u6B21\u63E1\u624B\uFF1A\u670D\u52A1\u7AEF\u63A5\u6536\u5230 SYN \u62A5\u6587\uFF0C\u56DE\u5E94\u4E00\u4E2A SYN\uFF08SEQ=y\uFF09+ ACK\uFF08ACK=x+1\uFF09\u62A5\u6587\uFF0C\u5E76\u8FDB\u5165 SYN_RECV \u72B6\u6001\u3002</li><li>\u7B2C\u4E09\u6B21\u63E1\u624B\uFF1A\u5BA2\u6237\u7AEF\u6536\u5230\u670D\u52A1\u7AEF\u7684 SYN \u62A5\u6587\uFF0C\u56DE\u5E94\u4E00\u4E2A ACK\uFF08ACK=y+1\uFF09\u62A5\u6587\uFF0C\u8FDB\u5165\u8FDE\u63A5\uFF08Established\uFF09\u72B6\u6001\u3002</li></ul><p>\u5EFA\u7ACB\u4E00\u4E2A\u8FDE\u63A5\u9700\u8981\u4E09\u6B21\u63E1\u624B\uFF0C\u800C\u7EC8\u6B62\u4E00\u4E2A\u8FDE\u63A5\u9700\u8981\u8FDB\u7ECF\u8FC7\u56DB\u6B21\u6325\u624B\uFF0C\u8FD9\u662F\u7531\u4E8E TCP \u7684\u534A\u5173\u95ED\u9020\u6210\u7684\u3002</p><h2 id="http-\u534F\u8BAE" tabindex="-1">HTTP \u534F\u8BAE <a class="header-anchor" href="#http-\u534F\u8BAE" aria-hidden="true">#</a></h2><p>HTTP \u534F\u8BAE\uFF0C\u5373\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF08Hypertext Transfer Protocol\uFF09\uFF0C\u662F\u4E00\u79CD\u8BE6\u7EC6\u89C4\u5B9A\u4E86\u6D4F\u89C8\u5668\u548C\u4E07\u7EF4\u7F51\u670D\u52A1\u5668\u4E4B\u95F4\u4E92\u76F8\u901A\u4FE1\u7684\u89C4\u5219\uFF0C\u901A\u8FC7\u56E0\u7279\u7F51\u4F20\u9001\u4E07\u7EF4\u7F51\u6587\u6863\u5F97\u5230\u6570\u636E\u4F20\u9001\u534F\u8BAE\u3002</p><p>\u76EE\u524D HTTP \u534F\u8BAE\u4F5C\u4E3A WEB \u7684\u6807\u51C6\u534F\u8BAE\u5DF2\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u5B83\u5728\u4E00\u4E9B\u7269\u8054\u7F51\u573A\u666F\u4E2D\u540C\u6837\u53EF\u4EE5\u4F7F\u7528\uFF0C\u4F8B\u5982\u624B\u673A\u3001PC\u7B49\u7EC8\u7AEF\u8BBE\u5907\u3002\u4F46\u662F\u4F5C\u4E3A\u9002\u5E94\u6D4F\u89C8\u5668\u573A\u666F\u7684 HTTP \u534F\u8BAE\uFF0C\u5E76\u4E0D\u9002\u7528\u4E8E\u7269\u8054\u7F51\u7684\u5176\u4ED6\u8BBE\u5907\u3002</p><p>\u9002\u7528\u8303\u56F4\uFF1A\u5F00\u653E\u7269\u8054\u7F51\u4E2D\u7684\u8D44\u6E90\uFF0C\u5B9E\u73B0\u670D\u52A1\u88AB\u5176\u4ED6\u5E94\u7528\u6240\u8C03\u7528\u3002</p><p>\u4F18\u52BF\uFF1A</p><ul><li>\u7B80\u5355\u7684\u5DE5\u4F5C\u6A21\u5F0F\uFF0C\u8BF7\u6C42 / \u54CD\u5E94\u3002</li><li>\u5B8C\u6574\u7684\u65B9\u6CD5\u5B9A\u4E49\u3002</li><li>\u5408\u7406\u7684\u72B6\u6001\u7801\u8BBE\u8BA1\u3002</li><li>\u53CB\u597D\u7684\u5A92\u4F53\u7C7B\u578B\u652F\u6301\uFF0C\u5982\u6587\u672C\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\u3002</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>\u5355\u5411\u4F20\u8F93\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5BA2\u6237\u7AEF\u8F6E\u8BE2\u5B9E\u73B0\u7C7B\u4F3C\u63A8\u9001\u6548\u679C\u6216\u8005HTTP2.0</li><li>\u5B89\u5168\u6027\u4E0D\u9AD8\uFF0CHTTP\u662F\u660E\u6587\u534F\u8BAE\uFF0C\u53EF\u4EE5\u4F7F\u7528 HTTPS \u4F20\u8F93\u3002</li><li>HTTP \u662F\u6587\u672C\u534F\u8BAE\uFF0C\u5197\u957F\u7684\u534F\u8BAE\u5934\u90E8\uFF0C\u5BF9\u4E8E\u8FD0\u7B97\u3001\u5B58\u50A8\u3001\u5E26\u5BBD\u8D44\u6E90\u53D7\u9650\u7684\u8BBE\u5907\u6765\u8BF4\u5F00\u9500\u5927\u3002</li></ul><h2 id="coap-\u534F\u8BAE" tabindex="-1">CoAP \u534F\u8BAE <a class="header-anchor" href="#coap-\u534F\u8BAE" aria-hidden="true">#</a></h2><p>CoAP\uFF08Constrained Application Protocol\uFF09\u5373\u53D7\u9650\u7684\u5E94\u7528\u534F\u8BAE\u3002CoAP \u662F\u4E3A\u4E86\u8BA9\u4F4E\u529F\u8017\u53D7\u9650\u8BBE\u5907\u53EF\u4EE5\u63A5\u5165\u4E92\u8054\u7F51\uFF0C\u7531 IETF \u7EC4\u7EC7\u5236\u5B9A\u7684\uFF0C\u5B83\u501F\u9274\u4E86 HTTP \u5927\u91CF\u6210\u529F\u7ECF\u9A8C\uFF0C\u540C\u6837\u4F7F\u7528\u8BF7\u6C42 / \u54CD\u5E94\u5DE5\u4F5C\u6A21\u5F0F\u3002</p><p>\u9002\u7528\u8303\u56F4\uFF1A\u9002\u7528\u4E8E\u4E92\u8054\u7F51\u73AF\u5883\u4E0B\u4E00\u5BF9\u4E00 M2M \u901A\u8BAF\u3002</p><p>\u4F18\u52BF\uFF1A</p><ul><li>\u91C7\u7528\u548C HTTP \u76F8\u4F3C\u8BED\u4E49\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\u7801\uFF0C\u4F7F\u7528\u4E8C\u8FDB\u5236\u62A5\u6587\uFF0C\u62A5\u6587\u5927\u5C0F\u8F83\u5C0F\u3002</li><li>\u4F20\u8F93\u5C42\u57FA\u4E8E UDP \u534F\u8BAE\uFF0C\u6BD4 TCP \u6570\u636E\u5305\u5C0F\uFF0C\u5E76\u4E0D\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\u5E26\u6765\u63E1\u624B\u7684\u5F00\u9500\u3002</li><li>\u8D44\u6E90\u53D1\u9001\u652F\u6301\uFF0C\u901A\u8FC7\u89C2\u5BDF\u8005\u6A21\u5F0F\u5B9E\u73B0\u7C7B\u4F3C\u53D1\u5E03 / \u8BA2\u9605\u6548\u679C\u3002</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>\u57FA\u4E8E UDP \u7684\u4E0D\u53EF\u9760\u4F20\u8F93\uFF0C\u4F46\u901A\u8FC7\u56DB\u79CD\u62A5\u6587\u7C7B\u578B\u7684\u7EC4\u5408\u53CA\u91CD\u4F20\u673A\u5236\u63D0\u9AD8\u4E86\u4F20\u8F93\u7684\u53EF\u9760\u6027\u3002</li><li>\u57FA\u4E8E UDP \u7684\u65E0\u8FDE\u63A5\u4F20\u8F93\uFF0C\u4E0D\u5229\u4E8E\u4E0D\u540C\u7F51\u7EDC\u95F4\u6D88\u606F\u7684\u56DE\u4F20\u3002</li></ul><h2 id="mqtt-\u534F\u8BAE" tabindex="-1">MQTT \u534F\u8BAE <a class="header-anchor" href="#mqtt-\u534F\u8BAE" aria-hidden="true">#</a></h2><p>MQTT\uFF08Message Queuing Telemetry Transport\uFF09\u5373\u6D88\u606F\u961F\u5217\u9065\u6D4B\u4F20\u8F93\u3002</p><p>MQTT \u534F\u8BAE\u6700\u521D\u662F\u5728 1999 \u5E74\u7531 IBM \u516C\u53F8\u5F00\u53D1\u7684\uFF0C\u7528\u4E8E\u5C06\u77F3\u6CB9\u7BA1\u9053\u4E0A\u7684\u4F20\u611F\u5668\u4E0E\u536B\u661F\u76F8\u8FDE\u63A5\u30022014 \u5E74\u6B63\u5F0F\u6210\u4E3A OASIS \u5F00\u653E\u6807\u51C6\u3002</p><p>MQTT \u4F7F\u7528\u7C7B\u4F3C MQ \u5E38\u7528\u7684\u53D1\u5E03 / \u8BA2\u9605\u6A21\u5F0F\uFF0C\u8D77\u5230\u5E94\u7528\u7A0B\u5E8F\u89E3\u8026\u3001\u5F02\u6B65\u6D88\u606F\u3001\u524A\u5CF0\u586B\u8C37\u7684\u4F5C\u7528\u3002\u5F88\u591A MQ \u4E2D\u95F4\u4EF6\u4E5F\u652F\u6301 MQTT \u534F\u8BAE\uFF0C\u6BD4\u5982 ActiveMQ\u3001RabbitMQ\u3001Kafka \u7B49\u3002</p><p>\u9002\u7528\u8303\u56F4\uFF1A\u5728\u4F4E\u5E26\u5BBD\u3001\u4E0D\u53EF\u9760\u7684\u7F51\u7EDC\u4E0B\u63D0\u4F9B\u57FA\u4E8E\u4E91\u5E73\u53F0\u7684\u8FDC\u7A0B\u8BBE\u5907\u7684\u6570\u636E\u4F20\u8F93\u548C\u76D1\u63A7\u3002</p><p>\u4F18\u52BF\uFF1A</p><ul><li>\u4F7F\u7528\u53D1\u5E03 / \u8BA2\u9605\u6A21\u5F0F\uFF0C\u63D0\u4F9B\u4E00\u5BF9\u591A\u7684\u6D88\u606F\u53D1\u5E03\uFF0C\u4F7F\u6D88\u606F\u53D1\u9001\u8005\u548C\u63A5\u53D7\u8005\u5728\u65F6\u95F4\u548C\u65F6\u7A7A\u4E0A\u89E3\u8026\u3002</li><li>\u4E8C\u8FDB\u5236\u534F\u8BAE\uFF0C\u7F51\u7EDC\u4F20\u8F93\u5F00\u9500\u975E\u5E38\u5C0F\uFF08\u56FA\u5B9A\u5934\u90E8\u662F2\u5B57\u8282\uFF09\u3002</li><li>\u7075\u6D3B\u7684 Topic \u8BA2\u9605\u3001QoS \u7B49\u7279\u6027\u3002</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>\u96C6\u4E2D\u5316\u90E8\u7F72\uFF0C\u670D\u52A1\u7AEF\u538B\u529B\u5927\uFF0C\u9700\u8981\u8003\u8651\u6D41\u7A0B\u63A7\u5236\u53CA\u9AD8\u53EF\u7528\u3002</li><li>\u5BF9\u4E8E\u8BF7\u6C42 / \u54CD\u5E94\u6A21\u5F0F\u7684\u652F\u6301\u9700\u8981\u5728\u5E94\u7528\u5C42\u6839\u636E\u6D88\u606F ID \u505A\u53D1\u5E03\u4E3B\u9898\u548C\u8BA2\u9605\u4E3B\u9898\u4E4B\u95F4\u7684\u5173\u8054\u3002</li></ul><h2 id="mqtt-sn\u534F\u8BAE" tabindex="-1">MQTT-SN\u534F\u8BAE <a class="header-anchor" href="#mqtt-sn\u534F\u8BAE" aria-hidden="true">#</a></h2><p>MQTT-SN\uFF08MQTT for Sensor Network\uFF09\u534F\u8BAE\u662FMQTT\u534F\u8BAE\u7684\u4F20\u611F\u5668\u7248\u672C\u3002MQTT\u534F\u8BAE\u867D\u7136\u662F\u8F7B\u91CF\u7684\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u4F46\u662FMQTT\u534F\u8BAE\u662F\u8FD0\u884C\u4E8ETCP\u534F\u8BAE\u6808\u4E4B\u4E0A\u7684\uFF0CTCP\u534F\u8BAE\u5BF9\u4E8E\u67D0\u4E9B\u8BA1\u7B97\u80FD\u529B\u548C\u7535\u91CF\u975E\u5E38\u6709\u9650\u7684\u8BBE\u5907\u6765\u8BF4\uFF0C\u6BD4\u5982\u4F20\u611F\u5668\uFF0C\u5C31\u4E0D\u592A\u9002\u7528\u4E86\u3002</p><p>MQTT-SN\u8FD0\u884C\u5728UDP\u534F\u8BAE\u4E0A\uFF0C\u540C\u65F6\u4FDD\u7559\u4E86MQTT\u534F\u8BAE\u7684\u5927\u90E8\u5206\u4FE1\u4EE4\u548C\u7279\u6027\uFF0C\u5982\u8BA2\u9605\u548C\u53D1\u5E03\u7B49\u3002MQTT-SN\u534F\u8BAE\u5F15\u5165\u4E86MQTT-SN\u7F51\u5173\u8FD9\u4E00\u89D2\u8272\uFF0C\u7F51\u5173\u8D1F\u8D23\u628AMQTT-SN\u534F\u8BAE\u8F6C\u6362\u4E3AMQTT\u534F\u8BAE\uFF0C\u5E76\u548C\u8FDC\u7AEF\u7684MQTT Broker\u8FDB\u884C\u901A\u4FE1\u3002MQTT-SN\u534F\u8BAE\u652F\u6301\u7F51\u5173\u7684\u81EA\u52A8\u53D1\u73B0\u3002</p><h2 id="lorawan\u534F\u8BAE" tabindex="-1">LoRaWAN\u534F\u8BAE <a class="header-anchor" href="#lorawan\u534F\u8BAE" aria-hidden="true">#</a></h2><p>LoRaWAN\u534F\u8BAE\u662F\u7531LoRa\u8054\u76DF\u63D0\u51FA\u5E76\u63A8\u52A8\u7684\u4E00\u79CD\u4F4E\u529F\u7387\u5E7F\u57DF\u7F51\u534F\u8BAE\uFF0C\u5B83\u548C\u6211\u4EEC\u4E4B\u524D\u4ECB\u7ECD\u7684\u51E0\u79CD\u534F\u8BAE\u6709\u6240\u4E0D\u540C\u3002</p><p>MQTT\u534F\u8BAE\u3001CoAP\u534F\u8BAE\u90FD\u662F\u8FD0\u884C\u5728\u5E94\u7528\u5C42\uFF0C\u5E95\u5C42\u4F7F\u7528TCP\u534F\u8BAE\u6216\u8005UDP\u534F\u8BAE\u8FDB\u884C\u6570\u636E\u4F20\u8F93\uFF0C\u6574\u4E2A\u534F\u8BAE\u6808\u8FD0\u884C\u5728IP\u7F51\u7EDC\u4E0A\u3002\u800CLoRaWAN\u534F\u8BAE\u5219\u662F\u7269\u7406\u5C42/\u6570\u636E\u94FE\u8DEF\u5C42\u534F\u8BAE\uFF0C\u5B83\u89E3\u51B3\u7684\u662F\u8BBE\u5907\u5982\u4F55\u63A5\u5165\u4E92\u8054\u7F51\u7684\u95EE\u9898\uFF0C\u5E76\u4E0D\u8FD0\u884C\u5728IP\u7F51\u7EDC\u4E0A\u3002</p><p>LoRa\uFF08Long Range\uFF09\u662F\u4E00\u79CD\u65E0\u7EBF\u901A\u4FE1\u6280\u672F\uFF0C\u5B83\u5177\u6709\u4F7F\u7528\u8DDD\u79BB\u8FDC\u3001\u529F\u8017\u4F4E\u7684\u7279\u70B9\u3002 \u5728\u4E0A\u9762\u7684\u573A\u666F\u4E0B\uFF0C\u7528\u6237\u5C31\u53EF\u4EE5\u4F7F\u7528LoRaWAN\u6280\u672F\u8FDB\u884C\u7EC4\u7F51\uFF0C\u5728\u5DE5\u7A0B\u8BBE\u5907\u4E0A\u5B89\u88C5\u652F\u6301LoRa\u7684\u6A21\u5757\u3002</p><p>\u901A\u8FC7LoRa\u7684\u4E2D\u7EE7\u8BBE\u5907\u5C06\u6570\u636E\u53D1\u5F80\u4F4D\u4E8E\u96A7\u9053\u5916\u90E8\u7684\u3001\u6709\u4E92\u8054\u7F51\u63A5\u5165\u7684LoRa\u7F51\u5173\uFF0CLoRa\u7F51\u5173\u518D\u5C06\u6570\u636E\u5C01\u88C5\u6210\u53EF\u4EE5\u5728IP\u7F51\u7EDC\u4E2D\u901A\u8FC7TCP\u534F\u8BAE\u6216\u8005UDP\u534F\u8BAE\u4F20\u8F93\u7684\u6570\u636E\u534F\u8BAE\u5305\uFF08\u6BD4\u5982MQTT\u534F\u8BAE\uFF09\uFF0C\u7136\u540E\u53D1\u5F80\u4E91\u7AEF\u7684\u6570\u636E\u4E2D\u5FC3\u3002</p><h2 id="nb-iot\u534F\u8BAE" tabindex="-1">NB-IoT\u534F\u8BAE <a class="header-anchor" href="#nb-iot\u534F\u8BAE" aria-hidden="true">#</a></h2><p>NB-IoT\uFF08Narrow Band Internet of Things\uFF09\u534F\u8BAE\u548CLoRaWAN\u534F\u8BAE\u4E00\u6837\uFF0C\u662F\u5C06\u8BBE\u5907\u63A5\u5165\u4E92\u8054\u7F51\u7684\u7269\u7406\u5C42/\u6570\u636E\u94FE\u8DEF\u5C42\u7684\u534F\u8BAE\u3002</p><p>\u4E0ELoRA\u4E0D\u540C\u7684\u662F\uFF0CNB-IoT\u534F\u8BAE\u6784\u5EFA\u548C\u8FD0\u884C\u5728\u8702\u7A9D\u7F51\u7EDC\u4E0A\uFF0C\u6D88\u8017\u7684\u5E26\u5BBD\u8F83\u4F4E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u90E8\u7F72\u5230\u73B0\u6709\u7684GSM\u7F51\u7EDC\u6216\u8005LTE\u7F51\u7EDC\u3002</p><p>\u8BBE\u5907\u5B89\u88C5\u652F\u6301NB-IoT\u7684\u82AF\u7247\u548C\u76F8\u5E94\u7684\u7269\u8054\u7F51\u5361\uFF0C\u7136\u540E\u8FDE\u63A5\u5230NB-IoT\u57FA\u7AD9\u5C31\u53EF\u4EE5\u63A5\u5165\u4E92\u8054\u7F51\u3002\u800C\u4E14NB-IoT\u534F\u8BAE\u4E0D\u50CFLoRaWAN\u534F\u8BAE\u90A3\u6837\u9700\u8981\u7F51\u5173\u8FDB\u884C\u534F\u8BAE\u8F6C\u6362\uFF0C\u63A5\u5165\u7684\u8BBE\u5907\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528IP\u7F51\u7EDC\u8FDB\u884C\u6570\u636E\u4F20\u8F93\u3002</p><p>NB-IoT\u534F\u8BAE\u76F8\u6BD4\u4F20\u7EDF\u7684\u57FA\u7AD9\uFF0C\u589E\u76CA\u63D0\u9AD8\u4E86\u7EA620dB\uFF0C\u53EF\u4EE5\u8986\u76D6\u5230\u5730\u4E0B\u8F66\u5E93\u3001\u7BA1\u9053\u3001\u5730\u4E0B\u5BA4\u7B49\u4E4B\u524D\u4FE1\u53F7\u96BE\u4EE5\u8986\u76D6\u7684\u5730\u65B9\u3002</p>',52),p=[t];function o(r,n,P,h,s,d){return l(),e("div",null,p)}var M=a(T,[["render",o]]);export{u as __pageData,M as default};
