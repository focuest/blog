export default {
  "/misc/": getMisc(),
  "/harmonyos/": getHarmonyOS(),
  "/frontend/": getFrontend(),
  "/java/": getJava(),
};

function getHarmonyOS() {
  return [
    {
      text: "开始",
      collapsed: true,
      base: "/harmonyos/getstarted/",
      items: [
        { text: "介绍", link: "introduce" },
        { text: "Web 开发者转 HarmonyOS", link: "web-developer" },
      ],
    },
    {
      text: "项目实战",
      collapsed: true,
      base: "/harmonyos/project/",
      items: [
        { text: "log插件的使用与axios的基本封装", link: "log-and-axios" },
      ],
    },
  ];
}

function getFrontend() {
  return [
    {
      text: "开始",
      collapsed: true,
      base: "/frontend/getstarted/",
      items: [
        { text: "学习路线", link: "roadmap" },
        { text: "官方网站汇总", link: "website" },
        { text: "VS Code使用", link: "vscode" },
      ],
    },
    {
      text: "Vue3",
      collapsed: true,
      base: "/frontend/vue3/",
      items: [
        { text: "项目准备", link: "project-prepare" },
        { text: "项目实战", link: "project" },
      ],
    },
  ];
}

function getJava() {
  return [
    {
      text: "开始",
      collapsed: true,
      base: "/java/getstarted/",
      items: [{ text: "学习路线", link: "roadmap" }],
    },
    {
      text: "JavaWeb",
      collapsed: true,
      base: "/java/javaweb/",
      items: [{ text: "学习路线", link: "roadmap" }],
    },
    {
      text: "Linux",
      collapsed: true,
      base: "/java/linux/",
      items: [
        { text: "介绍", link: "introduce" },
        { text: "安装 JDK", link: "install-jdk" },
        { text: "安装 MySQL", link: "install-mysql" },
      ],
    },
  ];
}

function getMisc() {
  return [
    {
      text: "示例",
      collapsed: true,
      base: "/misc/examples/",
      items: [
        { text: "Markdown 示例", link: "markdown-examples" },
        { text: "Runtime API 示例", link: "api-examples" },
      ],
    },
    { text: "个人博客搭建", link: "/misc/blog-build" },
  ];
}
