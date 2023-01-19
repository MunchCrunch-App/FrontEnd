<template>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      :fill="color"
      stroke="none"
    >
      <path
        d="M940 3892 c-101 -50 -105 -183 -8 -242 33 -20 54 -20 1629 -20 l1596
0 34 23 c93 62 87 189 -12 239 -32 17 -130 18 -1619 18 -1489 0 -1587 -1
-1620 -18z"
      />
      <path
        d="M932 2680 c-97 -59 -93 -192 8 -242 33 -17 131 -18 1620 -18 1489 0
1587 1 1619 18 101 51 106 183 9 242 -33 20 -54 20 -1628 20 -1574 0 -1595 0
-1628 -20z"
      />
      <path
        d="M932 1470 c-97 -59 -93 -192 8 -242 33 -17 131 -18 1620 -18 1489 0
1587 1 1619 18 101 51 106 183 9 242 -33 20 -54 20 -1628 20 -1574 0 -1595 0
-1628 -20z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#000",
    },
  },
};
</script>
