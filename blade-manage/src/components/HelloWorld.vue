<template>
  <div class="hello">
    <h1>Blade say : {{ msg }}</h1>
    <h2>获得的初始值是 : {{this.$store.state.blade}}</h2>
    <h2>getter的值是: {{this.$store.getters.setBladeValue}}</h2>
    <el-button @click="female">female</el-button>
    <el-button @click="male" type="primary">male</el-button>
    <el-button @click="post" type="text">postTest</el-button>
  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Hello World'
      }
    },
    methods: {
      female() {
        this.$store.dispatch("add");
//        this.$store.commit('toFemale');
      },
      male() {
        this.$store.dispatch("reduction");
//        this.$store.commit('toMale');
      },
      post(data) {
        this.$http({
          method: "get",
          contentType: "application/text",
          url: "http://47.104.139.47:9080/test/hello"
        }).then(function (response) {
          console.log(response);
          alert(response.data);
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
