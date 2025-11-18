# 安装 JDK

> 注：以下 Linux 服务器为 CentOS 系统

## 一、软件安装方式及特点

| **安装方式** | **核心工作原理** | **主要优点** | **潜在问题与缺点** |
| --- | --- | --- | --- |
| **Yum / DNF** | 从配置的软件仓库（Repository）在线下载并自动解决依赖关系。 | - **自动处理依赖**：省去手动查找依赖包的麻烦。- **简单快捷**：通常一条命令即可完成安装。- **官方维护**：软件包来自官方源，兼容性和安全性有保障。 | - **受仓库配置影响**：安装的版本和可用性取决于配置的仓库。 |
| **RPM 包** | 安装预先编译好的本地软件包文件。 | - **离线安装**：无需联网即可安装下载好的软件。- **直接控制**：可以精确安装特定版本。 | - **依赖需手动解决**：需要自行安装所有依赖包，易陷入"依赖地狱"- **兼容性风险**：包可能与当前系统环境不兼容。 |
| **源码编译** | 直接在系统上编译源代码并安装。 | - **高度定制**：可自行配置编译选项，启用或禁用特定功能。- **软件版本新**：能获取到最新的、尚未打包的版本。 | - **过程复杂耗时**：步骤多，编译时间长。- **排错困难**：出现编译错误时，排查和解决需要较高技能。- **无集中管理**：卸载和管理不如包管理器方便。 |
| **容器化部署** (如 Docker) | 将应用及其依赖打包在独立的容器中运行。 | - **环境隔离**：应用与宿主机环境隔离，冲突少。- **部署简便**：一次构建，随处运行。- **版本控制**：轻松管理不同版本的应用。 | - **学习成本**：需要理解容器相关概念和技术。- **资源开销**：会占用额外的系统资源。 |
| **二进制发布包** | 从官方或可信源下载已编译好的可执行文件或压缩包，解压后通过 PATH 或符号链接直接使用。 | - **无需编译**：部署迅速。- **版本可控**：可与系统包管理器解耦。- **较好兼容性**：若为静态编译或自带依赖，跨发行版更省心。 | - **依赖需自管**：库和运行时需自行维护。- **安全校验风险**：若未校验签名或来源不可靠。- **生命周期管理分散**：不受包管理器统一管理，升级与卸载需手动处理。 |

**首选 Yum/DNF 和二进制发布包**，下面介绍这两种安装的详细步骤。

## 二、Yum/DNF 安装详细步骤

以 JDK 21 为例，在 CentOS 系统上使用`dnf`（如果没有`dnf`，将下面的`dnf`换成`yum`即可）命令安装 JDK 21 并配置环境变量，整体上分为**搜索软件包、安装、配置环境变量和验证**几个步骤。

---

### **1. 搜索可用的 JDK 21 软件包**

使用以下命令搜索：
或者尝试更宽泛的搜索：
通常，包名会类似于 `java-21-openjdk` 或 `java-21-openjdk-devel`。前者是 java 运行时环境，后者会包含编译工具`javac`，是进行 Java 开发所必需的。

```bash
sudo dnf search java-21
```

---

### **2. 安装 JDK 21**

找到正确的包名后，使用`dnf install`命令进行安装。

```bash
sudo dnf install java-21-openjdk-devel
```

> 注：在某些 CentOS 版本中，基础的 java-21-openjdk 包可能只包含 Java 运行时环境（JRE）。如果你需要编译 Java 程序，请务必安装 java-21-openjdk-devel。

---

### **3. 配置环境变量**

> 注：如果需要管理多个 java 版本，跳过这一步，见下一步

安装完成后，需要设置环境变量，让系统知道 Java 的安装位置。

**3.1 确定 JDK 安装路径**

使用包管理器安装的 OpenJDK 通常位于 `/usr/lib/jvm/` 目录下。你可以通过以下命令精确查找：

```bash
dirname $(dirname $(readlink -f $(which java)))
```

