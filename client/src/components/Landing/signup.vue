<template>
    <div id="signup">

        <section>
            <p>Sign Up</p>
        </section>

    <form id="signup-form">
        Email:<br>
        <input v-model="email" type="email" /><br>
        Username:<br>
        <input v-model="username" type="text" /><br>
        Password:<br>
        <input v-model="password" type="password"><br>
        Confirm Password:<br>
        <input v-model="confirmPassword" type="password"><br>
        <button v-on:click="submitSignin" type="submit">Join</button>
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
    data: () => ({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    }),
    methods: {
        backClick() {
            this.$emit("welcomeClick")
        },
        submitSignin() {
            event.preventDefault()
            this.$router.push('/home')
        }
    }
}
</script>