<template>
    <div class="pa4">
      <h1 class="f4 bold center mw5">Todos</h1>
      <ul class="list pl0 ml0 center mw5 ba b--light-silver br3">
        <li v-for="todo in todos" :key="todo.id" class="ph3 pv2 bb b--light-silver"> {{todo.task}} </li>
      </ul>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  components: {},
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todos // merging counter from the state into computed
    })
  },
  methods: {
    ...mapMutations([])
  }
}
</script>

<style>

</style>
