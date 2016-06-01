<template>
  <section class="page-home">
    <div class="page-home-header">
      <div class="page-home-toggle" :class="{ 'page-home-toggle--on': menuVisible }" @click="menuVisible = !menuVisible">
        <span></span>
      </div>
    </div>
    <ul class="page-home-list" :class="{ 'is-mobile': isMobile, 'page-home-list--active': menuVisible }">
      <li v-for="item in navs" class="page-home-listitem">
        <a :href="item.link" target="_blank">{{ item.name }}</a>
      </li>
    </ul>
    <div class="page-home-content" :class="{ 'page-home-content--drop': menuVisible }">
      <div class="page-home-jumbotron">
        <div class="page-home-logo" :class="{ 'logo-animate': logoAnimateReady }">
          <img src="./assets/mint-ui.svg" alt="">
          <p class="page-home-title">Mint UI</p>
          <p></p>
        </div>
        <p class="page-home-desc" :class="{ 'logo-animate': descAnimateReady }">基于 Vue.js 的移动端组件库</p>
        <div class="page-home-buttons">
          <a href="/docs" class="page-home-button" v-show="descAnimateReady" transition="enter" target="_blank">开始使用</a>
          <a href="/mint-ui" class="page-home-button" v-show="descAnimateReady" transition="enter" target="_blank">查看示例</a>
        </div>
        <div class="page-home-gitbtn">
          <iframe src="https://ghbtns.com/github-btn.html?user=mint-ui&repo=mint-ui&type=star&count=true" frameborder="0" scrolling="0" width="80px" height="20px" v-show="descAnimateReady" transition="enter"></iframe>
          <iframe src="https://ghbtns.com/github-btn.html?user=mint-ui&repo=mint-ui&type=fork&count=true" frameborder="0" scrolling="0" width="80px" height="20px" v-show="descAnimateReady" transition="enter"></iframe>
        </div>
      </div>
      <ul class="page-home-feature">
        <li>
          <i class="iconfont icon-zujian"></i>
          <span>Mint UI 包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。</span>
        </li>
        <li>
          <span>真正意义上的按需加载组件。可以只加载声明过的组件及其样式文件，无需再纠结文件体积过大。</span>
          <i class="iconfont icon-anxufufei"></i>
        </li>
        <li>
          <i class="iconfont icon-xingnengtongji"></i>
          <span>考虑到移动端的性能门槛，Mint UI 采用 CSS3 处理各种动效，避免浏览器进行不必要的重绘和重排，从而使用户获得流畅顺滑的体验。</span>
        </li>
        <li>
          <span>依托 Vue.js 高效的组件化方案，Mint UI 做到了轻量化。即使全部引入，压缩后的文件体积也仅有 100+ K。</span>
          <i class="iconfont icon-shiliangzhinengduixiang9"></i>
        </li>
      </ul>
      <footer class="page-home-footer">
        <a href="https://github.com/ElemeFE">© ElemeFE</a>
      </footer>
    </div>
  </section>
</template>

