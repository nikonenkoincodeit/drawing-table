<template>
  <div
    v-show="showEditor"
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
      <li class="close-item">
        <button type="button" class="circle-btn" @click="closeEditor">
          &#10006;
        </button>
      </li>
    </ul>
    <input
      type="text"
      class="input-elem"
      v-show="editorSettings.type === 'text'"
    />
    <div class="box-figure" v-show="typeFigure">
      <img :src="addImage" alt="figure" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "EditorBox",
  props: {
    posX: Number,
    posY: Number,
    updatePos: Function,
  },
  setup(props) {
    const store = useStore();

    const figure = ["square", "triangle", "circle"];
    const elements = [...figure, "text", "img"];

    const position = computed(() => {
      return {
        x: props.posX,
        y: props.posY,
      };
    });

    const editorSettings = computed(() => store.getters.GET_EDITOR_SETTINGS);
    const typeFigure = computed(() =>
      figure.includes(editorSettings.value.type)
    );

    const showEditor = computed(() =>
      elements.includes(editorSettings.value.type)
    );

    const startDragAndDrop = (e) => {
      const { offsetX, offsetY } = e;
      store.dispatch("SET_DRAG_AND_DROP", true);
      store.dispatch("SET_OFFSET_ELEMENT", { x: offsetX, y: offsetY });
    };

    const closeEditor = () => {
      store.dispatch("SET_EDITOR_SETTINGS", "");
      props.updatePos();
    };

    const addImage = computed(() => {
      if (typeFigure.value) {
        return require("@/assets/images/" + editorSettings.value.type + ".png");
      }
      return null;
    });

    return {
      startDragAndDrop,
      closeEditor,
      editorSettings,
      typeFigure,
      showEditor,
      addImage,
      position,
    };
  },
};
</script>

<style lang="scss">
.input-box {
  background: transparent;
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
  background: transparent;
  border: 1px solid #ccc;
  padding: 0 15px;
  &:focus {
    border-color: #2196f3;
  }
}

.edit-list {
  padding-bottom: 5px;
}

.circle-btn {
  width: 20px;
  height: 20px;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  display: block;
}
.save-item {
  margin-left: auto;
  margin-right: 5px;
  & button:hover,
  & button:focus {
    color: rgb(0, 255, 17);
  }
}
.close-item button:hover,
.close-item button:focus {
  color: rgb(206, 37, 37);
}
.move-btn {
  cursor: move;
}
.box-figure {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
}
</style>
