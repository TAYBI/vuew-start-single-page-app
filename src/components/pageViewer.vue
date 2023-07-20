<template>
    <div class="p-3">
        <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="Client..." aria-label="Client..."
                aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button">Chercher</button>
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
                <tr v-for="(client, index) in clients" :key="index">
                    <td>{{ client.nom }}</td>
                    <td>{{ client.tel }}</td>
                    <td>{{ client.IDville }}</td>
                    <td>{{ client.adresse }}</td>
                    <td class="col">
                        <div class="d-flex flex-row h-100">
                            <button class="btn btn-success" @click="editItem(index)">Edit</button>
                            <pre> </pre>
                            <button class="btn btn-danger" @click="deleteItem(index)">Delete</button>
                        </div>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['clients'],
}
</script>