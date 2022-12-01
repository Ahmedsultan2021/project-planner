<template>

<div class="filter-nav">
    <button @click="updateFilter('all')" :class="{active: currunt==='all'}"  >view all</button>
    <button @click="updateFilter('compeleted')" :class="{active: currunt==='compeleted'}" >Compeleted</button>
    <button @click="updateFilter('onGoing')" :class="{active: currunt==='onGoing'}" >onGoing</button>
</div>
</template>

<script>
export default {
    props:["currunt"],
    data() {
        return {
            
        }
    },
    methods: {
        updateFilter(by){
            this.$emit("filterChange",by)
        }
    },
}
</script>
<style>

.filter-nav button{
    background-color: 0;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;

}
.filter-nav button.active{
    color: #555;
}


</style>

