<template>
	<div id="app">
		<h1>{{msg}}</h1>
		<img src="./assets/logo.png">
		<Form />
		<Lista />
	</div>
</template>

<script>
import Form from './Component/Form.vue';
import Lista from './Component/Lista.vue';

export default {
	name: 'app',
	components: {
		Form,
		Lista,
	},
	data() {
		return {
			msg: 'Teste Vue.js - Contabilizei',
		};
	},
};
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
