<template>
    <div class="logo-animation" ref="logo">
        <img :src="$withBase('/assets/common/logo.png')" />
    </div>
</template>

<script>
export default {
    name: 'LogoAni',
    data() {
        return {};
    },
    mounted() {
        this.doAni();
        this.$nextTick(() => {
            const body = document.querySelector("body");
            document.querySelector('.home-link .logo').style.visibility = 'hidden';
            body.append(this.$el);
        })
    },
    destroyed() {
        if (this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
        localStorage.removeItem('bounding');
    },
    methods: {
        doAni() {
            const o = JSON.parse(localStorage.getItem('bounding') || '{}');
            const $el = this.$refs.logo;
            if (!o || !o.width || !$el) return;
            const n = $el.getBoundingClientRect();
            const deltaX = o.x - n.x;
            const deltaY = o.y - n.y;
            const deltaW = o.width / n.width;
            const deltaH = o.height / n.height;

            $el.animate([
                { transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})` },
                { transform: 'none' },
            ], {
                duration: 2000,
                fill: 'both',
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            });
        },
    }
};
</script>

<style lang="stylus">
.logo-animation {
    position: absolute;
    top: 0.7rem;
    left: 1.5rem;
    height: 2.2rem;
    width: 2.2rem;
    z-index: 99;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
