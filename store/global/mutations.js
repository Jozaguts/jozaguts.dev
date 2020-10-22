export default {
  toggleDrawerStatus(state) {
    state.drawer = !state.drawer
  },
  SET_INSIDE_NAVIGATION_PAGE(state, payload) {
    state.insideNavigationPage = payload
  }
}
