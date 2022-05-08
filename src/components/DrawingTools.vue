<template>
  <ul class="list-icon">
    <li class="list-item" v-for="option in options" :key="option.icon">
      <button
        type="button"
        class="list-btn"
        @click="updateDrawing(option)"
        :disabled="option.disabled && !isUser"
        :class="{ current: option.current && editorSettings.type }"
      >
        <img :src="addImage(option.icon)" alt="images" width="40" />
      </button>
    </li>
  </ul>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "DrawingTools",
  setup() {
    const store = useStore();

    let options = reactive([
      { icon: "font.png", type: "text", current: false, disabled: true },
      { icon: "picture-icon.png", type: "img", current: false, disabled: true },
      { icon: "square.png", type: "square", current: false, disabled: true },
      {
        icon: "triangle.png",
        type: "triangle",
        current: false,
        disabled: true,
      },
      { icon: "circle.png", type: "circle", current: false, disabled: true },
      { icon: "bin.png", type: "figure", current: false, disabled: true },
      {
        icon: "download.png",
        type: "download",
        current: false,
        disabled: false,
      },
    ]);

    const isUser = computed(() => store.getters.GET_USER);

    const editorSettings = computed(() => store.getters.GET_EDITOR_SETTINGS);

    const addImage = (img) => require("@/assets/images/" + img);

    const resetClass = (icon) => {
      options = options.map((item) => {
        if (item.icon !== icon) item.current = false;
        return item;
      });
    };

    const updateDrawing = (data) => {
      resetClass(data.icon);
      data.current = !data.current;
      const type = data.current ? data.type : "";
      console.log("data :>> ", type);
      store.dispatch("SET_EDITOR_SETTINGS", type);
    };

    return { options, addImage, updateDrawing, isUser, editorSettings };
  },
};
</script>

<style lang="scss">
.list-item:not(:last-child) {
  margin-bottom: 10px;
}
.list-icon {
  padding: 0 15px;
}
.list-btn {
  border: 1px solid #ccc;
  padding: 10px;
  display: block;
  &.current {
    background: #2195f33a;
    border: 1px solid #2196f3;
  }
  &:disabled {
    opacity: 0.5;
    background: #ebebeb;
  }
}
</style>
