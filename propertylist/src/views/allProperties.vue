<template>
    <div v-if="properties.length">
        <h2>I am all Properties</h2>
        <div class="container">
            <div class="row">
                <div class="card m-3 p-2" v-for="property of properties" :key="property.id" style="width: 18rem;">
                    <img :src="property.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ property.address.street }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                        <router-link :to="{ name: 'property', params: { id: property.id } }">
                            <a class="btn btn-primary">Go somewhere</a>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>Loading Properties</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            properties: []
        }
    },

    mounted() {
        fetch('http://localhost:3000/properties')
            .then((res) => res.json())
            .then((data) => (this.properties = data))
    }
}
</script>