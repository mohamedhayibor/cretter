<template>
	<div class="sign-up">
		<p>Create new Cretter account</p>

		<div class="sign-up-template">
			<form class="sign-up-form">
				<input type="text"
					   v-model="email"
					   placeholder="Email"><br>

				<input type="password"
					   v-model="password"
		 			   placeholder="Password"><br>

				<button :click="signUp">Sign Up</button>

				<span>or <router-link to="/login">Login</router-link></span>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "sign-up",
		data: {
			email: "",
			password: "",
		},
		methods: {
			signUp: function () {
				console.log("this.email: ", this.email)
				console.log("this.password: ", this.password)

				console.log("The fuck a programmer is")
				
			}
		}
	}
</script>

<style scoped>
.signUp {
	margin-top: 40px;
}

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
	font-size: 11px;
}
</style>