<!-- Comment.vue -->
<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {inBrowser} from "vitepress";
import 'gitalk/dist/gitalk.css'
import Gitalk from "gitalk";

const commentRef = ref<HTMLElement | null>(null);

const init = () => {
  if (inBrowser) {
    const wrap = document.createElement("div");
    wrap.setAttribute("id", "gitalk-container");
    wrap.setAttribute("class", "gt-container");
    commentRef.value?.appendChild(wrap); // 把组件加入到想加载的地方 // querySelector的节点可自己根据自己想加载的地方设置
    const gitalk = new Gitalk({
      clientID: "Ov23lip8OJQfB9mDVWVD", // clientID
      clientSecret: "c33f4c5c69337a7811617563173cf0a3f7489d60", // clientSecret
      repo: "docs-comment", // GitHub repo
      owner: "focuest", // GitHub repository 所有者
      admin: ["focuest"], // GitHub repo 所有者
      id: location.pathname, // 可选。默认为 location.href
      labels: ["Gitalk"], // GitHub issue 标签
      proxy: "https://strong-caramel-969805.netlify.app/github_access_token",
      // createIssueManually: true, //如果当前页面没有相应的 issue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    });
    gitalk.render("gitalk-container");
  }
};

onMounted(() => {
  init();
});
</script>
<template>
  <div ref="commentRef"></div>
  <!--  <div id="gitalk-container" class="gt-container"></div>-->
</template>

<style lang="scss" scoped>
$gt-color-main: #3451b2; // gitalk 主题色
$gt-color-btn: #ffffff; // 按钮文字颜色

:deep(.gt-container) {
  a {
    color: $gt-color-main;

    &:hover {
      color: lighten($gt-color-main, 20%);
      border-color: lighten($gt-color-main, 20%);
    }
  }

  .gt-svg svg {
    fill: $gt-color-main;
  }

  .gt-spinner::before {
    border-color: $gt-color-btn;
    border-top-color: $gt-color-main;
  }

  .gt-btn {
    background-color: $gt-color-main;
    border-color: $gt-color-main;
    color: $gt-color-btn;

    &-login {
      &:hover {
        background-color: lighten($gt-color-main, 20%);
        border-color: lighten($gt-color-main, 20%);
      }
    }

    &-preview {
      background-color: $gt-color-btn;
      color: $gt-color-main;

      &:hover {
        background-color: darken($gt-color-btn, 5%);
        border-color: lighten($gt-color-main, 20%);
      }
    }

    &-public {
      &:hover {
        background-color: lighten($gt-color-main, 20%);
        border-color: lighten($gt-color-main, 20%);
      }
    }
  }

  .gt-link {
    border-bottom-color: $gt-color-main;
  }

  .gt-user .is--poping .gt-ico svg {
    fill: $gt-color-main;
  }

  .gt-popup .gt-action.is--active:before {
    background: $gt-color-main;
  }

  .gt-header-controls-tip {
    color: $gt-color-main;
  }

  .gt-comment-username {
    color: $gt-color-main;
  }

  .gt-header-textarea {
    color: #000;
  }
}
</style>
