<template>
  <div class="End_B">
    <div id="End_B">
      <Endit_Card
        v-for="item in list"
        :key="item.name"
        :date="item[1]"
        :repo_name="item[0]"
        :introduction="item[2]"
        :author="item[3]"
        :star="item[5]"
        :pic="item[4]"
      />
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
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
