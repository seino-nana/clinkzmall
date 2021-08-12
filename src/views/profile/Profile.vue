<template>
  <div id="profile">
    <nav-bar class="profile-nav"><div slot="center">我的信息</div></nav-bar>
    <profile-header/>
    <profile-info/>
    <profile-list-view/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import ProfileHeader from '@/views/profile/childcpns/ProfileHeader'
import ProfileInfo from '@/views/profile/childcpns/ProfileInfo'
import ProfileListView from '@/views/profile/childcpns/ProfileListView'

export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileHeader,
    ProfileInfo,
    ProfileListView
  },
}
</script>

<style scoped>
.profile-nav {

    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: var(--color-tint);
}
</style>