<template>
  <div class="home">
    <filterNav @filterChange="currunt = $event" :currunt="currunt" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects">
        <singleProject :project="project" @delete="handleDelete" @compelete="handleCompelete" />
      </div>
    </div>
  </div>
</template>

<script>
import singleProject from '../components/singleProject.vue'
import filterNav from '../components/filterNav.vue'
export default {
  name: 'HomeView',
  components: { singleProject, filterNav },
  data() {
    return {
      projects: [],
      currunt: 'all'
    }
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    },
    handleCompelete(id) {
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.compeletion = !p.compeletion
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
  },
  computed:{
    filteredProjects(){
      if (this.currunt=="compeleted") {
        return this.projects.filter(project=>project.compeletion)
      }
      if (this.currunt=="onGoing") {
        return this.projects.filter(project=> !project.compeletion)
      }
      return this.projects
    }

  }
}
</script>
