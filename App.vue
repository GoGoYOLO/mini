<script>
const storage = require('./utils/storage.js')

export default {
	globalData: {
		system_info: {},
		position: {},
		user_info: {}
	},

	onLaunch: function () {
		this.getSystemInfo()
		this.getCurrentLocation()
		// this.getUserProfile()
	},


	methods: {
		checkLogin() {
			const userInfo = storage.getUserInfo()
			return !!userInfo
		},

		getSystemInfo() {
			const capsule = uni.getMenuButtonBoundingClientRect()
			uni.getSystemInfo({
				success: (res) => {
					this.globalData.system_info = {
						scrollTopHeight: capsule.bottom + capsule.top - res.statusBarHeight,
						statusBarHeight: res.statusBarHeight,
						winHeight: res.screenHeight,
						winWidth: res.screenWidth,
						windowWidth: res.windowWidth,
						capsuleTop: capsule.top,
						capsuleRight: capsule.width,
						capsuleHeight: +(capsule.top - res.statusBarHeight) * 2 + capsule.height,
						placeholderHeight: +(capsule.top - res.statusBarHeight) * 2 + capsule.height + res.statusBarHeight,
						toBar: res.platform == 'android' ? 48 : 44,
						platform: res.platform,
						paddingBottom: res.screenHeight - res.safeArea.bottom,
						navBarHeight: res.platform == 'android' ? 48 : 44 + res.statusBarHeight
					}
				},
				fail: (err) => {
					console.error(err)
				},
			})
		},

		getCurrentLocation() {
			const that = this
			return new Promise((resolve, reject) => {
				uni.getSetting({
					success: (res) => {
						if (!Reflect.has(res.authSetting, 'scope.userLocation')) {
							uni.getLocation({
								type: 'gcj02',
								altitude: false,
								success: async (result) => {
									this.globalData.position = {
										latitude: +result.latitude,
										longitude: +result.longitude,
									}
								},
								fail: (err) => {
									resolve()
								},
							})
						} else {
							resolve()
						}
					}
				})
			})
		},

		doWxLogin() {
			const that = this
			return new Promise((resolve, reject) => {
				uni.getUserProfile({
					desc: '用于完善会员资料',
					success: (dataRes) => {
						uni.showLoading({
							title: '登录中...',
						})
						console.log(dataRes)
						return dataRes
					},
					complete: function (err) {
						console.log(err)
					}
				})
			})
		}
	}
}
</script>

<style>
@import "./style/index.css";
</style>
