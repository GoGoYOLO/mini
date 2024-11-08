Component({
	data: {
		selected: 0,
		color: '#666',
		selectedColor: '#FF7A00',
		list: [
			{
				pagePath: '/pages/home/index',
				iconPath: '/static/image/tabbar/menu-home-def.png',
				selectedIconPath: '/static/image/tabbar/menu-home.png',
				text: '首页'
			},
			{
				pagePath: '/pages/mine/index',
				iconPath: '/static/image/tabbar/menu-mine-def.png',
				selectedIconPath: '/static/image/tabbar/menu-mine.png',
				text: '我的'
			}
		]
	},

	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			if (data.index === this.data.selected) {
				return
			}
			const url = data.path
			wx.switchTab({ url })
			this.setData({
				selected: data.index
			})
		}
	}
})