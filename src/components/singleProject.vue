<template>
    <div class="project" :class="{compelete: project.compeletion}">
        <div class="actions">
            <h3 @click="toggleShowDetails">{{ project.tittle }}</h3>
            <div class="icons">
                <span class="material-symbols-outlined tick" @click="toggleCompelete">
                    done
                </span>
                <router-link :to="{name:'EditProject',params:{id:project.id}}" >
                <span class="material-symbols-outlined">
                    edit
                </span>
                </router-link>
                <span class="material-symbols-outlined" @click="DeleteProject">
                    delete
                </span>
            </div>
        </div>
        <div v-if="showdetails" class="details">
            {{ project.details }}
            done at {{updatedAt}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showdetails: false,
            uri: 'http://localhost:3000/projects/' + this.project.id,
            updatedAt: null 
        }
    },
    methods: {
        toggleShowDetails() {
            this.showdetails = !this.showdetails
        },
        DeleteProject() {
            fetch(this.uri, { method: 'DELETE' })
                .then(() => this.$emit('delete', this.project.id))
                .catch(err => console.log(err.message))
        },
        toggleCompelete() {
            // Simple PUT request with a JSON body using fetch
            const requestOptions = {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ compeletion: !this.project.compeletion })
            };
            fetch(this.uri, requestOptions)
            .then(()=>{
                this.$emit("compelete",this.project.id)
            })
            .catch((err)=> console.log(err.message))
        },
       
    },
}
</script>

<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
    border-left: 4px solid #e90074;
}

h3 {
    cursor: pointer;
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-symbols-outlined {
    color: #bbb;
    font-size: 24px;
    margin-left: 10px;
    cursor: pointer;
}

.material-symbols-outlined:hover {
    color: #777;
}
.project.compelete{
    border-left: 4px solid rgb(120, 198, 3);
}
.project.compelete .tick{
    color: rgb(100, 165, 3);
}
</style>