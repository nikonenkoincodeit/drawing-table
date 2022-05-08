<template>
  <div
    class="wrapper-canvas"
    @mousemove="moveElement"
    @mouseup="stopDragAndDrop"
  >
    <EditorBox
      :posX="posX"
      :posY="posY"
      :clearCanvas="clearCanvas"
      :updatePos="updatePos"
      :addTextToCanvas="addTextToCanvas"
      :addImageToCanvas="addImageToCanvas"
      :onResetClass="onResetClass"
    />
    <canvas class="canvas" width="1095" height="600" ref="canvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useStore } from "vuex";
import EditorBox from "@/components/EditorBox.vue";

export default {
  name: "Canvas",
  components: { EditorBox },
  props: {
    resetClass: Function,
  },
  setup(props) {
    const store = useStore();
    let posX = ref(0);
    let posY = ref(0);
    let canvas = ref(null);
    let ctx = ref(null);

    const updatePos = (x = 0, y = 0) => {
      posX.value = x;
      posY.value = y;
    };

    const typeSelect = computed(() => store.getters.GET_EDITOR_SETTINGS.type);

    const moveElement = (e) => {
      if (!store.getters.GET_DRAG_AND_DROP) return;
      const { layerX, layerY } = e;
      const { x, y } = store.getters.GET_OFFSET_ELEMENT;
      updatePos(layerX - x, layerY - y);
    };

    const stopDragAndDrop = () => {
      store.dispatch("SET_DRAG_AND_DROP", false);
    };

    const addTextToCanvas = (text, x = 0, y = 0) => {
      ctx.value.font = "18px Roboto";
      ctx.value.fillText(text, x, y);
    };

    const addImageToCanvas = (url, x = 0, y = 0, size = 300) => {
      let img = new Image();
      img.src = url;
      img.onload = function () {
        ctx.value.drawImage(img, x, y, size, size);
      };
    };

    const clearCanvas = () => {
      ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
    };

    const onResetClass = () => {
      props.resetClass();
    };

    const downloadImage = () => {
      const dataURL = canvas.value.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "my-image.png";
      link.click();
    };

    watch(typeSelect, (currentValue) => {
      if (currentValue === "delete") {
        return clearCanvas();
      }
      if (currentValue === "download") {
        return downloadImage();
      }
    });

    onMounted(() => {
      ctx.value = canvas.value.getContext("2d");
    });

    return {
      addTextToCanvas,
      clearCanvas,
      onResetClass,
      addImageToCanvas,
      moveElement,
      stopDragAndDrop,
      updatePos,
      posX,
      posY,
      canvas,
    };
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
