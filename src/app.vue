<template>
  <router-view></router-view>
</template>

<style>
  @import "./style/theme-blue.css";

  @reset-global pc;

  .msgbox {
    max-width: 400px;
  }
  .msgbox p {
    line-height: 1.2;
  }

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

  body {
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

      @descendent lang {
        margin-top: 20px;
        height: 16px;
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
        padding: 10px;
        width: 200px;
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
          margin-top: 25px;
          &:first-child {
            margin-top: 0;
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
    name: 'app'
  };
</script>
