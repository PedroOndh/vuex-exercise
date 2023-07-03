<template>
  <button
    :class="[
      { [`list__button--${background}`]: background },
      { [`list__button--${size}`]: size },
      'list__button'
    ]"
  >
    <img v-if="icon" class="list__icon" :src="`src/assets/${icon}.png`" :alt="textButton" />
    <span :class="[icon ? 'tooltip' : 'list__button--text']">{{ textButton }}</span>
  </button>
</template>

<script>
export default {
  name: 'TodoButton',
  props: {
    icon: {
      type: String,
      required: false
    },
    textButton: {
      type: String,
      required: true
    },
    background: {
      type: String, //red, blue, green
      required: false
    },

    size: {
      type: String, //small, normal, big
      required: false,
      default: 'small'
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  &__button {
    position: relative;
    display: flex;
    height: 3rem;
    justify-content: center;
    align-items: center;
    border: none;

    &:hover {
      & .tooltip {
        display: block;
      }
    }
    &--red {
      background: lightcoral;
      &:hover {
        background: indianred;
      }
    }

    &--blue {
      background: lightskyblue;
      &:hover {
        background: cornflowerblue;
      }
    }

    &--green {
      background: lightgreen;
      &:hover {
        background: chartreuse;
      }
    }

    &--small {
      width: 3rem;
      border-radius: 50%;
    }
    &--normal {
      width: 5rem;
      border-radius: 30%;
    }
    &--big {
      width: 7rem;
      border-radius: 10%;
    }
  }
  &__icon {
    height: 1.5rem;
    width: 1.5rem;
  }
}
.tooltip {
  position: absolute;
  display: none;
  border: 1px solid black;
  padding: 3px;
  background-color: gray;
  color: white;
  width: 100px;
  right: 60%;
  top: 100%;
}
</style>
