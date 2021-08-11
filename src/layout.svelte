<script>
export let color;
</script>
<svelte:head>
    <style>
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        @import url('../fonts/inter.css');
        html { font-family: 'Inter', sans-serif; }
        @supports (font-variation-settings: normal) {
            html { font-family: 'Inter var', sans-serif; }
        }
    </style>
</svelte:head>
<div class={"w-full " + color}>
    <slot></slot>
</div>