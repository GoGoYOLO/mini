<!--
 * @Author: 山风
 * @Date: 2024-11-06 16:16:50
 * @LastEditTime: 2024-11-07 10:57:20
 * @LastEditors: 山风
 * @Description: 
 * @FilePath: /mini_uni/components/CustomTabbar/index.vue
-->
<template>
  <view class="tabbar">
    <view v-for="(item, index) in tabbar_list" :key="index" class="tabbar-item" @tap="switchTab(index)">
      <view :class="select_index === index ? 'theme' : ''">{{ item.text }}{{ select_index }}{{ index }}</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabbar_list: [{
        icon: '/static/images/tabbar/menu-home-def.png',
        activeIcon: '/static/images/tabbar/menu-home.png',
        text: '列表',
        url: '/pages/home/index',
        name: 'home'
      }, {
        icon: '/static/images/tabbar/menu-mine-def.png',
        activeIcon: '/static/images/tabbar/menu-mine.png',
        text: '我的',
        url: '/pages/mine/index',
        name: 'mine'
      }],
      select_index: 0,
    }
  },
  methods: {
    switchTab(index) {
      this.select_index = index
      console.log('select_index:' + this.select_index)
      uni.switchTab({
        url: this.tabbar_list[index].url,
        complete: function(err) {
          console.log(err)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar {
  width: 100vw;
  line-height: 90rpx;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-bottom: calc(10rpx + env(safe-area-inset-bottom));
  border-top: 2rpx solid #f0f0f0;
}

.tabbar-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  text {
    padding: 5px;
    font-size: 14px;
    color: #333;

    &:active {
      color: #09BB07;
    }
  }
}
</style>