<template>
  <main>
    <section class="section">
      <div class="container"><Canvas /></div>
    </section>
  </main>
</template>

<script>
import Canvas from "@/components/Canvas.vue";
export default {
  name: "Home",
  components: { Canvas },
};
</script>

<style lang="scss">
.section {
  padding: 20px 0;
}
</style>
