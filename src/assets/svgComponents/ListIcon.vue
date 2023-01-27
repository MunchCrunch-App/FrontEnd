<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23.649"
    height="21.1"
    viewBox="0 0 23.649 21.1"
  >
    <g data-name="그룹 401">
      <path
        data-name="선 83"
        style="fill: none; stroke-linecap: round; stroke-width: 2px"
        :stroke="color"
        d="M0 0h21.649"
        transform="translate(1 1)"
      />
      <path
        data-name="선 84"
        transform="translate(1 10.55)"
        style="fill: none; stroke-linecap: round; stroke-width: 2px"
        :stroke="color"
        d="M0 0h21.649"
      />
      <path
        data-name="선 85"
        transform="translate(1 20.1)"
        style="fill: none; stroke-linecap: round; stroke-width: 2px"
        :stroke="color"
        d="M0 0h21.649"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#000',
    },
  },
};
</script>

<style></style>
