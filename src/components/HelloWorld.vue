<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Go ahead and add something.</h2>

    <categorized-input :available-types="typesOfInput" @item-add="addListItem"/>
    <categorized-output ref="output"/>
  </div>
</template>

<script>
    import CategorizedInput from "./CategorizedInput";
    import CategorizedOutput from "./CategorizedOutput";

    export default {
        name: 'HelloWorld',
        components: {CategorizedOutput, CategorizedInput},
        props: {
            msg: String
        },
        data: function() {
            return {
                typesOfInput: ['Fruit', 'Vegetable', 'Bread'],

            };
        },
        methods: {
            addListItem(item) {
                alert(`You added ${item.name} and it is a ${item.type}!`);
                this.$refs.output.addItem(item);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
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
