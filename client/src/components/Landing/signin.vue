<template>
    <div id="signin">
        <section>
            <p>Sign In</p>
        </section>

        <form id="signin-form">
            Email:<br>
            <input type="email" /><br>
            Password:<br>
            <input type="password"><br>
            <button type="submit">Sign In</button>
        </form>

        <section>
            <button @click="backClick()">Back</button>
        </section>
    </div> <!-- signin -->
</template>

<script>
export default {
    name: 'Signin',
    data () {
      return {}
    },
    methods: {
    backClick() {
        this.$emit("welcomeClick")
    }
}
}
</script>