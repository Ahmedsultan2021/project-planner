<template>
    <center>
        <h1>edit project</h1>
    </center>
    <form @submit.prevent="handleSubmit">
        <label> Title </label>
        <input type="text" required v-model="tittle">
        <label>Details</label>
        <textarea required v-model="details"> </textarea>
        <button>Add Project</button>
    </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            details: '',
            tittle: '',
            uri: 'http://localhost:3000/projects/' + this.id
        }
    },
    mounted() {
        fetch(this.uri)
            .then(response => response.json())
            .then(data => {
                this.tittle = data.tittle
                this.details = data.details
            }
            );
    },
    methods: {
        handleSubmit() {
            const requestOptions = {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ details:this.details, tittle:this.tittle })
            };
            fetch(this.uri, requestOptions)
            .then(()=>
            {
                this.$router.push('/')
            })             
        }
    },
}
</script>

<style>

</style>