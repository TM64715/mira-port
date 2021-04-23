<script>
import Card from "./card.svelte";

</script>
<svelte:head>
    <style>
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    </style>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>
<div class="w-full">
    <slot></slot>
</div>