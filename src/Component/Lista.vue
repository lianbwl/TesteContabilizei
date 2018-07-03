<template>
    <div class="listaContainer">
        <b-container>
            <b-row>
                <b-col md="8" offset-md="2">
                	<b-table striped hover :items="items" :fields="fields"></b-table>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
const items = [
	{ isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
	{ isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
	{ isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
	{ isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
];

export default {
	data() {
		return {
			fields: [
				{
					key: 'nome',
					sortable: true,
				},
				{
					key: 'sobrenome',
					sortable: false,
				},
				{
					key: 'cargo',
					label: 'Cargos',
					sortable: true,
					// Variant applies to the whole column, including the header and footer
					variant: 'danger',
				},
			],
			items: [],
		};
	},
	created: function() {
		fetch('http://localhost:3000/api/jobs', {
			method: 'GET',
		})
		.then(res => res.json())
		.then(items => (this.items = items));
	},
};
</script>

<style>
.listaContainer {
	margin-top: 2rem;
}
</style>
