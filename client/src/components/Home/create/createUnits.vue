<template>
    <div id="create-unit-wrapper">

        <form id='new-unit'>

            <div id='form-title'>
                <section>
                    <div>Unit Name</div>
                    <input  
                        type='text'
                        v-model='unitName'
                    />
                    <button
                        id='add-ability-btn'
                        @click="addNewAbility"
                        >+ Add ability
                    </button>
                </section>
            </div> <!-- form-title -->
                
            <div id='form-body'>
                <newAbility 
                    v-for="(ability, index) in totalAbilities" 
                    :key="index" 
                    :row-data="ability"
                    :ref="'ref'+totalAbilities"
                    @removeAbilityClick="removeAbility" 

                />
                <div>Notes:</div>
                <textarea
                    id='notes-input'
                    v-model="notes"
                />
            </div> <!-- form-body -->
            
        </form>
    </div>
</template>

<script>
import '../../../scss/createUnits.scss'
import newAbility from './newAbility.vue'

export default {
    name: 'createUnits',
    data: () => ({
        unitName: '',
        notes: '',
        totalAbilities: 0,
    }),
    computed: {
        username() {
            return this.$store.getters.getUsername
        },
    
    },
    methods: {
        addNewAbility() {
            event.preventDefault()
            this.totalAbilities++
        },

        removeAbility(value) {
           console.log(this.$refs)
           console.log(value)
            // this.totalAbilities.splice(this.totalAbilities.indexOf(ability), 1)
        },
    },
    components: {
        newAbility
    }
}
</script>