<template>
    <div id="app">
        <!-- <p>What is your sex?<span>男</span>or<span>女</span></p> -->
        <p>
            What is your sex?
        </p>
        <router-link to="/sex/a" tag="span">男</router-link>
        or
        <router-link to="/sex/b" tag="span">女</router-link>

        <router-view></router-view>
    </div>
</template>

<script>


export default {
    created () {
    }
}
</script>