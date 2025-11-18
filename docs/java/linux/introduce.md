# 介绍

## 一、什么是 Linux

Linux 是一种自由和开放源码的类 Unix 操作系统。该操作系统的内核由林纳斯·托瓦兹在 1991 年 10 月 5 日首次发布，再加上用户空间的应用程序之后，就成为了 Linux 操作系统。Linux 也是自由软件和开放源代码软件发展中最著名的例子。只要遵循 GNU 通用公共许可证（GPL），任何个人和机构都可以自由地使用 Linux 的所有底层源代码，也可以自由地修改和再发布。大多数 Linux 系统还包括像提供 GUI 的 X Window 之类的程序。除了一部分专家之外，大多数人都是直接使用 Linux 发行版，而不是自己选择每一样组件或自行设置。
~
通常情况下，Linux 被打包成供个人计算机和服务器使用的 Linux 发行版，一些流行的主流 Linux 发行版，包括 Debian（及其派生版本 Ubuntu、Linux Mint）、Fedora（及其相关版本 Red Hat Enterprise Linux）和 openSUSE 等。Linux 发行版包含 Linux 内核和支撑内核的实用程序和库，通常还带有大量可以满足各类需求的应用程序。个人计算机使用的 Linux 发行版通常包含 X Window 和一个相应的桌面环境，如 GNOME 或 KDE。桌面 Linux 操作系统常用的应用程序，包括 Firefox 网页浏览器、LibreOffice 办公软件、GIMP 图像处理工具等。由于 Linux 是自由软件，任何人都可以创建一个符合自己需求的 Linux 发行版。

## 二、系统结构

![image.png](/image/article/12.png)

- **/bin**：bin 是 Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。
- **/boot：**这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。
- **/dev ：**dev 是 Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。
- **/etc：**etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。
- **/home**：用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。
- **/lib**：lib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。
- **/lost+found**：
  这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。
- **/media**：linux 系统会自动识别一些设备，例如 U 盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。
- **/mnt**：系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。
- **/opt**：opt 是 optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个 ORACLE 数据库则就可以放到这个目录下。默认是空的。
- **/proc**：proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。
  这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的 ping 命令，使别人无法 ping 你的机器：
  ```
  echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all
  ```
- **/root**：该目录为系统管理员，也称作超级权限者的用户主目录。
- **/sbin**：s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。
- **/srv**：该目录存放一些服务启动之后需要提取的数据。
- **/sys**：这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统  sysfs 。
  sysfs 文件系统集成了下面 3 种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。
  该文件系统是内核设备树的一个直观反映。
  当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。
