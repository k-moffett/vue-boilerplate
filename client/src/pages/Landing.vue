<template>
  <div id="welcome-wrapper">

    <div id="welcome-title">
      <section>
        <p>Welcome to Battlehost</p>
      </section>
    </div> <!-- welcome-title -->

    <div id="welcome-card">
      <section>
        <signup 
          v-if="view === 'signup'" 
          @welcomeClick="toWelcome"
        />
        <signin 
          v-else-if="view === 'signin'"
          @welcomeClick="toWelcome" 
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
const axios = require('axios')

import '../scss/Landing.scss'
import welcome from '../components/Landing/welcome.vue'
import signup from '../components/Landing/signup.vue'
import signin from '../components/Landing/signin.vue'

export default {
    name: 'Landing',
    data: () => ({
      view: "welcome"
  }),

  created() {
    //check for user session
   this.checkSession()
  },

  methods: {
    toSignup() {
      this.view = "signup"
    },
    toSignin() {
      this.view = "signin"
    },
    toWelcome() {
      this.view = "welcome"
    },

    async checkSession() {
      let allCookies = document.cookie.split(';')
      let cookieObject = {}
    
      if (allCookies[0] === '') {
        //check if there are no cookies and exit function
        return 
      }

      allCookies.map((cookie)=>{
          var tempCookie = cookie.split('=')
          cookieObject[tempCookie[0].trim()] = tempCookie[1].trim()
      })

      let keys = Object.keys(cookieObject)
      
      if(keys.includes('sessid')) {
          await axios.post('/sess_redir', {
                data: {
                    method: 'landing',
                    sessid: cookieObject.sessid
                }
                })
                .then((response) => {
                  if (response.data.success) {
                    console.log(response)
                    this.$router.push({name: 'Home'})
                  } else 
                  if (response.data.error) {
                    //can logg errors here
                    console.log(response.data.error)
                  }
          
                })
                .catch((error) => console.log(error))
      } 
    }
  },

  components: {
    welcome,
    signup,
    signin
  }
}
</script>