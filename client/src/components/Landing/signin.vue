<template>
    <div id="signin">
        <section>
            <p>Sign In</p>
        </section>

        <section v-show="loginErr">
            <p>{{error}}<p/>
        </section>

        <form id="signin-form">
            Email:
            <input 
                type="email" 
                v-model="email" 
                @input="validateEmptyForm"
            />
            Password:
            <input 
                type="password"
                v-model="password"
                @input="validateEmptyForm"
            />

            <div id="signin-submit">
                <section>
                    <button 
                        type="submit"
                        v-on:click="submitLogin" 
                        :disabled="emptyForm">
                        Sign In
                    </button>
                </section>
            </div>
        </form>

        <div id="validation-errors">
            <section>
                <transition name="fade">
                    <div id="emailNotFound"  v-show="emailNotFound">
                            - There is no account with that email addess.
                    </div>
                </transition>
            </section>

            <section>
                <transition name="fade">
                    <div id="invalidPassword"  v-show="invalidPassword">
                            - Incorrect password.
                    </div>
                </transition>
            </section>
        </div>

        <div class="back-btns">
            <section>
                <button 
                    @click="backClick()">
                    Back
                </button>
            </section>
        </div>
    </div> <!-- signin -->
</template>

<script>
import axios from 'axios'

export default {
    name: 'Signin',
   data: () => ({
       email: '',
       password: '',
       emptyForm: true,
       loginErr: false,
       error: '',
       emailNotFound: false,
       invalidPassword: false,
       
       
    }),
    methods: {
    backClick() {
        this.$emit("welcomeClick")
    },
    submitLogin() {
        event.preventDefault()
            axios.post('/signin', {
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then((response) => {
                console.log(response.data)
                this.emailNotFound = false
                this.invalidPassword = false
                if (response.data.error === 'email not found') {
                    console.log('email not found')
                    this.emailNotFound = true
                }
                if (response.data.error === 'invalid password') {
                    console.log('invalid password')
                    this.emailNotFound = false
                    this.invalidPassword = true
                }
                if(response.data.message === 'signin success') {
                    console.log('signin success')
                    this.$router.push('/home')
                }
            })
            .catch((error) => {
                console.log(error)
            })    },
    validateEmptyForm() {
        if (this.email === '' || this.password === '') {
            this.emptyForm = true
        } else if ( this.email != '' && this.password != '') {
            this.emptyForm = false
        }
    }
}
}
</script>