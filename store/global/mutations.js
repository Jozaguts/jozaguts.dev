export default {
  toggleDrawerStatus(state) {
    state.drawer = !state.drawer
  },
  SET_INSIDE_NAVIGATION_INDEX_PAGE(state, payload) {
    state.insideNavigationIndexPage = payload
  }
}
