import { MarkdownRenderer } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import nav from "./config/nav.mts";
import sidebar from "./config/sidebar.mts";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: "zh-CN",
  title: "focuest的主页",
  description: "A Personal Blog",
  base: "/blog/",
  head: [
    [
      "script",
      {},
      `
      window._hmt = window._hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?7baffa4c26e7a88fa839762fc5bf4706";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
    ["link", { rel: "icon", href: "/blog/favicon.ico" }],
    // 大图预览插件资源
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    outline: { label: "目录", level: [2, 3] },
    socialLinks: [{ icon: "github", link: "https://github.com/focuest/blog" }],
    logo: {
      src: "/image/home/logo.svg",
      width: "24px",
      height: "24px",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            displayDetails: "展开详情",
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    footer: {
      message: "玩命更新中...",
      copyright: `版权所有 © 2024-2022-${new Date().getFullYear()} focuest`,
    },
    editLink: {
      pattern: "https://github.com/focuest/blog/edit/main/docs/:path",
      text: "有错误？帮我修正",
    },
    returnToTopLabel: "返回顶部",
  },
  markdown: {
    container: {
      detailsLabel: "显示代码",
      tipLabel: "提示",
      infoLabel: "参考",
    },
    lineNumbers: true,
    theme: "material-theme-palenight",
    config: (md) => {
      // 大图预览插件配置
      md.use(MdCustomAttrPlugin, "image", { "data-fancybox": "gallery" });
    },
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
});

// markdown 添加自定义属性(特定的type)
function MdCustomAttrPlugin(
  md: MarkdownRenderer,
  type: string,
  mdOptions: object
) {
  const defaultRenderer = md.renderer.rules[type];

  if (defaultRenderer) {
    md.renderer.rules[type] = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      if (mdOptions) {
        for (let i in mdOptions) {
          token.attrSet(i, mdOptions[i]);
        }
      }
      return defaultRenderer(tokens, idx, options, env, self);
    };
  }
}
