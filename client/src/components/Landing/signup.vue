<template>
    <div id="signup">

        <section>
            <p>Sign Up</p>
        </section>

    <form id="signup-form">
        Email:<br>
        <input type="email" /><br>
        Username:<br>
        <input type="text" /><br>
        Password:<br>
        <input type="password"><br>
        Confirm Password:<br>
        <input type="password"><br>
        <button type="submit">Join</button>
    </form>

    <div id="signup-buttons">
        <section>
            <button @click="backClick()">Back</button>
        </section>
    </div> <!-- signup-buttons -->

    </div> <!-- signup -->
</template>

<script>
export default {
    name: 'Signup',
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