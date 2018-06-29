<template>
  <div class="about">
    <main>
      <div class="main-inner">
        <div class="content">
          <div class="post-extend">
            <div class="post-body">
              <blockquote class="blockquote-center">
                <div class="avatars">
                  <img src="../assets/avatars.jpeg" alt="">
                </div>
                <h2 class="title">善良的乌贼</h2>
                <div class="subtitle">请不要假装很努力,因为结果不会陪你演戏。</div>
                <div class="links">
                  <div class="links-title">
                    社交与联系
                  </div>
                  <div class="link">
                    <a href="https://github.com/chenyinkai">
                      <font-awesome-icon :icon="['fab', 'github']" /> Github
                    </a>
                    <a href="https://juejin.im/user/598829876fb9a03c5754c6fe">
                      <font-awesome-icon :icon="['fas', 'paper-plane']" /> 掘金
                    </a>
                    <a href="https://segmentfault.com/u/chenyinkai">
                      <font-awesome-icon :icon="['fas', 'comment']" /> segmentfault
                    </a>
                    <br>
                    <a href="mailto: chenyinkai0223@foxmail.com">
                      <font-awesome-icon :icon="['fas', 'envelope']" /> 邮箱：chenyinkai0223@foxmail.com
                    </a>
                    <br>
                    <a href="javascript:;">
                      <font-awesome-icon :icon="['fab', 'qq']" /> 287696322
                    </a>
                  </div>
                </div>
              </blockquote>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// eslint-disable-next-line
import brands from '@fortawesome/fontawesome-free-brands'
export default {
  name: 'about',
  data() {
    return {
      msg: 'about'
    }
  },
  mounted() {
    document.title = '关于-博客-善良的乌贼'
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="less" scoped>
.post-body {
  padding-top: 40px;
  position: relative;
  top: -10px;
  opacity: 0;
  animation: down 0.5s 0.5s linear;
  animation-fill-mode: both;
}
blockquote {
  position: relative;
  margin: 40px 0;
  text-align: center;
  &::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 24px;
    opacity: 0.2;
    background: url(../assets/quote-l.svg) 0 -2px no-repeat;
    background-size: 22px 22px;
    top: -20px;
    border-top: 1px solid #ccc;
  }
  &::after {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 24px;
    opacity: 0.2;
    background: url(../assets/quote-r.svg) 100% 4px no-repeat;
    background-size: 22px 22px;
    bottom: -20px;
    border-bottom: 1px solid #ccc;
  }
}
hr {
  margin: 40px 0;
  height: 3px;
  border: none;
  background-color: #ddd;
  background-image: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 4px,
    transparent 4px,
    transparent 8px
  );
}
.avatars img {
  display: block;
  margin: 0 auto;
  padding: 2px;
  max-width: 115px;
  height: auto;
  border: 2px solid #eee;
}
.subtitle {
  margin-bottom: 10px;
}
.links-title {
  font-size: 16px;
  margin-bottom: 10px;
}
.link a {
  padding: 0 20px;
  line-height: 2;
}
</style>
