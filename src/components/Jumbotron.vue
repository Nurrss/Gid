<template>
  <section id="info" class="mt-5 container">
    <div class="row align-items-center">
      <div class="col-lg-6 col-md-6 col-sm-12 text-center mt-5">
        <img src="../assets/hero.svg" alt="" class="img-fluid" />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 text-center text-md-left">
        <h3 class="h1 bold mt-5">Добро пожаловать в город Тараз!</h3>
        <p class="mt-4">Прогуляйтесь по историческому городу и наслаждайтесь</p>

        <router-link
          to="/selection"
          exact
          class="btn btn-dark w-100 py-3 mt-4"
          href="#"
        >
          Далее
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row > * {
  width: 100%;
}
</style>