- **/tmp**：tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。
- **/usr**：usr 是 unix system resources(unix 系统资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。
- **/usr/bin：**系统用户使用的应用程序。
- **/usr/sbin：**超级用户使用的比较高级的管理程序和系统守护程序。
- **/usr/src：**内核源代码默认的放置目录。
- **/var**：var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。
- **/run**：是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。

## 三、常用命令

```
用法: ls [-al] [dir]
	列出目录（默认为当前目录）的信息。
选项:
	-a --all 不要隐藏以 . 开头的项目
	-l       使用长列表格式

用法: pwd
	打印当前工作目录的名字。

用法: cd [dirName]
	切换当前shell的工作目录
举例:
	cd ..          切换到当前目录的上级目录
	cd ~           切换到用户目录
	cd /usr/local  切换到/usr/local目录
	cd -           切换到上一次所在目录

用法: mkdir [-pv] dirName
	创建目录
选项：
	-p --parents 需要时创建目标目录的父目录，但即使这些目录已存在
               也不视为错误，且其文件模式也不受 -m 选项影响。
  -v --verbose 每次创建新目录时，打印一条消息

用法: rm [-rf] name
	 删除文件或目录
选项:
	-r --recursive 递归删除目录及其内容
	-f --force     忽略不存在的文件和参数，且从不询问

用法: history
	显示或操纵历史列表

用法: cat [-n] fileName...
	连接一个或多个文件并输出到标准输出
选项:
	-n --number 对输出的所有行编号

用法: more fileName
	以分页形式显示文件内容
操作说明:
	回车键 		 向下滚动一行
	空格键 		 向下滚动一屏
	b     		向上滚动一屏
	q或Ctrl+C 退出

用法: head [-n] fileName
	显示文件开头的内容
选项:
	-n --number 显示开头n行内容

用法: tail [-nf] fileName
	显示文件结尾的内容
选项:
	-n --number 显示结尾n行内容
	-f --follow  动态读取文件末尾的内容，通常用于日志文件

用法: cp [-r] source target
	复制文件或目录
选项:
	-r --recursive 递归复制目录及其内容

用法: mv source target
	移动或重命名文件或目录（第二个参数如果是已存在的目录，则执行移动）

用法: tar [-cxzJvf] fileName fileName...
	打包、解包、压缩、解压文件
选项:
	-c --create    创建一个归档文件
	-x --extract   解包一个归档文件
	-z --gzip      使用 gzip 压缩/解压文件
  -J --xz        使用 xz 压缩/解压文件
	-v --verbose   显示每个文件名
	-f --file      指定归档文件名
	-C --directory 指定解包目录

用法: vi fileName
	vi 编辑器

用法: vim fileName
	vim 编辑器，功能比 vi 更强大
操作说明:
	i   		  命令模式->插入模式
	Esc 		  插入/底行模式->命令模式
	:  		  	命令模式->底行模式
	:w  		  保存
	:wq 		  保存并退出
	:q! 		  不保存并退出
	:q  		  退出
	:set nu 	显示行号
	:set nonu 取消显示行号
	:n 		    转到第 n 行
	gg 		    转到文件开头
	G 		    转到文件末尾
	dd  		  删除当前行
	ndd  		  删除 n 行
	u 		    撤销
	yy  		  复制当前行
	nyy  		  复制 n 行
	p 		    粘贴

用法: find dirName -option fileName
	在指定目录下查找文件
举例:
	find . -name "*.txt"
	find /usr/local -name "*.txt"

用法: grep [-inAB] word fileName
	在文件中查找指定单词
选项:
	-i --ignore-case 			忽略大小写
	-n --line-number  		打印匹配行号
	-A --after-context=n  打印匹配行及其 n 行后内容
	-B --before-context=n 打印匹配行及其 n 行前内容

用法: export varName=value
	设置环境变量

用法: source fileName
	执行指定脚本

用法: alternatives --install <link> <name> <path> <priority>
                  [--initscript <service>]
                  [--family <family>]
                  [--follower <follower_link> <follower_name> <follower_path>]*
      alternatives --remove <name> <path>
      alternatives --auto <name>
      alternatives --config <name>
      alternatives --display <name>
      alternatives --set <name> <path/family>
      alternatives --list
      alternatives --remove-all <name>
      alternatives --add-follower <name> <path> <follower_link> <follower_name> <follower_path>
      alternatives --remove-follower <name> <path> <follower_name>
	管理可执行文件链接
举例:
	alternatives --install /usr/bin/python python /usr/bin/python2.6 1
	alternatives --install /usr/bin/python python /usr/bin/python2.7 2
	alternatives --config python

用法: groupadd groupName
	创建新的用户组

用法: useradd [-option] userName
  创建新的用户
选项:
  -r --system      创建系统用户
  -g --gid GROUP   新用户主组的名称或 ID
  -s --shell SHELL 新用户使用的默认 shell

用法: chown [-R] [owner][:[group]] fileName
  修改文件所有者
选项:
  -R --recursive 递归操作文件和目录

用法: chmod [-R] mode fileName
  变更文件或目录的访问权限
选项:
  -R --recursive 递归操作目录
说明:
  mode 可以是符号或八进制数
  符号模式:
    使用 u（属主）、g（属组）、o（其它用户）、a（所有用户）来表示用户类型
    使用 +（增加权限）、-（取消权限）、=（唯一设定权限）来表示操作符
    使用 r（读）、w（写）、x（执行）来表示权限。
    例如: u+w 表示对属主用户增加写权限
  八进制模式:
    使用三位数字来表示权限，每位数字分别表示属主、属组和其它用户的权限。每个数字是相应权限位的数字和。
    例如: 755 表示将权限设为rwxr-xr-x，属主有读、写和执行权限，属组和其他用户有读和执行权限

用法: which commandName
	显示命令的绝对路径

用法: whereis commandName
	显示命令的绝对路径和所有可能的文件名

```
