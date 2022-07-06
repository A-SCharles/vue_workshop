<template>
    <div class="container" v-if="property">
        <h1>Property Details page</h1>
        <div class="card" style="width: 18rem;">
            <img :src="property.image" class="card-img-top" alt="...">
            <div class="card-body">
            
                <h5 class="card-title">{{property.address.street}}</h5>
                <!-- <p class="card-text">{{ id }}</p> -->
                <p class="card-text">{{ property.address.street}}</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>
    <div class="container" v-else>
        <h1>Loading Property</h1>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            property: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/properties/' + this.id)
            .then((res) => res.json())
            .then((data) => (this.property = data))
        .catch((err) => console.log(err.meessage))
    }
}
</script>

<style>
</style>