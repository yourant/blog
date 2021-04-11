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
    beforeDestroy() {
        document.querySelector('.home-link .logo').style.visibility = 'visible';
        if (this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
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
                { transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`, borderRadius: '50%', borderWidth: '5px' },
                { transform: 'none', borderRadius: 0, borderWidth: 0 },
            ], {
                duration: 2500,
                fill: 'both',
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            });
            localStorage.removeItem('bounding');
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
    overflow: hidden;
    border: 0 solid rbgr(255,255,255,0.35)
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>
