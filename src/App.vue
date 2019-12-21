<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
/*
+----------------------------------------------
|  _     _____ _ _ ____    _   _ _____ _____ 
| | |   |  ___/ / |___ \  | \ | | ____|_   _|
| | |   | |_  | | | __) | |  \| |  _|   | |  
| | |___|  _| | | |/ __/ _| |\  | |___  | |  
| |_____|_|   |_|_|_____(_)_| \_|_____| |_|  
|
| Do you say now or never Or never too late?
+----------------------------------------------
| Made with love by LF112 [https://lf112.net]
| Author: LF112
| ⚡Email: lf@lf112.net / QQ: 2275203821
| ⭐️GitHUB.com/LF112 | Twitter.com/LF_Futiwolf
+----------------------------------------------
*/
*,
body,
html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    background: 0 0;
    word-wrap: break-word;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    font-family: Titillium Web, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, sans-serif
}

a {
    text-decoration: none;
    cursor: pointer;
    color: #F2F2F2;
}

ul {
    list-style: none;
}

ul li {
    font-size: 14px;
    line-height: 1.8;
}

body {
    position: relative;
    background: #323639;
    background-size: cover;
}

.Ribbon {
    position: absolute;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, rgba(119, 119, 119, 0.2), rgba(72, 72, 72, 0.2), rgba(103, 103, 103, 0.2), rgba(60, 60, 60, 0.2));
}

.Tip::after {
    background: rgba(79, 89, 95, 0.4);
    border-radius: 2px;
    bottom: 100%;
    color: #fff;
    content: attr(data-tooltip);
    display: block;
    font-size: .7rem;
    left: 50%;
    max-width: 320px;
    opacity: 0;
    overflow: hidden;
    font-weight: lighter;
    padding: 2px 5px;
    line-height: 20px;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    transform: translate(-50%, .4rem);
    transition: opacity .2s, transform .2s;
    white-space: pre;
    z-index: 300;
}

.Tip:focus::after,
.Tip:hover::after {
    opacity: 1;
    transform: translate(-50%, -.2rem)
}
::-webkit-scrollbar {
    background: rgba(0, 0, 0, .05);
    width: 6px;
    height: 6px;
    -webkit-appearance: none;
    border-radius: 6px;
}

::-webkit-scrollbar-button,
 ::-webkit-scrollbar-corner,
 ::-webkit-scrollbar-track,
 ::-webkit-scrollbar-track-piece {
    background: transparent;
    display: none;
}

::-webkit-scrollbar-button,
 ::-webkit-scrollbar-corner,
 ::-webkit-scrollbar-track,
 ::-webkit-scrollbar-track-piece {
    background: transparent;
    display: none;
}

::-webkit-scrollbar-thumb {
    width: 4px;
    height: 4px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, .2);
}

::-webkit-scrollbar-button,
 ::-webkit-scrollbar-corner,
 ::-webkit-scrollbar-track,
 ::-webkit-scrollbar-track-piece {
    background: transparent;
    display: none;
}

::-webkit-scrollbar-button,
 ::-webkit-scrollbar-corner,
 ::-webkit-scrollbar-track,
 ::-webkit-scrollbar-track-piece {
    background: transparent;
    display: none;
}

::selection {
    background: #b2b8c1;
    color: #0bf;
}
</style>
