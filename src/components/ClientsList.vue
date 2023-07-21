<template>
    <div class="p-3">
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
                            <button class="btn btn-success" @click="editItem(client.code_client)">Edit</button>
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
import { lienAPIRoot, ApiDB } from '../utils/globals';

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
            querySearch: ''
        }
    },
    methods: {
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