<style>
  @reset-global pc;

  @keyframes enter {
    0% {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
    100% {
      opacity: 1;
    }
  }

  .enter-transition {
    transition: opacity 2s, color .2s, background-color .2s;
  }

  .enter-enter,
  .enter-leave {
    opacity: 0;
  }

  html {
    font-size: 62.5%;
  }

  @component-namespace page {
    @component home {
      @descendent jumbotron {
        background-color: #F0FBF6;
        padding-bottom: 50px;
        position: relative;
        text-align: center;
      }

      @descendent header {
        display: none;
      }

      @descendent list {
        position: absolute;
        z-index: 10;
        top: 0;
        right: 80px;
      }

      @descendent listitem {
        display: inline-block;
        padding: 10px 5px;
        margin-left: 40px;
        & a {
          color: #18B971;
          cursor: pointer;
          transition: color .3s;
          &:hover {
            color: #99b960;
          }
        }
      }

      @descendent logo {
        height: 262px;
        padding-top: 40px;
        opacity: 0;
        img {
          width: 150px;
        }
        &.logo-animate {
           animation: enter .5s forwards;
        }
      }

      @descendent title {
        font-size: 4rem;
        color: #18B971;
      }

      @descendent desc {
        margin-top: 10px;
        font-size: 3rem;
        color: #18B971;
        opacity: 0;
        &.logo-animate {
          animation: enter .5s forwards;
        }
      }

      @descendent buttons {
        margin-top: 50px;
        height: 46px;
      }

      @descendent button {
        display: inline-block;
        color: #18B971;
        padding: 10px 40px;
        border: solid 2px #18B971;
        border-radius: 5px;
        font-size: 1.8rem;
        &:first-child {
          margin-right: 40px;
        }
        &:hover {
          color: #fff;
          background-color: #18B971;
        }
      }

      @descendent gitbtn {
        height: 25px;
        margin-top: 20px;
      }

      @descendent feature {
        width: 800px;
        margin: 20px auto 0;
        li {
          margin-bottom: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        li:nth-child(2n+1) {
          span {
            padding-left: 10px;
          }
        }
        i {
          vertical-align: middle;
          color: #18B971;
          font-size: 12rem;
          display: -webkit-box;
        }
        span {
          flex: 1;
          vertical-align: middle;
          font-size: 2rem;
          display: -webkit-box;
        }
      }

      @descendent footer {
        margin: 100px 0 30px;
        text-align: center;
        a {
          color: #6edcb2;
          transition: .3s;
          &:hover {
            color: #18B971;
          }
        }
      }
    }
  }

  @custom-media --medium-viewport (max-width: 500px);
  @media (--medium-viewport) {
    @reset-global mobile;
    html {
      font-size: 37.5%;
    }
    @component-namespace page {
      @component home {
        @descendent jumbotron {
          padding-bottom: 60px;
          position: relative;
        }

        @descendent header {
          display: block;
          height: 50px;
          background-color: #18B971;
          position: relative;
        }

        @descendent logo {
          height: auto;
        }

        @descendent toggle {
          position: absolute;
          width: 50px;
          height: 50px;
          top: 0;
          right: 10px;
          span {
            display: block;
            background-color: #F0FBF6;
            width: 30px;
            height: 2px;
            position: absolute;
            top: 23px;
            right: 10px;
            &::before,
            &::after {
              content: '';
              position: absolute;
              top: -10px;
              background-color: #F0FBF6;
              width: 30px;
              height: 2px;
              transform-origin: 0 50%;
            }
            &::after {
              top: auto;
              bottom: -10px;
            }
          }
          @modifier on {
            span {
              background-color: #18B971;
              right: 8px;
              &::before {
                 width: 34px;
                 top: -12px;
                 transform: rotate(45deg);
              }
              &::after {
                 width: 34px;
                 bottom: -12px;
                 transform: rotate(-45deg);
              }
            }
          }
        }

        @descendent list {
          @when mobile {
            background-color: #18B971;
            overflow: hidden;
            position: static;

            .page-home-listitem {
              border-top: solid 1px #189858;
              padding: 0 20px;
              margin-left: 0;
              display: block;
              height: 50px;
              line-height: 50px;
              a {
                color: #F0FBF6;
                display: block;
              }
            }
          }
        }

        @descendent content {
          position: absolute;
          width: 100%;
          transform: translate3d(0, -150px, 0);
          transition: .2s;
          @modifier drop {
            transform: translate3d(0, 0, 0);
          }
        }

        @descendent title {
          letter-spacing: normal;
        }

        @descendent button {
          padding: 10px 30px;
          font-size: 2.2rem;
          &:first-child {
            margin-right: 8%;
          }
        }

        @descendent feature {
          width: 80%;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import './font/iconfont.css';
  export default {
    name: 'app',

    data() {
      return {
        navs: [{
          name: 'Docs',
          link: '/docs'
        }, {
          name: 'Demos',
          link: '/mint-ui'
        }, {
          name: 'Github',
          link: 'https://github.com/mint-ui/mint-ui'
        }],
        isMobile: false,
        menuVisible: false,
        logoAnimateReady: false,
        descAnimateReady: false
      };
    },

    compiled() {
      this.logoAnimateReady = true;
      setTimeout(() => {
        this.descAnimateReady = true;
      }, 500);
      this.isMobile = document.body.clientWidth <= 500;
    }
  };
</script>
