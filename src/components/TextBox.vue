<template>
  <div
    class="input-box"
    :style="{
      transform: 'translate(' + position.x + 'px,' + position.y + 'px)',
    }"
  >
    <ul class="d-flex edit-list">
      <li>
        <button
          type="button"
          class="circle-btn move-btn"
          @mousedown="startDragAndDrop"
        ></button>
      </li>
      <li class="save-item">
        <button type="button" class="circle-btn">&#10004;</button>
      </li>
      <li class="">
        <button type="button" class="circle-btn">&#10006;</button>
      </li>
    </ul>
    <input type="text" class="input-elem" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "TextBox",
  props: {
    posX: Number,
    posY: Number,
  },
  setup(props) {
    const store = useStore();

    const positionElem = computed(() => store.getters.GET_POSITION_ELEMENT);
    const position = computed(() => {
      return {
        x: props.posX,
        y: props.posY,
      };
    });

    const startDragAndDrop = (e) => {
      const { offsetX, offsetY } = e;
      store.dispatch("SET_DRAG_AND_DROP", true);
      store.dispatch("SET_OFFSET_ELEMENT", { x: offsetX, y: offsetY });
    };

    return {
      startDragAndDrop,
      positionElem,
      position,
    };
  },
};
</script>

<style>
.input-box {
  background: #ccc;
  position: absolute;
  width: 300px;
  padding: 5px;
  left: 0;
  top: 0;
  transition: transform 0.05s ease;
}
.input-elem {
  width: 100%;
  height: 40px;
  margin: 0;
}

.edit-list {
  padding-bottom: 5px;
}

.circle-btn {
  width: 20px;
  height: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  display: block;
}
.save-item {
  margin-left: auto;
  margin-right: 5px;
}
.move-btn {
  cursor: move;
}
</style>
