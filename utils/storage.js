export const getUserInfo = () => {
  try {
      var value = uni.getStorageSync('userInfo');
      if (value) {
          return value;
      } else {
          return null;
      }
  } catch (e) {
      console.log(e);
      return null;
  }
};