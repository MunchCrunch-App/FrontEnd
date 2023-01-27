<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28.094"
    height="25.372"
    viewBox="0 0 28.094 25.372"
  >
    <path
      data-name="패스 214"
      d="m-1428.75 667.161 12.733-12.576 12.533 12.576"
      transform="translate(1430.164 -653.585)"
      style="
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
        fill: none;
      "
      :stroke="color"
    />
    <path
      data-name="패스 215"
      d="M-1426.17 664.939V678.4h20.242l.022-12.72"
      transform="translate(1430.583 -654.025)"
      style="
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
        fill: none;
      "
      :stroke="color"
    />
    <g data-name="패스 216" style="fill: none">
      <path
        d="M4.5 0A4.5 4.5 0 0 1 9 4.5V10H0V4.5A4.5 4.5 0 0 1 4.5 0z"
        style="stroke: none"
        transform="translate(9.914 14.815)"
      />
      <path
        d="M4.5 2A2.503 2.503 0 0 0 2 4.5V8h5V4.5C7 3.122 5.878 2 4.5 2m0-2A4.5 4.5 0 0 1 9 4.5V10H0V4.5A4.5 4.5 0 0 1 4.5 0z"
        style="stroke: none"
        :fill="color"
        transform="translate(9.914 14.815)"
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
