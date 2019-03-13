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
            <button 
                type="submit"
                v-on:click="submitLogin" 
                :disabled="emptyForm">
                Sign In
            </button>
        </form>

        <section>
            <button 
                @click="backClick()">
                Back
            </button>
        </section>
    </div> <!-- signin -->
</template>

<script>
export default {
    name: 'Signin',
   data: () => ({
       email: '',
       password: '',
       emptyForm: true,
       loginErr: false,
       error: ''
       
    }),
    methods: {
    backClick() {
        this.$emit("welcomeClick")
    },
    submitLogin() {
        event.preventDefault()
        this.$router.push('/home')
    },
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