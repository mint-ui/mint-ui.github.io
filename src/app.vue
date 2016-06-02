<template>
  <section class="page-home">
    <div class="page-home-content">
      <div class="page-home-jumbotron">
        <div class="page-home-logo" :class="{ 'logo-animate': logoAnimateReady }">
          <img src="./assets/mint-ui.svg" alt="">
          <p class="page-home-title">Mint UI</p>
          <p></p>
        </div>
        <p class="page-home-desc" :class="{ 'logo-animate': descAnimateReady }">基于 Vue.js 的移动端组件库</p>
        <div class="page-home-buttons">
          <a href="/docs" class="page-home-button" v-show="descAnimateReady" transition="enter" target="_blank"><span>开始使用</span></a>
          <a href="/mint-ui" class="page-home-button" v-show="descAnimateReady" transition="enter" target="_blank"><span>查看示例</span></a>
        </div>
        <div class="page-home-gitbtn">
          <iframe src="https://ghbtns.com/github-btn.html?user=mint-ui&repo=mint-ui&type=star&count=true" frameborder="0" scrolling="0" width="80px" height="20px" v-show="descAnimateReady" transition="enter"></iframe>
          <iframe src="https://ghbtns.com/github-btn.html?user=mint-ui&repo=mint-ui&type=fork&count=true" frameborder="0" scrolling="0" width="80px" height="20px" v-show="descAnimateReady" transition="enter"></iframe>
        </div>
      </div>

      <p class="page-home-sector">快速开始</p>
      <div class="page-home-start" :style="{ 'width': smallScreen ? '90%' : '650px' }">
        <code>
          <span class="page-home-comment">// 引入全部组件</span>
          <span>
            <span class="pl-k">import </span><span class="pl-smi">Vue </span><span class="pl-k">from </span><span class="pl-s">'vue'</span><span class="pl-smi">;</span>
          </span>
          <span>
            <span class="pl-k">import </span><span class="pl-smi">Mint </span><span class="pl-k">from </span><span class="pl-s">'mint-ui'</span><span class="pl-smi">;</span>
          </span>
          <span>
            <span class="pl-smi">Vue.</span><span class="pl-en">use</span><span class="pl-smi">(Mint);</span>
          </span>
        </code>
        <code>
          <span class="page-home-comment">// 按需引入部分组件</span>
          <span>
            <span class="pl-k">import </span><span class="pl-smi">{ Cell, Checklist } </span><span class="pl-k">from </span><span class="pl-s">'minu-ui'</span><span class="pl-smi">;</span>
            </span>
          <span>
            <span class="pl-smi">Vue.</span><span class="pl-en">component</span><span class="pl-smi">(Cell.name, Cell);</span>
          </span>
          <span>
            <span class="pl-smi">Vue.</span><span class="pl-en">component</span><span class="pl-smi">(Checklist.name, Checklist);</span>
        </code>
      </div>

      <p class="page-home-sector page-home-sector--dark">特性介绍</p>
      <div class="page-home-show">
        <div class="page-home-left">
          <ul class="page-home-feature" :style="{ 'width': smallScreen ? '100%' : '650px' }">
            <li>
              <i class="iconfont icon-zujian"></i>
              <span>Mint UI 包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。</span>
            </li>
            <li>
              <i class="iconfont icon-anxufufei"></i>
              <span>真正意义上的按需加载组件。可以只加载声明过的组件及其样式文件，无需再纠结文件体积过大。</span>
            </li>
            <li>
              <i class="iconfont icon-xingnengtongji"></i>
              <span>考虑到移动端的性能门槛，Mint UI 采用 CSS3 处理各种动效，避免浏览器进行不必要的重绘和重排，从而使用户获得流畅顺滑的体验。</span>
            </li>
            <li>
              <i class="iconfont icon-shiliangzhinengduixiang9"></i>
              <span>依托 Vue.js 高效的组件化方案，Mint UI 做到了轻量化。即使全部引入，压缩后的文件体积也仅有 100+ K。</span>
            </li>
          </ul>

          <div class="page-home-qrcode">
            <img src="./assets/qrcode.svg" alt="">
          </div>
        </div>

        <div class="page-home-phone" v-if="!smallScreen">
          <iframe src="//mint-ui.github.io/mint-ui" frameborder="0"></iframe>
        </div>
      </div>

      <footer class="page-home-footer">
        <a href="https://github.com/ElemeFE">© ElemeFE</a>
      </footer>
    </div>
  </section>
</template>

