<template>
  <div
    class="wrapper-canvas"
    @mousemove="moveElement"
    @mouseup="stopDragAndDrop"
  >
    <TextBox :posX="posX" :posY="posY" />
    <canvas class="canvas" width="1095" height="600"></canvas>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import TextBox from "@/components/TextBox.vue";

export default {
  name: "Canvas",
  components: { TextBox },
  setup() {
    const store = useStore();
    let posX = ref(0);
    let posY = ref(0);

    const moveElement = (e) => {
      if (!store.getters.GET_DRAG_AND_DROP) return;
      const { layerX, layerY } = e;
      const { x, y } = store.getters.GET_OFFSET_ELEMENT;
      posX.value = layerX - x;
      posY.value = layerY - y;
    };

    const stopDragAndDrop = () => {
      store.dispatch("SET_DRAG_AND_DROP", false);
    };
    return { moveElement, stopDragAndDrop, posX, posY };
  },
};
</script>

<style lang="scss">
.wrapper-canvas {
  position: relative;
  overflow: hidden;
  flex-grow: 2;
}
.canvas {
  border: 1px solid #ccc;
}
</style>
