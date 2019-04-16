<template>
  <div id="home-wrapper">

    <div id="navbar">

      <div id="user-welcome">
      Welcome {{username}}
      </div>
      
      <div id="menu-btn">
          <button 
            @click="handleMenuClick()">
            Menu
          </button>
      </div>

    </div><!-- navbar -->

    <transition name="slide-fade">
      <section id="menu-items" v-show="showMenuItems">

          <button @click="handleChangeView('myHome')">Home</button> 
          <button @click="handleChangeView('myAccount')">Account</button> 
          <button @click="handleChangeView('createUnits')">Create Units</button> 
          <button @click="handleChangeView('createList')">Create List</button> 
          <button @click="handleChangeView('createBattle')">Create Battle</button> 
          <button @click="handleChangeView('myUnits')">My Units</button> 
          <button @click="handleChangeView('myLists')">My Lists</button> 
          <button @click="handleChangeView('myBattles')">My Battles</button>
          <button @click="handleChangeView('help')">Help</button>
          <button>Logout</button> 

      </section>
    </transition>

    <myAccount v-if="view === 'myAccount'"/>
    <createUnits v-else-if="view === 'createUnits'"/>
    <createList v-else-if="view === 'createList'"/>
    <createBattle v-else-if="view === 'createBattle'"/>
    <myUnits v-else-if="view === 'myUnits'"/>
    <myLists v-else-if="view === 'myLists'"/>
    <myBattles v-else-if="view === 'myBattles'"/>
    <help v-else-if="view === 'help'"/>
    <myHome v-else/>

  </div>
</template>

<script>
const axios = require('axios')

import '../scss/Home.scss'
import myHome from '../components/Home/my/myHome.vue'
import myAccount from '../components/Home/my/myAccount.vue'
import createUnits from '../components/Home/create/createUnits.vue'
import createList from '../components/Home/create/createList.vue'
import createBattle from '../components/Home/create/createBattle.vue'
import myUnits from '../components/Home/my/myUnits.vue'
import myLists from '../components/Home/my/myLists.vue'
import myBattles from '../components/Home/my/myBattles.vue'
import help from '../components/Home/help.vue'

export default {
    name: 'Home',
    data: () => ({
      showMenuItems: false,
      view: 'myHome',
    }),

    created() {
    //check for user session
    this.checkSession()
  },

  computed: {
      username() {
          return this.$store.getters.getUsername
      }
  },

  methods: {

    handleMenuClick() {
      event.preventDefault()
      this.showMenuItems = !this.showMenuItems
    },

    handleChangeView(view) {
      this.view = view
      this.showMenuItems = !this.showMenuItems
    },

    handleLogout() {

    },

    async checkSession() {
      let allCookies = document.cookie.split(';')
      let cookieObject = {}

      if (allCookies[0] === '') {
        //check if there are no cookies and exit function
        this.$router.push({name: 'Landing'}) 
        return
      }

      allCookies.map((cookie)=>{
          var tempCookie = cookie.split('=')

          if(tempCookie[0].trim() === 'sessid' && tempCookie[1] === '') {
            this.$router.push({name: 'Landing'})
            return
          }

          cookieObject[tempCookie[0].trim()] = tempCookie[1].trim()
      })

      let keys = Object.keys(cookieObject)
      
      if(keys.includes('sessid')) {
          await axios.post('/sess_redir', {
                data: {
                    method: 'home',
                    sessid: cookieObject.sessid
                }
                })
                .then((response) => {
                  if (response.data.success) {
                    this.$store.dispatch('setUsername', response.data.success.username)
                  } else 
                  if (response.data.error) {
                    this.$router.push({name: 'Home'})
                  }
          
                })
                .catch((error) => console.log(error))
      } 
    },

  },

  components: {
    myHome,
    myAccount,
    createUnits,
    createList,
    createBattle,
    myUnits,
    myLists,
    help,
    myBattles
  }

}

</script>