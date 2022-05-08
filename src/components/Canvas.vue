<template>
  <div
    class="wrapper-canvas"
    @mousemove="moveElement"
    @mouseup="stopDragAndDrop"
  >
    <EditorBox :posX="posX" :posY="posY" :updatePos="updatePos" />
    <canvas class="canvas" width="1095" height="600"></canvas>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import EditorBox from "@/components/EditorBox.vue";

export default {
  name: "Canvas",
  components: { EditorBox },
  setup() {
    const store = useStore();
    let posX = ref(0);
    let posY = ref(0);

    const updatePos = (x = 0, y = 0) => {
      posX.value = x;
      posY.value = y;
    };

    const moveElement = (e) => {
      if (!store.getters.GET_DRAG_AND_DROP) return;
      const { layerX, layerY } = e;
      const { x, y } = store.getters.GET_OFFSET_ELEMENT;
      updatePos(layerX - x, layerY - y);
    };

    const stopDragAndDrop = () => {
      store.dispatch("SET_DRAG_AND_DROP", false);
    };
    return { moveElement, stopDragAndDrop, posX, posY, updatePos };
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
