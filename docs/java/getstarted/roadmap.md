---
title: 学习路线
author: focuest
date: 2025-11-05
---

# 学习路线

## 第一部分：Java语言基础

### **1. 基础语法与核心概念**

- **数据类型**：8种基本类型 + 引用类型
- **变量与常量**：作用域、final关键字
- **运算符**：算术、关系、逻辑、位运算、三目运算符
- **流程控制**：条件分支(if/switch)、循环(for/while)、跳转(break/continue)
- **数组**：声明、初始化、多维数组、Arrays工具类

### **2. 面向对象编程（OOP核心）**

- **四大特征**：
    - **封装**：访问修饰符(private/protected/public)、getter/setter
    - **继承**：extends、super、方法重写(@Override)
    - **多态**：向上转型、动态绑定、instanceof
    - **抽象**：抽象类 vs 接口
- **关键概念**：
    - 类与对象、构造方法、this关键字
    - static关键字：静态变量、静态方法、静态代码块
    - final关键字：修饰类、方法、变量

## **第二部分：Java 核心进阶**

### **3. 异常处理**

- **异常体系**：Throwable → Error/Exception → RuntimeException
- **处理机制**：try-catch-finally、throws
- **自定义异常**：业务异常的实现
- **最佳实践**：异常的捕获与抛出策略

### **4. 集合框架（Collection Framework）**

- **Collection接口**：
    - List：ArrayList、LinkedList、Vector
    - Set：HashSet、LinkedHashSet、TreeSet
    - Queue：PriorityQueue、ArrayDeque
- **Map接口**：
    - HashMap（重点掌握扩容机制）
    - LinkedHashMap
    - TreeMap
    - ConcurrentHashMap（线程安全）
- **迭代器**：Iterator、ListIterator、foreach
- **工具类**：Collections、Arrays

### **5. 泛型泛型（Generics）**

- 泛型类、泛型方法、泛型接口
- 类型通配符：? extends T、? super T
- 类型擦除机制

### **6. 反射机制（Reflection）**

- Class类的获取方式
- 构造方法、字段、方法的反射调用
- 动态代理：JDK Proxy、CGLIB

### **7. 注解（Annotation）**

- 内置注解：@Override、@Deprecated等
- 元注解：@Target、@Retention等
- 自定义注解及处理器

## **第三部分：Java 高级特性**

### **8. IO/NIO**

- **传统IO**：
    - 字节流：InputStream/OutputStream
    - 字符流：Reader/Writer
    - 缓冲流：BufferedXXX
- **NIO**：
    - Buffer、Channel、Selector
    - 非阻塞IO原理

### **9. 多线程与并发编程（面试重点）**

- **线程基础**：
    - 线程创建：Thread、Runnable、Callable
    - 线程生命周期：新建、就绪、运行、阻塞、死亡
- **线程同步**：
    - synchronized关键字
    - volatile关键字
    - Lock体系：ReentrantLock、ReadWriteLock
- **并发工具**：
    - 线程池：ThreadPoolExecutor、Executors
    - Future/FutureTask
    - JUC包：ConcurrentHashMap、CopyOnWriteArrayList
    - 原子类：AtomicInteger等
    - 同步器：CountDownLatch、CyclicBarrier、Semaphore

### **10. Java 8+ 新特性**

- **Lambda表达式**：函数式编程
- **Stream API**：集合的流式操作
- **新的日期时间API**：LocalDate、LocalDateTime
- Optional类：空值处理
- 方法引用、接口默认方法

## **第四部分：JVM 相关**

### **11. JVM 内存模型**

- 运行时数据区：堆、栈、方法区等
- 垃圾收集算法与GC调优
- 类加载机制：双亲委派模型
- 性能监控工具：jstack、jmap、jstat