<template>
    <div id="welcome">
        <section>
            <p>Welcome to your application. A descritpion of the app could be placed here.</p>
        </section>

    <div class="welcome-buttons">
      <section>
        <button @click="signupClick()">Sign Up</button>
        <button @click="signinClick()">Sign In</button>
      </section>
    </div> <!-- welcome buttons -->

    </div> <!-- welcome -->
</template>

<script>
export default {
    name: 'welcome',
    data: () => ({
        temp: ''
    }),
    methods: {
        signupClick() {
            this.$emit('signupClick')
        },
        signinClick() {
            this.$emit('signinClick')
        }
    }
}
</script>