<style>
  @import "./style/theme-blue.css";
  
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
    font-family: "Helvetica Neue", "Microsoft Yahei", sans-serif;
  }

  @component-namespace page {
    @component home {
      @descendent jumbotron {
        background-color: var(--color-background);
        padding-bottom: 30px;
        position: relative;
        text-align: center;
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
        margin-top: 10px;
        font-size: 30px;
        color: var(--color-text);
      }

      @descendent desc {
        margin-top: 10px;
        font-size: 20px;
        color: var(--color-text);
        opacity: 0;
        &.logo-animate {
          animation: enter .5s forwards;
        }
      }

      @descendent buttons {
        margin: 30px 0;
        height: 46px;
      }

      @descendent button {
        display: inline-block;
        color: var(--color-text);
        padding: 10px 40px;
        border: solid 2px var(--color-text);
        border-radius: 5px;
        font-size: 18px;
        &:first-child {
          margin-right: 40px;
        }
        &:hover {
          color: #fff;
          background-color: var(--color-text);
        }
      }

      @descendent gitbtn {
        height: 25px;
        margin-top: 20px;
      }

      @descendent qrcode {
        text-align: center;
        margin-top: 40px;
        img {
          width: 250px;
        }
      }

      @descendent sector {
        margin-top: 40px;
        font-size: 20px;
        color: var(--color-text);
        text-align: center;
        @modifier dark {
          padding-top: 20px;
        }
      }

      @descendent start {
        margin: 40px auto 60px;
        background-color: #f8f8f8;
        border-radius: 8px;
        border: solid 1px #ddd;
        padding: 15px;
        code {
          display: block;
          &:first-child {
            margin-bottom: 25px;
          }
          & > span {
            display: block;
            line-height: 20px;
            &.page-home-comment {
              color: #969896;
            }
          }
        }
        .pl-smi {
          color: #333;
        }
        .pl-k {
          color: #a71d5d;
        }
        .pl-s {
          color: #183691;
        }
        .pl-en {
          color: #795da3;
        }
      }

      @descendent show {
        margin: 0 auto;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @descendent left {
        margin-right: 40px;
      }

      @descendent feature {
        display: inline-block;
        li {
          color: #333;
          margin-bottom: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        i {
          vertical-align: middle;
          color: var(--color-text);
          font-size: 80px;
          display: -webkit-box;
        }
        span {
          flex: 1;
          padding-left: 20px;
          line-height: 1.6;
          vertical-align: middle;
          font-size: 16px;
          display: -webkit-box;
        }
      }

      @descendent phone {
        min-width: 350px;
        display: inline-block;
        width: 350px;
        height: 760px;
        background: url('./assets/phone.png') no-repeat;
        background-size: cover;
        padding: 100px 12px 100px;
        iframe {
          width: 100%;
          height: 100%;
        }
      }

      @descendent footer {
        margin: 60px 0 20px;
        text-align: center;
        a {
          color: var(--color-footer);
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
          padding-bottom: 30px;
          position: relative;
        }

        @descendent logo {
          height: auto;
        }

        @descendent content {
          position: absolute;
          width: 100%;
        }

        @descendent title {
          font-size: 24px;
        }

        @descendent desc {
          font-size: 18px;
        }

        @descendent buttons {
          margin: 30px auto;
          width: 90%;
          display: flex;
          justify-content: space-between;
        }

        @descendent button {
          display: -webkit-box;
          line-height: 24px;
          padding: 10px 0;
          width: 45%;
          text-align: center;
          font-size: 14px;
          &:first-child {
            margin-right: 0;
          }
          span {
            display: block;
            width: 100%;
            text-align: center;
          }
        }

        @descendent left {
          margin-right: 0;
          width: 90%;
        }

        @descendent feature {
          span {
            font-size: 14px;
          }
        }

        @descendent qrcode {
          display: none;
        }

        @descendent start {
          width: 90%;
        }

        @descendent phone {
          display: none;
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
        smallScreen: true,
        isMobile: false,
        logoAnimateReady: false,
        descAnimateReady: false
      };
    },

    methods: {
      handleResize() {
        this.smallScreen = document.body.clientWidth <= 650;
      }
    },

    compiled() {
      this.logoAnimateReady = true;
      setTimeout(() => {
        this.descAnimateReady = true;
      }, 500);
      this.handleResize();
      window.addEventListener('resize', () => {
        this.handleResize();
      });
      this.isMobile = document.body.clientWidth <= 500;
    },

    beforeDestroy() {
      window.removeEventListener('resize', () => {
        this.handleResize();
      });
    }
  };
</script>
