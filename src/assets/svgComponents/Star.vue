<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        height="18.969"
        viewBox="0 0 20 18.969"
    >
        <path
            data-name="다각형 3"
            d="M9.1 1.92a1 1 0 0 1 1.809 0l1.861 3.95a1 1 0 0 0 .78.566l4.338.544a1 1 0 0 1 .554 1.72l-3.185 2.979a1 1 0 0 0-.3.919l.821 4.28a1 1 0 0 1-1.463 1.065l-3.834-2.103a1 1 0 0 0-.963 0l-3.834 2.106a1 1 0 0 1-1.463-1.066l.821-4.28a1 1 0 0 0-.3-.919L1.558 8.7a1 1 0 0 1 .559-1.72l4.338-.544a1 1 0 0 0 .78-.566z"
            :fill="color"
        />
    </svg>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#e7e8eb',
        },
        width: {
            type: String,
            default: '20',
        },
    },
};
</script>
