<template>
    <footer>
        <a class="NAVILAB" href="https://futiwolf.com" target="_blank">
            <svg aria-hidden="true"><use xlink:href="#Endit_futiwolf"></use></svg>
            <div class="thank Tip" data-tooltip="⚡NAVILAB">Drawn by NAVILAB</div>
        </a>
        <div class="Foo_main">
            <div class="Secondary">
                <div class="Ribbon"></div>
                <p>Copyright © 2019 <a class="LF Tip" href="https://www.lf112.net/" data-tooltip="Independent Websites Developer">LF112</a> All Rights Reserved.</p>
                <span class="Nbsp">/</span>
                <p><a class="Tip" href="https://github.com/LF112/Endit" rel="noopener noreferrer" target="_blank" data-tooltip="GitHub">This repository</a></p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>

footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: center;
}

footer .NAVILAB {
    text-align: center;
    position: relative;
    padding: 15px 5px;
}

footer .NAVILAB .thank {
    color: rgba(115, 115, 115, 0.12);
    font-size: 12px;
    margin-top: -30px;
}

footer .NAVILAB>svg {
    width: 62px;
    height: 28px;
    margin-bottom: -6px;
}

footer .Foo_main {
    height: 32px;
    position: relative;
    margin-top: -4px;
    padding-left: 20px;
    padding-top: 5px;
    border-left: 1px solid rgba(195, 195, 195, 0.18);
}

footer .Foo_main .Secondary {
    display: flex;
    position: relative;
}

footer .Foo_main .Ribbon {
    position: absolute;
    height: 3px;
    background: linear-gradient(to right, rgba(119, 119, 119, 0.2), rgba(72, 72, 72, 0.2), rgba(103, 103, 103, 0.2), rgba(60, 60, 60, 0.2));
}

footer .Foo_main .Secondary>p,
a,
span {
    line-height: 28px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.19)!important;
    font-weight: lighter;
}

footer .Foo_main .Secondary>p .LF {
    font-family: fontOne;
    color: rgba(255, 255, 255, 0.26)!important;
    font-weight: bold;
}

footer .Foo_main .Nbsp {
    padding: 0 8px;
    font-weight: lighter;
}

</style>