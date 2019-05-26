<template>
    <div :class="$options.name">
        <header>头部标题</header>
        <div class="mian">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'layout',
    data() {
        return {
        };
    }
};
</script>

<style lang="sass" scoped>

</style>