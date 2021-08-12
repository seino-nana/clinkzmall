<template>
  <div class="profile-header">
    <div class='avatar'>
      <img src="@/assets/img/profile/avatar.png"/>
    </div>
  <div class='login-info'>
    <div class='login'>登录/注册</div>
    <div class='phone'>
      <img src="@/assets/img/profile/phone.png"/>
      暂无绑定手机号
    </div>
  </div>
  <div class='arrow'>
    <img src="@/assets/img/common/arrow-right.png"/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader'
}
</script>

<style scoped>
.profile-header {
  position: relative;
  display: flex;
  background: var(--color-tint);
  height: 85px;
  padding: 6px 15px;
  color: #fff;
}

.avatar img {
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: #f2f2f2;
  vertical-align: middle;
}

.login-info {
  vertical-align: middle;
  margin-left: 15px;
}

.login-info .login {
  font-size: 18px;
  margin-top: 9px;
}

.login-info .phone {
  font-size: 14px;
  margin-top: 5px;
}

.phone img {
  width: 18px;
  height: 15px;
  vertical-align: middle;
  position: relative;
  bottom: 2px;
}

.arrow {
  position: absolute;
  right: 15px;
  margin-top: 15px;
}

.arrow img {
  width: 30px;
  height: 30px;
}
</style>