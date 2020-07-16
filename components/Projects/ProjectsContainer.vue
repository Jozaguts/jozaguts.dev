<template>
  <v-layout>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, libero.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          sm="12"
          xs="12"
          md="4"
          lg="4"
          xl="4"
          v-for="technology in technologies"
          :key="technology.title"
        >
          <v-card max-width="400px" class="mx-auto">
            <v-card-title v-text="technology.title"></v-card-title>
            <v-container>
              <v-row>
                <v-col
                  v-for="project in technology.projects"
                  :key="project.id"
                  :cols="project.flex"
                >
                  <v-card>
                    <v-img :src="project.image">
                      <v-card-title v-text="project.name" class="white--text"></v-card-title>
                    </v-img>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon class="mx-1">
                        <v-icon>fab fa-github</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-1">
                        <v-icon>fab fa-behance</v-icon>
                      </v-btn>
                      <v-badge class="mx-1" overlap :content="project.likes">
                        <v-btn icon>
                          <v-icon>far fa-heart</v-icon>
                        </v-btn>
                      </v-badge>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        {
          title: "Laravel",
          projects: [
            {
              id: 1,
              name: "titulo del proyecto",
              image: "http://placeimg.com/300/200/any",
              flex: 12,
              likes: 4
            },
            {
              id: 2,
              name: "titulo del proyecto",
              image: "https://loremflickr.com/200/300",
              flex: 6,
              likes: 7
            },
            {
              id: 3,
              name: "titulo del proyecto",
              image: "https://picsum.photos/200/300",
              flex: 6,
              likes: 10
            }
          ]
        },
        {
          title: "VueJs",
          projects: [
            {
              id: 1,
              name: "titulo del proyecto",
              image: "https://loremflickr.com/300/200",
              flex: 12,
              likes: 4
            },
            {
              id: 2,
              name: "titulo del proyecto",
              image: "https://placekitten.com/200/300",
              flex: 6,
              likes: 7
            },
            {
              id: 3,
              name: "titulo del proyecto",
              image: "https://loremflickr.com/200/300",
              flex: 6,
              likes: 10
            }
          ]
        },
        {
          title: "Playground",
          projects: [
            {
              id: 1,
              name: "titulo del proyecto",
              image: "https://picsum.photos/300/200",
              flex: 12,
              likes: 4
            },
            {
              id: 2,
              name: "titulo del proyecto",
              image: "https://picsum.photos/200/300",
              flex: 6,
              likes: 7
            },
            {
              id: 3,
              name: "titulo del proyecto",
              image: "https://picsum.photos/200/300",
              flex: 6,
              likes: 10
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>