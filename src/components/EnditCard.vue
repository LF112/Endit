<template>
    <div class="Endit_Card">
        <img class="Pic" v-bind:src="pic">
        <div class="Time">
            <div>
                <p>{{ date }}</p>
                <svg aria-hidden="true"><use xlink:href="#Endit_repo"></use></svg>
            </div>
        </div>
        <div class="Repo">
            <div>
                <h2>{{ star }}</h2>
                <p>Github, star</p>
            </div>
        </div>
        <div class="Sidebar">
            <div class="Hea">
                <div>
                    <p class="Title">{{ repo_name }}</p>
                    <div></div>
                </div>
            </div>
            <div class="Mai">
                <div>
                    <p>{{ introduction }}</p>
                </div>
            </div>
            <div class="Foo">
                <div>
                    <p>{{ author }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EnditCard',
  props: {
      date: String,
      repo_name: String,
      introduction: String,
      author: String,
      star: String,
      pic: String
  }
}
</script>

<style>

.Endit_Card {
    width: 465px;
    min-height: 230px;
    background: #282c2f;
    position: relative;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
}

.Endit_Card .Pic {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 4px;
    background-size: cover;
}

.Endit_Card .Time {
    position: absolute;
    right: 0;
    top: -35px;
}

.Endit_Card .Time>div {
    display: flex;
    margin-bottom: 5px;
}

.Endit_Card .Time>div p {
    color: #fff;
    font-size: 14px;
    font-weight: lighter;
    line-height: 2;
    margin-right: 5px;
}

.Endit_Card .Time>div svg {
    width: 30px;
    height: 30px;
}

.Endit_Card .Repo {
    position: absolute;
    left: 15px;
    bottom: 10px;
}

.Endit_Card .Repo>div {
    width: auto;
}

.Endit_Card .Repo>div h2 {
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    padding-bottom: 2px;
    line-height: 1;
}

.Endit_Card .Repo>div p {
    font-size: 14px;
    color: #fff;
    line-height: 13px;
}

.Endit_Card .Sidebar {
    position: absolute;
    right: 0;
    width: 32%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(29, 31, 32, 0.9);
    border-radius: 0 4px 4px 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.22);
}

.Endit_Card .Sidebar .Hea {
    position: absolute;
    display: flex;
    align-items: center;
    text-align: center;
    top: 0;
    width: 100%;
}

.Endit_Card .Sidebar .Hea>div {
    width: 100%;
    height: 55px;
    padding-top: 15px;
}

.Endit_Card .Sidebar .Hea>div .Title {
    color: #fff;
    font-size: 23px;
    text-align: left;
    padding-left: 12px;
    padding-top: 2px;
}

.Endit_Card .Sidebar .Hea>div>div {
    width: 65%;
    height: 3px;
    background: #efefef;
    margin-left: 12px;
    border-radius: 40px;
}

.Endit_Card .Sidebar .Mai {
    position: relative;
    width: 100%;
    padding: 0 12px;
    margin-top: 15px;
}

.Endit_Card .Sidebar .Mai>div {
    width: 100%;
}

.Endit_Card .Sidebar .Mai>div p {
    color: #d0d0d0;
    font-size: 12px;
    font-weight: lighter;
}

.Endit_Card .Sidebar .Foo {
    position: absolute;
    display: flex;
    align-items: center;
    text-align: center;
    bottom: 0;
    width: 100%;
}

.Endit_Card .Sidebar .Foo>div {
    width: 100%;
    height: 35px;
}

.Endit_Card .Sidebar .Foo>div p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    text-align: right;
    padding-right: 10px;
    margin-top: 10px;
    font-weight: lighter;
}

.Endit_Card .Sidebar .Foo>div .Ribbon {
    bottom: 0;
    border-radius: 0 0 4px 0;
    background: linear-gradient(to right, #37eff9, #0091e4, #64c6f4, #64c0ec);
}

</style>