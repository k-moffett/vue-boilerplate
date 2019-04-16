<template>
    <div>

            <section>
                <div>Ability Name</div>
                <input  
                    id='ability-name-input'
                    type='text'
                    v-model='abilityName'
                />
            </section>

            <section>
                <div>Ability Description</div>
                <textarea 
                    id='ability-description-input'
                    type='text'
                    v-model='abilityDescription'
                />
            </section>

            <section id='remove-ability'>
                <button
                    id='remove-ability-btn'
                    @click="removeAbility"
                    >x
                </button>
            </section>
    </div>
</template>

<script>

export default {
    name: 'newAbility',
    data: () => ({
        abilityName: '',
        abilityDescription: '',
    }),
    methods: {
        removeAbility() {
            event.preventDefault()
            this.$emit("removeAbilityClick")
        }
    }
}
</script>