<template>
  <div  class="fixed-left">
      <div id="wrapper">
        <Header />
        <div class="content-page">
            <div class="content">
              <TopBar/>
              <Nuxt />
            </div>
          </div>
        <Footer />
      </div>
  </div>

</template>

<script>
import Header from "~/components/header/header.vue"
import Footer from "~/components/footer/footer.vue"
import TopBar from "~/components/header/topBar.vue"
export default {
    components: { Header, Footer, TopBar }
}
</script>