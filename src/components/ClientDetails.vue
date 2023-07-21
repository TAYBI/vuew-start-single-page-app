<template>
    <div class="container m-5">
        <form>
            <div class="form-group row mb-3">
                <label for="inputNom" class="col-sm-2 col-form-label">Nom</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputNom" v-model="Nom" placeholder="Nom">
                </div>
            </div>

            <div class="form-group row mb-3">
                <label for="inputTelephone" class="col-sm-2 col-form-label">Telephone</label>
                <div class="col-sm-10">
                    <input type="tel" class="form-control" id="inputTelephone" v-model="Telephone" placeholder="Telephone">
                </div>
            </div>

            <div class="form-group row mb-3">
                <label for="inputIDville" class="col-sm-2 col-form-label">IDville</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="inputIDville" v-model="IDville" placeholder="IDville">
                </div>
            </div>

            <div class="form-group row mb-3">
                <label for="inputAdresse" class="col-sm-2 col-form-label">Adress</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputAdresse" v-model="Adresse" placeholder="Adresse">
                </div>
            </div>

            <button :disabled="IsFormInvalid" type="submit" class="btn btn-primary m-1"
                @click.prevent="addClient()">Submit</button>
            <button type="submit" class="btn btn-danger m-1" @click.prevent="deleteClient()">Supprimer</button>
            <button type="submit" class="btn btn-success m-1" @click.prevent="editeClient()">Modifier</button>
        </form>
    </div>
</template>

<script>
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
        if (this.$route.params.id != 'ajouter') {
            this.getClient();
        }
    },
    mounted() {
        if (this.$route.params.id == 'ajouter') {
            const inputNomElement = document.getElementById("inputNom");
            if (inputNomElement) {
                inputNomElement.focus();
            }
        }
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

            }
        },


        async addClient() {
            if (!this.Nom || !this.Telephone) {
                alert('please fill nom and telephone !');
            }

            const url = `${lienAPIRoot}/clients/${ApiDB}`;
            const client = {
                code_client: Date.now(),
                nom: this.Nom,
                tel: this.Telephone,
                IdVille: this.IDville,
                adresse: this.Adresse
            };

            try {
                await fetch(url, {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(client)
                }).then(() => {
                    alert('Ajoute avec succès');
                    window.location.reload();
                });
            } catch (error) {
                console.log(error);
            }
        },


        async deleteClient() {
            const url = `${lienAPIRoot}/clients/${ApiDB}/${this.$route.params.id}`

            try {
                await fetch(url, { method: 'DELETE' }).then(() => {
                    window.history.back();
                });
            } catch (error) {
                console.log(error);
            }
        },


        async editeClient() {
            const url = `${lienAPIRoot}/clients/${ApiDB}/${this.$route.params.id}`

            try {
                await fetch(url, {
                    method: 'PUT', headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        code_client: this.$route.params.id,
                        nom: this.Nom,
                        tel: this.Telephone,
                        IdVille: this.IDville,
                        adresse: this.Adresse
                    })
                }).then(() => {
                    alert('Modifier avec succès');
                    window.location.reload();
                });
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>