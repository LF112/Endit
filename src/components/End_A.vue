<template>
  <div class="End_A">
    <div id="End_A">
      <Endit_Card v-for="item in list" :key="item.name"
                  :date="item[1]" :repo_name="item[0]" :introduction="item[2]" :author="item[3]" :star="item[5]" :pic="item[4]"/>
    </div>
  </div>
</template>

<script>
  import Endit_Card from './EnditCard'

  export default {
    name: 'End_A',
    components: {
      Endit_Card
    },
    props: {
      list: Array
    },
    mounted() {
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
