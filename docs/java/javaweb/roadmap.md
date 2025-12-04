---
title: 学习路线
author: focuest
date: 2025-11-05
---

# 学习路线

## 一、Web基础

### 1. HTTP 协议

- 请求/响应模型
- HTTP 方法：GET、POST、PUT、DELETE 等
- 状态码：1xx, 2xx, 3xx, 4xx, 5xx 的含义
- 请求头与响应头：Content-Type, Cookie, Session, Cache-Control 等

### 2. Tomcat

- 安装和配置 Tomcat
- 用Tomcat服务器运行Web页面
- 在IDEA上配置Tomcat

### 3. Servlet

- Servlet 生命周期：`init()`, `service()`, `destroy()`
- `HttpServletRequest` 和 `HttpServletResponse` 对象的使用
- 获取参数、读取/写入 Cookie、处理 Session
- ServletContext 应用上下文
- **过滤器** 和 **监听器**：这是实现 AOP、权限控制、日志记录等功能的关键。

### 4. JSP & JSTL

- JSP 的本质就是一个 Servlet。
- JSP 的脚本元素、指令、动作。
- **JSTL 标签库标签库** 和 **EL 表达式**：用于在页面上更优雅地展示地展示数据，避免在 JSP 中写 Java 代码。
- 已淘汰，了解即可。

### 5. MVC设计模式

- 将应用程序分为 Model（模型）、View（视图）、Controller（控制器）三层，这是所有现代 Web现代 Web 框架的基础思想。
- 理解为什么要用 MVC，它能解决什么问题（如：JSP 中混杂 Java 和 HTML 代码导致的维护困难）。

## 二、核心技术

### MySQL

- 八股四大件之一
- 重点：SQL 语句，索引，事务，锁，InnoDB存储引擎，日志，主从复制，分库分表、读写分离，备份与恢复，性能优化。

### JDBC

- 不怎么重要，但是要了解其底层原理

### HikariCP

### Maven

### MyBatis

### Spring

### Spring MVC

### Spring Framework

### Spring Boot

- 最主流的框架

## 三、拓展技术

### RESTful API

### Swagger/OpenAPI

### Spring Security

### Hibernate Validator

### Junit+Mockito

### Git

- 学完后一定要动手实践！！！

### Linux+Docker

- 也是要动手实践

### Redis

- 八股四大件之一

### RocketMQ

- 除八股四大件外的最重要的点，和Kafka之间挑一个学

### JVM原理

- 八股四大件之一

## JUC

- 八股四大件之一

## 四、AI技术

Spring AI

RAG,

AI智能体开发

大模型微调

知识图谱

## 可选

### Spring Cloud

- 分布式、微服务框架

### Spring高级

- Spring框架源码解析

### RabbitMQ

- 消息队列

### Dubbo

- 流行的RPC框架

### 操作系统

### 计算机网络

- 《网络是怎样连接的》————户根勤

### 设计模式

Elasticsearch

DevOps

算法与数据结构

Java NIO

前端技术

极限编程

ZooKeeper

Netty

ShardingSphere

参考:
https://www.bilibili.com/video/BV1EQE4zMEpP