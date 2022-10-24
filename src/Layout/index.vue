<template>
  <Layout
    footer
    logo="https://www.vexipui.com/vexip-ui.svg"
    sign-name="Vexip UI"
    :user="user"
    :menu-props="{ router }"
    :config="[ 'nav', 'color']"
    :no-aside="!showAside"
    copyright="Vexip UI Layout - WhatFun"
  >
    <template #header-left>
      <div style="margin-right: 24px;">
        <transition name="vxp-fade">
          <Switch v-model:value="showAside" open-text="显示侧边栏" close-text="隐藏侧边栏"></Switch>
        </transition>
      </div>
    </template>
    <template #header-right>
     <ThemeSwitch />
    </template>
    <template #main>
      <div style="min-width: 100vh; height: 810px; ">
        <router-view></router-view>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">


const showAside = ref(true)
const user = {
  name: 'VexipUI',
  email: 'email@vexip-ui.com',
 
}
const router = useRouter()

// 模拟 push 方法
// router.push = async (to: RouteLocationRaw) => {
//   console.info(to)
// }
</script>

<style scoped>

</style>
