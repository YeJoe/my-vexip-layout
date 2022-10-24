<template>
    <div style="padding: 20px 0;">
      <Switch v-model:value="isDark" class="theme-switch" :open-icon="Moon" :close-icon="Sun"></Switch>
    </div>
  </template>
  
  <script setup lang="ts">
  

  import { ref, watch } from 'vue'
  import { Sun, Moon } from '@vexip-ui/icons'
  
  const rootCls = document.documentElement.classList
  const isDark = ref(false)
  
  if (isDark.value) {
    rootCls.add('dark')
  }
  
  watch(isDark, value => {
    value ? rootCls.add('dark') : rootCls.remove('dark')
  })
  </script>
  
  <style>
  body {
    color: var(--vxp-content-color-base);
    background-color: var(--vxp-bg-color-base);
    transition: var(--vxp-transition-color), var(--vxp-transition-background);
  }
  
  .theme-switch {
    border: 1px solid var(--vxp-border-color-base);
    margin-right: 20px;
  }
  
  html.dark .theme-switch {
    --vxp-switch-bg-color-open: #{rgba(#fff, 0.05)};
    --vxp-switch-signal-bg-color: #000;
    --vxp-switch-icon-color: var(--vxp-content-color-secondary);
    --vxp-switch-shadow-focus: unset;
  }
  </style>
  