<template>
  <div class="home">
 
    <SearchPage msg="Welcome to the about page!"/>

  </div>
</template>

<script>
// @ is an alias to /src
import SearchPage from '@/components/SearchPage.vue'

export default {
  name: 'Search',
  components: {
    SearchPage
  }
}
</script>
