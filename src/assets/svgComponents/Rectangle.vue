<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="24"
        viewBox="0 0 43 21"
    >
        <rect
            data-name="사각형 165"
            width="43"
            height="21"
            rx="10.5"
            :fill="color"
        />
    </svg>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#f75765',
        },
    },
};
</script>
