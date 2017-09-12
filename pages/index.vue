<template>
    <div class="pa4">
      <ul>
        <li v-for="todo in todos" :key="todo.id"> {{todo.task}} </li>
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
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style>

</style>
