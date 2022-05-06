<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="row">
          <DrawingTools />
          <Canvas />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Canvas from "@/components/Canvas.vue";
import DrawingTools from "@/components/DrawingTools.vue";
export default {
  name: "Home",
  components: { Canvas, DrawingTools },
};
</script>

<style lang="scss">
.section {
  padding: 20px 0;
}
</style>
