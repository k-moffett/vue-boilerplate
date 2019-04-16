<template>
    <div id="welcome">
        <section>
            <p>Battlehost is a game manager created to assist tabletop gamers track some of the more tedious aspects of their games.</p>
            <br>
            <p>Create a battle room for your game and invite your opponent. Each of you can add rules to keep track of points, and even create profiles for units in game to keep track of their ablities.</p>
            <br>
            <p>Any changes made will be visible to you and your opponent in realtime. Click on "Sign Up" or "Sign In" to get started.</p>
        </section>

    <div class="welcome-buttons">
      <section>
        <button 
            id="signup-btn"
            @click="signupClick()">
            Sign Up
        </button>
        <button 
            id="signin-btn"
            @click="signinClick()">
            Sign In
        </button>
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