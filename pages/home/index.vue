<!--
 * @Author: 山风
 * @Date: 2024-11-06 15:39:51
 * @LastEditTime: 2024-11-08 14:33:29
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/pages/home/index.vue
-->
<template>
  <view>
    <view>home</view>
  </view>
</template>

<script>
const app = getApp()
export default {
  data() {
    return {

    }
  },

  methods: {
    async onShow() {
      if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
        this.$scope.getTabBar().setData({
          selected: 0
        })
      }

      console.log(app.globalData)
      return
      if (!app.checkLogin()) {
        uni.showModal({
          content: '请先登录',
          success: (res) => {
            if (res.confirm) {
              app.doWxLogin().then((res) => {
                console.log(res)
              })
            }
          }
        })
      }
    },
  }
}
</script>

<style></style>