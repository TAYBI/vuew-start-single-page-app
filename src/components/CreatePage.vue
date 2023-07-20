<template>
    <div class="container m-5">
        <form>
            <!-- Nom -->
            <div class="form-group row mb-3">
                <label for="inputNom" class="col-sm-2 col-form-label">Nom</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputNom" v-model="Nom" placeholder="Nom">
                </div>
            </div>

            <!-- Telephone -->
            <div class="form-group row mb-3">
                <label for="inputTelephone" class="col-sm-2 col-form-label">Telephone</label>
                <div class="col-sm-10">
                    <input type="tel" class="form-control" id="inputTelephone" v-model="Telephone" placeholder="Telephone">
                </div>
            </div>

            <!-- IDville -->
            <div class="form-group row mb-3">
                <label for="inputIDville" class="col-sm-2 col-form-label">IDville</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputIDville" v-model="IDville" placeholder="IDville">
                </div>
            </div>

            <!-- Adresse -->
            <div class="form-group row mb-3">
                <label for="inputAdresse" class="col-sm-2 col-form-label"></label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputAdresse" v-model="Adresse" placeholder="Adresse">
                </div>
            </div>

            <button type="submit" class="btn btn-primary" @click.prevent="addClient">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['pageCreated'],
    data() {
        return {
            Nom: '',
            Telephone: '',
            IDville: '',
            Adresse: '',
        }
    },
    methods: {
        addClient() {

        }
    }
}
</script>