export const state = _ => {
  return { counter: 1 }
}

export const mutations = {
  increment (state) {
    state.counter++
  },
  decrement (state) {
    state.counter--
  }
}
