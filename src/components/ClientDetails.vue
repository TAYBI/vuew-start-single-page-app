<template>
    <p>{{ $route.params.id }}</p>
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
                <label for="inputAdresse" class="col-sm-2 col-form-label">Adress</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputAdresse" v-model="Adresse" placeholder="Adresse">
                </div>
            </div>

            <button :disabled="IsFormInvalid" type="submit" class="btn btn-primary m-1"
                @click.prevent="addClient">Submit</button>
            <button type="submit" class="btn btn-danger m-1" @click.prevent="deleteClient">Supprimer</button>
            <button type="submit" class="btn btn-success m-1" @click.prevent="addClient">Modifier</button>
        </form>
    </div>
</template>

<script>
import router from '@/routes';
import { lienAPIRoot, ApiDB } from '../utils/globals';


export default {
    props: ['pageCreated'],
    computed: {
        IsFormInvalid() {
            return (!this.Nom || !this.Telephone);
        }
    },
    data() {
        return {
            Nom: '',
            Telephone: '',
            IDville: '',
            Adresse: '',
        }
    },
    created() {
        this.getClient();
        console.log();
    },
    methods: {
        async getClient() {
            const url = `${lienAPIRoot}/clients/${ApiDB}/${this.$route.params.id}`
            try {
                const response = await fetch(url);
                const client = await response.json();

                this.Nom = client.nom
                this.Telephone = client.tel
                this.IDville = client.IDville
                this.Adresse = client.adresse

            } catch (error) {
                console.log(error);
            }
        },
        addClient() {
            if (!this.Nom || !this.Telephone) {
                alert('please fill nom and telephone !');
            }

            this.pageCreated({
                Nom: this.Nom,
                Telephone: this.Telephone,
                IDville: this.IDville,
                Adresse: this.Adresse,
            })

            Nom = '';
            Telephone = '';
            IDville = '';
            Adresse = '';
        },
        async deleteClient() {
            const url = `${lienAPIRoot}/clients/${ApiDB}/${this.$route.params.id}`

            try {
                await fetch(url, { method: 'DELETE' }).then(() => router.push('/clients'));
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>