<template>
    <div>
        <b-container>
            <b-row>
                <b-col md="8" offset-md="2">

                    <b-form>

                        <b-form-group>
                            <b-form-input id="nome"
                                    type="text"
                                    v-model="form.nome"
                                    required
                                    placeholder="Nome">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group>
                            <b-form-input id="exampleInput2"
                                    type="text"
                                    v-model="form.sobrenome"
                                    required
                                    placeholder="Sobrenome">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group>                        
                            <b-form-select id="exampleInput3"
                                    :options="cargos"
                                    required
                                    v-model="form.cargo">
                            </b-form-select>
                        </b-form-group>

                        <b-button type="reset" variant="danger">Limpar</b-button>
                        <b-button v-on:click="greet" variant="success">Enviar</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data () {
        return {
            form: {
                nome: '',
                sobrenome: '',
                cargo: null
            },
            cargos: [
                { text: 'Selecione', value: null },
                'Web Designer', 'Front-end', 'Back-end', 'UX'
            ],
            show: true
        }
    },
    methods: {
        greet: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.form));

            fetch("http://localhost:3000/api/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.form)
            }).then(function(res){ console.log(res) }).catch(function(res){ console.log(res) })
        },
        onSubmit (evt) {
            evt.preventDefault();       
        },
        onReset (evt) {
            evt.preventDefault();

            this.form.sobrenome = '';
            this.form.nome = '';
            this.form.cargos = null;
            this.form.checked = [];

            this.show = false;
            this.$nextTick(() => { 
                this.show = true 
            });
        }
    }
}
</script>

