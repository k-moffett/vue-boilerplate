<template>
    <div id="signin">
        <section>
            <p>Sign In</p>
        </section>

        <form id="signin-form">
            Email:<br>
            <input v-model="email" type="email" /><br>
            Password:<br>
            <input v-model="password" type="password"><br>
            <button v-on:click="submitLogin" type="submit">Sign In</button>
        </form>

        <section>
            <button @click="backClick()">Back</button>
        </section>
    </div> <!-- signin -->
</template>

<script>
export default {
    name: 'Signin',
   data: () => ({
       email: '',
       password: ''
    }),
    methods: {
    backClick() {
        this.$emit("welcomeClick")
    },
    submitLogin() {
        event.preventDefault()
        this.$router.push('/home')
    }
}
}
</script>