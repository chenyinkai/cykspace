<template>
  <div class="headerBar">
    <header :style="{background:'url('+backgroundImage+')'}">
      <div class="header-inner">
        <div class="auther">
          <div>
            <a href="/" class="brand">
              <span class="site-title">善良的乌贼</span>
            </a>
          </div>
        </div>
        <nav>
          <ul class="menu">
            <li class="menu-item">
              <router-link to="/index">
                <font-awesome-icon :icon="['fas', 'home']" />
                <span>首页</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/tags">
                <font-awesome-icon :icon="['fas', 'tags']" />
                <span>标签</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/archives">
                <font-awesome-icon :icon="['fas', 'archive']" />
                <span>归档</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/about">
                <font-awesome-icon :icon="['fas', 'user']" />
                <span>关于</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// eslint-disable-next-line
import solid from '@fortawesome/fontawesome-free-solid'
export default {
  name: 'headerBar',
  data() {
    return {
      backgroundImage: require('../../assets/header-bg.jpg'),
      msg: 'headerBar'
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 325px;
  .header-inner {
    margin: 0 auto;
    padding: 100px 0 70px;
    width: 700px;
    height: 100%;
    position: relative;
  }
  .auther {
    text-align: center;
    color: #fff;
    font-size: 30px;
  }
  .brand {
    position: relative;
    display: inline-block;
    padding: 0 80px;
    line-height: 36px;
  }
  .site-title {
    position: relative;
    top: -50px;
    opacity: 0;
    display: inline-block;
    vertical-align: top;
    line-height: 56px;
    color: #f5f5f5;
    font-weight: normal;
    animation: down 0.2s linear;
    animation-fill-mode: both;
  }
  .menu {
    margin: 20px auto 0;
    background: rgba(255, 255, 255, 0.65);
    width: 450px;
    height: 64px;
    display: flex;
    padding: 10px 50px;
    .menu-item {
      flex: 1;
    }
    a {
      color: #333;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      position: relative;
      top: -30px;
      opacity: 0;
      animation: down 0.3s 0.2s linear;
      animation-fill-mode: both;
      svg {
        opacity: 0.8;
      }
      span {
        position: relative;
        opacity: 0.8;
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -5px;
          left: 0;
          background-color: #333;
          visibility: hidden;
          transform: scaleX(0);
          transition: all .2s ease-in-out;
        }
      }
      &:hover {
        svg {
          opacity: 1;
        }
        span {
          opacity: 1;
          &::before {
            visibility: visible;
            transform: scaleX(1);
          }
        }
      }
    }
  }
  .menu-small {
    position: absolute;
    top: 10px;
    left: 10px;
    opacity: 0;
  }
}
@media screen and(max-width: 768px) {
  header {
    min-width: 350px;
    height: 260px;
    .header-inner {
      width: auto;
    }
    nav {
      width: 80%;
      margin: 0 auto;
      .menu {
        width: 100%;
      }
    }
  }
}
</style>
