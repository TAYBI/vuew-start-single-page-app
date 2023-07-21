<template >
    <a class="btn btn-primary m-3" href="#/clients/ajouter" role="button">Ajouter</a>
    <div class="p-3" v-if="clients.length > 0">
        <div class="input-group mb-5">
            <input v-model="querySearch" type="text" class="form-control" placeholder="Nom du client"
                aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button">Filter</button>
            </div>
        </div>

        <table class="table table-striped ">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Telephone</th>
                    <th>IDville</th>
                    <th>Adresse</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(client, index) in filteredClients" :key="index">
                    <td> <a :href="`#/clients/${client.code_client}`"> {{ client.nom }}</a></td>
                    <td>{{ client.tel }}</td>
                    <td>{{ client.IDville }}</td>
                    <td>{{ client.adresse }}</td>
                    <td class="col">
                        <div class="d-flex flex-row h-100">
                            <a class="btn btn-success" :href="`#/clients/${client.code_client}`" role="button">Edit</a>
                            <pre> </pre>
                            <button class="btn btn-danger" @click="deleteItem(client.code_client)">Delete</button>
                        </div>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { lienAPI, lienAPIRoot, ApiDB } from '../utils/globals';

export default {
    props: ['clients'],
    computed: {
        filteredClients() {
            return this.clients.filter(client =>
                client.nom.toLowerCase().includes(this.querySearch.toLowerCase())
            );
        }
    },
    data() {
        return {
            clients: [],
            querySearch: ''
        }
    },
    created() {
        this.getClients();
        console.log();
    },
    methods: {
        async getClients() {
            console.log(lienAPI);
            try {
                const response = await fetch(lienAPI);
                this.clients = await response.json();
            } catch (error) {
                console.log(error);
            }
        },

        async deleteItem(code) {
            const url = `${lienAPIRoot}/clients/${ApiDB}/${code}`

            try {
                await fetch(url, { method: 'DELETE' }).then(() => {
                    window.location.reload()
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>