<template>
    <div class="AxisLF">
        <div>
            <div class="Line"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AxisLF'
}
</script>

<style>

main .Container>div .AxisLF {
    width: 10%;
    position: relative;
}

.AxisLF>div {
    height: 100%;
    display: flex;
    justify-content: center;
}

.AxisLF>div .Line {
    width: 5px;
    height: 100%;
    background: #fff;
    border-radius: 5px;
}

</style>