<template>
	<div class="sign-up">
		<p>Create new Cretter account</p>

		<input type="text"
			   v-model="email"
			   name="email"
			   placeholder="Email"><br>

		<input type="password"
			   v-model="password"
			   name="password"
 			   placeholder="Password"><br>

		<button v-on:click="signUp">Sign Up</button>

		<span>or <router-link to="/login">Login</router-link></span>
		
	</div>
</template>

<script>
	export default {
		name: "sign-up",
		data: function () {
			return {
				email: "",
				password: ""
			};
		},
		methods: {
			signUp: function () {
				console.log("this.email: ", this.email);
				console.log("this.password: ", this.password);

				// after successful sign-up go back to cretters
				this.$router.replace('cretters');
			}
		}
	}
</script>

<style scoped>
input {
	margin: 10px 0;
	width: 20%;
	padding: 15px;
}

button {
	margin-top: 20px;
	width: 10%;
	cursor: pointer;
}

span {
	display: block;
	margin-top: 20px;
	font-size: 13px;
}
</style>