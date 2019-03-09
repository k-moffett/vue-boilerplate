<template>
  <div id="welcome-wrapper">

    <div id="welcome-title">
      <section>
        <p>Welcome to your landing page.</p>
      </section>
    </div> <!-- welcome-title -->

    <div id="welcome-card">
      <section>
        <signup 
          v-if="view === 'signup'" 
        />
        <signin 
          v-else-if="view === 'signin'" 
        />
        <welcome 
          v-else 
          @signupClick="toSignup" 
          @signinClick="toSignin" 
        />
      </section>

    </div> <!-- welcome-card -->
  </div> <!-- welcome-wrapper -->
</template>

<script>
import '../scss/Landing.scss'
import welcome from '../components/Landing/welcome.vue'
import signup from '../components/Landing/signup.vue'
import signin from '../components/Landing/signin.vue'

export default {
    name: 'Landing',
    data: () => ({
      view: "welcome"
  }),

  methods: {
    toSignup() {
      this.view = "signup"
    },
    toSignin() {
      this.view = "signin"
    }
  },

  components: {
    welcome,
    signup,
    signin
  }
}
</script>