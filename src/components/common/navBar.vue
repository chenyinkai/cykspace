<template>
  <div class="nav">
    <div class="navBar" :class="{active: isNavBarShow}">
      <nav>
        <ul class="menu">
          <li class="menu-item">
            <router-link to="/">
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
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// eslint-disable-next-line
import solid from '@fortawesome/fontawesome-free-solid'
import eventBus from '../../util/eventBus'
export default {
  name: 'navBar',
  data() {
    return {
      isNavBarShow: false
    }
  },
  components: {
    FontAwesomeIcon
  },
  mounted() {
    eventBus.$on('isNavBarShow', state => {
      this.isNavBarShow = state
    })
  }
}
</script>

<style lang="less" scoped>
.navBar {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: -40px;
  z-index: 9;
  opacity: 0;
  transition: all .2s ease-in;
  &.active{
    top: 0;
    opacity: 1;
  }
  nav {
    width: 700px;
    margin: 0 auto;
  }
  .menu {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0;
    margin: 0;
    .menu-item {
      height: 100%;
      padding: 0 20px;
      line-height: 40px;
      cursor: pointer;
      a {
        color: #fff;
      }
      span {
        color: #fff;
      }
      &:hover{
        background-color: rgba(255, 255, 255, 1);
        transition: all .2s ease-in;
        a {
          color: #ccc;
        }
        span {
          color: #ccc;
        }
      }
    }
  }
}
@media screen and(max-width: 768px) {
  .navBar {
    nav {
      width: 90%;
      min-width: 350px;
    }
  }
}
</style>
