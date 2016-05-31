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
        <p class="page-home-desc" :class="{ 'logo-animate': descAnimateReady }">基于 vue.js 的移动端组件库</p>
        <div class="page-home-buttons">
          <a href="/docs" class="page-home-button" v-show="descAnimateReady" transition="enter" target="_blank">开始使用</a>
          <a href="/mint-ui" class="page-home-button" v-show="descAnimateReady" transition="enter" target="_blank">查看示例</a>
        </div>
        <div class="page-home-gitbtn">
          <iframe src="https://ghbtns.com/github-btn.html?user=mint-ui&repo=mint-ui&type=star&count=true" frameborder="0" scrolling="0" width="80px" height="20px" v-show="descAnimateReady" transition="enter"></iframe>
          <iframe src="https://ghbtns.com/github-btn.html?user=mint-ui&repo=mint-ui&type=fork&count=true" frameborder="0" scrolling="0" width="80px" height="20px" v-show="descAnimateReady" transition="enter"></iframe>
        </div>
      </div>
      <ul>
        <li>mint-ui 包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。</li>
        <li>考虑到移动端的性能门槛，mint-ui 采用 CSS3 处理各种动效，避免浏览器进行不必要的重绘和重排，从而使用户获得流畅顺滑的体验。</li>
        <li></li>
      </ul>
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
        background-color: #26a2ff;
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
          color: #fff;
          cursor: pointer;
          transition: color .5s;
          &:hover {
            color: rgb(209, 255, 110);
          }
        }
      }

      @descendent logo {
        height: 314px;
        padding-top: 40px;
        opacity: 0;
        &.logo-animate {
           animation: enter .5s forwards;
        }
      }

      @descendent title {
        font-size: 6rem;
        color: #fff;
      }

      @descendent desc {
        margin-top: 10px;
        font-size: 4rem;
        color: #fff;
        opacity: 0;
        &.logo-animate {
          animation: enter .5s forwards;
        }
      }

      @descendent buttons {
        margin-top: 60px;
        height: 46px;
      }

      @descendent button {
        display: inline-block;
        color: #fff;
        padding: 10px 40px;
        border: solid 2px #fff;
        border-radius: 5px;
        font-size: 1.8rem;
        &:first-child {
          margin-right: 40px;
        }
        &:hover {
          color: #248cff;
          background-color: #fff;
        }
      }

      @descendent gitbtn {
        height: 25px;
        margin-top: 20px;
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
          padding-bottom: 100px;
          position: relative;
        }

        @descendent header {
          display: block;
          height: 50px;
          background-color: #2586dd;
          position: relative;
        }

        @descendent toggle {
          position: absolute;
          width: 50px;
          height: 50px;
          top: 0;
          right: 10px;
          span {
            display: block;
            background-color: #fff;
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
              background-color: #fff;
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
              background-color: #2586dd;
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
            background-color: #2586dd;
            overflow: hidden;
            position: static;

            .page-home-listitem {
              border-top: solid 1px #1c7fc6;
              padding: 0 20px;
              margin-left: 0;
              display: block;
              height: 50px;
              line-height: 50px;
              a {
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
      }
    }
  }
</style>

<script type="text/babel">
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
      this.isMobile = document.body.clientWidth <= 500;
      let logoImage = new Image();
      logoImage.src = 'src/assets/mint-ui.svg';
      logoImage.addEventListener('load', () => {
        this.logoAnimateReady = true;
        setTimeout(() => {
          this.descAnimateReady = true;
        }, 500);
      });
    }
  };
</script>
