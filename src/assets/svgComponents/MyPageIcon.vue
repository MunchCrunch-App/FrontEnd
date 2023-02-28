<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32.444 26.411"
    >
        <path
            data-name="패스 217"
            d="M354.965 873.961v-13.088h3.955s3.259.042 4.146-2.047a13.669 13.669 0 0 0 .855-4.736h-6.145l-4.352-4.54h-5.235s-3.049.45-4.339 1.964a6.669 6.669 0 0 0-1.72 5.161v4.2s.115 3.619 3.294 3.5 3.26-3.5 3.26-3.5v-5.528"
            transform="translate(-332.479 -848.55)"
            style="
                stroke-linecap: round;
                stroke-linejoin: round;
                fill: none;
                stroke-width: 2px;
            "
            :stroke="color"
        />
        <path
            data-name="패스 218"
            d="M333.378 873.961a43.856 43.856 0 0 1 4.262-7.053c1.949-2.3 2.386-2.879 2.386-2.879l2.214-3.583"
            transform="translate(-332.479 -848.55)"
            style="fill: none; stroke-width: 2px"
            :stroke="color"
        />
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
