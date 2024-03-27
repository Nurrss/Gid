<!-- <template>
  <navbar />
  <combined2 />
  <hero />
  <column />
  <jumbotron />
  <column2 />
  <column3 />
</template> -->

<template>
  <div class="main-app">
    <!-- <Navbar v-if="showElem" /> -->
    <!-- <combined v-if="showElem" /> -->
    <main class="flex justify-center items-center max-w-lg mx-auto w-full">
      <RouterView />
    </main>
    <!-- <my-footer v-if="showElem" /> -->
  </div>
</template>

<script>
// import Navbar from "./components/Navbar.vue";
// import Combined from "./components/Combined.vue";
// import MyFooter from "./components/MyFooter.vue";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  name: "App",
  components: {
    // Combined,
    // Navbar,
    // MyFooter,
  },
  computed: {
    showElem() {
      // Check if the current route's meta field specifies to hide the footer
      return !this.$route.meta.hideFooter;
    },
  },
};
</script>

<style></style>
