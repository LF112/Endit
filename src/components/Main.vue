<template>
  <main>
    <div class="Container">
      <div>
        <End_A :list="A"/>
        <AxisLF />
        <End_B :list="B"/>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
import End_A from './End_A'
import End_B from './End_B'
import Footer from './Footer'
import AxisLF from './AxisLF'
import EnditConfig from '../endit'

export default {
  name: 'Main',
  components: {
    End_A,
    End_B,
    Footer,
    AxisLF
  },
  data(){
    return {
      A: [],
      B: []
    }
  },
  beforeMount() {
    let A = [], B = []
    for (let i = 0; i < EnditConfig.index.length; i++){
      if (i%2 === 0)
        A.push(EnditConfig.index[i])
      else
        B.push(EnditConfig.index[i])
    }
    this.A = A;
    this.B = B;
  }
}

</script>

<style>
main {
    position: relative;
    padding-bottom: 60px;
    min-height: 100%;
    overflow-x: hidden;
}

main .Container {
    position: relative;
    min-height: calc(100vh - 140px);
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: 50%;
    overflow: initial;
}

main .Container>div {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
