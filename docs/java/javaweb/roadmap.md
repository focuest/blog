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

### 5. MVC设计模式

- 将应用程序分为 Model（模型）、View（视图）、Controller（控制器）三层，这是所有现代 Web现代 Web 框架的基础思想。
- 理解为什么要用 MVC，它能解决什么问题（如：JSP 中混杂 Java 和 HTML 代码导致的维护困难）。

## 二、核心技术

MySQL

MyBatis

HikariCP

Maven

Spring Framework

Spring Boot

## 三、拓展技术

RESTful API

Swagger/OpenAPI

Spring Security

Hibernate Validator

Junit+Mockito

Linux+Docker

## 四、AI技术

Spring AI

RAG,

AI智能体开发

大模型微调

知识图谱

## 可选

Redis

RabbitMQ

Elasticsearch

Spring框架源码解析

JVM原理

DevOps

Spring Cloud+分布式+微服务

算法与数据结构

Java NIO

前端技术

设计模式

极限编程