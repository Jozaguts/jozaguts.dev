export default{
  POST_FILTER(state, filters) {
    let posts;
    localStorage.getItem('posts') 
      ? posts = JSON.parse( localStorage.getItem('posts')) 
      : posts = state.posts
   
   
    let stored = posts.filter( post =>  filters.some(filter => filterByTag(filter, post.tags)))
    
    function filterByTag(filter, tags){
     return tags.includes(filter) 
    }
    
     stored.length ? state.posts = stored  : state.posts = JSON.parse( localStorage.getItem('posts'))
  }
}
