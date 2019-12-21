<template>
    <div class="End_B">
        <div id="End_B"></div>
    </div>
</template>

<script>
import Endit_Show from './show'

export default {
  name: 'End_B',
  components: {
      
  },
  mounted() {
    this.bus.$on('Endit_CardListB', data => {
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
            }, 'End_B')
        }
    })
  }
}
</script>

<style>

main .Container>div .End_B {
    position: relative;
    width: 45%;
    float: left;
}

.End_B .Endit_Card {
    margin-top: 305px;
}

.End_B .Endit_Card .Time {
    left: 0;
}

.End_B .Endit_Card .Time>div p {
    margin-left: 5px;
    margin-right: 0;
}

.End_B .Endit_Card .Repo {
    right: 15px;
    left: auto;
}

.End_B .Endit_Card .Sidebar {
    left: 0;
    border-radius: 4px 0 0 4px;
}

.End_B .Endit_Card .Sidebar .Foo>div p {
    text-align: left;
    padding-right: 0;
    padding-left: 10px;
}



</style>