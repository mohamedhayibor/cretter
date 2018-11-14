<template>
	<div class="login">
		<h3>Sign in</h3>
		<input type="text" name="Email" placeholder="Email"><br>
		<input type="text" name="Password" placeholder="Password"><br>
		<button v-on:click="login">Sign In</button>
		<p>You don't have an account? <router-link to="/sign-up">Create one</router-link></p>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data: function () {
			return {}
		},
		methods: {
			login: function() {
				this.$router.replace('cretters');
			}
		}
	}
</script>

<style scoped>
.login {
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

p {
	margin-top: 40px;
	font-size: 13px;
}

p a {
	text-decoration: underline;
	cursor: pointer;
}
<style>