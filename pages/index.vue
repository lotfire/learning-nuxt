<template>
    <div>
     <button @click="decrement">-</button>
     {{counter}}
     <button @click="increment">+</button>
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
      counter: state => state.counter // merging counter from the state into computed
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
