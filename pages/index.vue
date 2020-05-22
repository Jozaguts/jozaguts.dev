<template>
 <projects-container>

 </projects-container>
</template>

<script>
import ProjectsContainer from '@/components/Projects/ProjectsContainer'

export default {
    head(){
      return {
            title: "Home",
            meta:[
                { hid: 'description', name: 'description', content: 'Pagina personal portafolio proyectos y servicios de desarrollo web' }
            ]
      }
    },
    components:{
      ProjectsContainer
    }

}
</script>
