<template>
    <div class="End_A">
        <div id="End_A"></div>
    </div>
</template>

<script>
import Endit_Show from './show'

export default {
  name: 'End_A',
  components: {
      
  },
  mounted() {
    this.bus.$on('Endit_CardListA', data => {
        for(let i = 0; i < data.length; i++){
            Endit_Show({
                props: {
                    date: data[i][1],
                    repo_name: data[i][0],
                    introduction: data[i][2],
                    author: data[i][3],
                    star: data[i][5],
                    pic: data[i][4]
                }
            }, 'End_A')
        }
    })
  }
}

</script>

<style>

main .Container>div .End_A {
    position: relative;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    float: left;
}

.End_A>div {
    margin-top: 145px;
}

.End_A .Endit_Card {
    margin-bottom: 305px;
}

</style>