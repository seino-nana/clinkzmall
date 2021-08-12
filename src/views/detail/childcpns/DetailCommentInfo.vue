<template>
  <div class="commentinfo" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-hd">
      <div class="title">用户评价</div>
      <div class="more">更多>></div>
    </div>
    <div class="comment-bd">
      <div class="user">
        <img class="avatar" :src="commentInfo.user.avatar">
        <span class="username">{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment">{{commentInfo.content}}</div>
      <div class="other-info">
        <span class="created">{{commentInfo.created | showDate}}</span>
        <span class="style">{{commentInfo.style}}</span>
      </div>
      <div class="info-images" v-if="commentInfo.images">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailCommentInfo',
  filters: {
    showDate(value) {
      // 1.将时间戳转成Date对象
      const date = new Date(value * 1000);

      // 2.将date进行格式化
      
    }
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  
}
</script>

<style>
.commentinfo {
  padding: 25px 15px;
  border-bottom: 6px solid #f2f2f2;
}

.comment-hd {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.user {
  padding: 15px 0;
}

.avatar {
  width: 42px;
  height: 42px;
  vertical-align: middle;
  border-radius: 50%;
}

.username {
  padding-left: 8px;
  font-size: 16px;
  color: #666;
}

.comment {
  font-size: 14px;
  /* 首行缩进 */
  text-indent: 1.5em;
  /* 行高 */
  line-height: 1.5;
}

.other-info {
  padding:15px 0;
  font-size: 14px;
}

.style {
  padding-left: 6px;
}

.info-images img {
  width: 70px;
  height: 70px;
  padding-right: 5px;
}
</style>