这个命令会返回 JDK 的根目录路径，例如 `/usr/lib/jvm/java-21-openjdk-<version>`。

**3.2 设置环境变量**

推荐在 `/etc/profile.d/` 目录下创建一个单独的配置文件，例如 `java.sh`。这样做模块化更好，也易于管理。

创建并编辑配置文件：

```bash
sudo vi /etc/profile.d/java.sh
```

在文件中输入以下内容，**请务必将 `JAVA_HOME` 的路径替换为你在上一步找到的实际路径**：

```bash
# Set JDK environment variables
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-<version>  # 请替换为你的实际路径
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```

- **`JAVA_HOME`**：许多 Java 应用（如 Tomcat、Maven）依赖此变量来定位 JDK。
- **`PATH`**：将 JDK 的`bin`目录加入路径，使你可以直接在终端中运行`java`、`javac`等命令。
- **`CLASSPATH`**：指定 Java 类文件的查找路径。虽然在现代项目构建工具中其重要性已降低，但设置一个基础路径仍是好习惯。

保存并退出编辑器（在 vi 中按`Esc`，然后输入`:wq`并回车）。

**3.3 使环境变量生效**

执行以下命令，让配置立即在当前终端会话中生效：

```bash
source /etc/profile.d/java.sh
```

之后新打开的终端会话也会自动加载这些变量。

**3.4 验证配置**

通过以下命令验证 JDK 是否安装成功且环境变量配置正确。

```bash
java -version
javac -version
echo $JAVA_HOME
```

---

### **4. 管理多个 Java 版本（可选）**

如果你的系统上存在多个 JDK 版本，可以使用 `alternatives` 工具来方便地切换默认版本。

1. 注册 Java 命令到 alternatives 系统：

```bash
sudo alternatives --install /usr/bin/java java $JAVA_HOME/bin/java 1
sudo alternatives --install /usr/bin/javac javac $JAVA_HOME/bin/javac 1
```

（确保 `JAVA_HOME` 已指向你的 JDK 21 路径）

1. 切换版本：

```bash
sudo alternatives --config java
sudo alternatives --config javac
```

执行命令后，会列出所有已注册的 Java 版本，你可以输入选择编号来切换默认版本。

## 三、二进制包安装详细步骤

以 JDK 21 为例，[Oracle 官网](https://www.oracle.com/cn/java/technologies/downloads/#java21)下载对应版本的后缀为.tar.gz 的文件。

为防止文件被篡改，请务必从官方渠道下载，并校验文件的 SHA256 或 GPG 签名：
 
```bash
256sum your-package.tar.gz
# 对比官网提供的 checksum 值
```

### **1. 上传文件到服务器**

使用 Shell 命令上传

```bash
# 使用 SCP 上传（从本地到远程服务器）
scp your-package.tar.gz username@server_ip:/path/to/destination/

# 使用 SFTP 上传
sftp username@server_ip put your-package.tar.gz /path/to/destination/
```

或使用 FileZilla、WinSCP、FinalShell 等工具上传

### **2. 解压文件**

选择合适的安装目录：

```bash
# 常见的安装目录选择
sudo mkdir -p /opt/your-software # 第三方软件推荐位置
# 或
sudo mkdir -p /usr/local/your-software # 本地编译软件位置
# 或
mkdir -p ~/apps/your-software # 用户级安装
```

解压文件

```bash
# 进入上传目录
cd /path/to/destination/

# 解压 .tar.gz 文件
tar -xzvf your-package.tar.gz

# 如果需要指定解压目录
tar -xzvf your-package.tar.gz -C /opt/your-software

# 如果解压到了临时位置，移动到正式目录
sudo mv extracted-folder /opt/your-software/
```

### **3. 配置权限**

```bash
# 设置正确的所有权
sudo chown -R root:root /opt/your-software/
sudo chmod -R 755 /opt/your-software/
```

### **4. 环境变量配置同 DNF 安装**