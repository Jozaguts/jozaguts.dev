<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-h2 font-weight-bold ">{{ $t('titleProjectContainer') }}</h2>
    </v-col>
    <v-col
      cols="12"
      md="4"
      lg="4"
      xl="4"
      v-for="project in projects"
      :key="project.id"
    >
      <v-row>
        <v-col>
          <v-card>
            <v-row no-gutters>
              <v-col cols="12" class="pa-1" no-gutters>
                <v-img
                  :src="project.mainImage.image"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                  height="200px"
                >
                  <v-card-title class="primary--text font-weight-bold" v-text="project.title"></v-card-title>
                  <v-card-subtitle class="black--text font-weight-bold"
                                   v-text="'route: '+ project.mainImage.route"></v-card-subtitle>
                </v-img>
              </v-col>
              <v-col cols="6" class="pa-1">
                <v-img
                  :src="project.secondImage.image"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.0)"
                  height="200px"
                >
                  <v-card-subtitle class="black--text font-weight-bold"
                                   v-text="'route: '+ project.secondImage.route"></v-card-subtitle>
                </v-img>
              </v-col>
              <v-col cols="6" class="pa-1">
                <v-img
                  :src="project.thirdImage.image"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.0)"
                  height="200px"
                >
                  <v-card-subtitle class="black--text font-weight-bold"
                                   v-text="'route: '+ project.thirdImage.route"></v-card-subtitle>
                </v-img>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-icon v-for="(icon,i) in project.technologyStackIcons" :key="i+icon.icon" :color="icon.color">
                {{ icon.icon }}
              </v-icon>
              <v-spacer></v-spacer>
              <v-btn icon v-for="btn in project.socialMediaIcons" :key="btn.icon" :href="btn.link" target="_blank">
                <v-icon>{{ btn.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "My store",
          id: 1,
          mainImage: {
            image: require('~/assets/img/projects/mystore.png'),
            route: '/'
          },
          secondImage: {
            image: require('~/assets/img/projects/mystore2.png'),
            route: '/checkout'
          },
          thirdImage: {
            image: require('~/assets/img/projects/mystore3.png'),
            route: '/admin/products'
          },
          technologyStackIcons: [
            {
              icon: 'fab fa-laravel',
              color: '#FF2D20'
            },
            {
              icon: 'fab fa-vuejs',
              color: '#4fc08d'
            },
            {
              icon: 'fab fa-aws',
              color: '#FF9900'
            },
          ],
          socialMediaIcons: [
            {
              icon: 'fab fa-github',
              link: 'https://github.com/jozaguts/my-store'
            },
            {
              icon: 'fab fa-behance',
              link: ''
            }, {
              icon: 'fas fa-link',
              link: 'https://my-store-jozaguts.herokuapp.com/'
            },
            {
              icon: 'far fa-heart',
              link: ''
            }
          ],
          flex: 12,
          likes: 4
        },
      ]
    };
  }
};
</script>
