<template>
	<!--
		v-spacer: to fill available space
		or make space btw 2 components -->

	<v-layout align-center justify-center>
		<v-flex xs12 sm8 md4>
			<v-card class="elevation-12">
				
				<v-toolbar dark color="primary">
					<v-toolbar-title>Login</v-toolbar-title>
				</v-toolbar>

				<v-card-text>
					<v-form>
						<v-text-field name="email" label="Email" type="text" v-model="email">
						</v-text-field>
						<v-text-field name="password" label="Password" type="password" v-model="password"></v-text-field>
					</v-form>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn name="signin" large color="primary" v-on:click="login">Sign In</v-btn>
				</v-card-actions>

				<v-card-text>You don't have an account? <router-link to="/sign-up">Create one</router-link></v-card-text>

			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		name: 'login',
		data: function () {
			return {
				email: "",
				password: ""
			};
		},
		methods: {
			login: function() {
				console.log("this.email: ", this.email);
				console.log("this.password: ", this.password);

				// after successful login go back to cretters
				this.$router.replace('cretters');
			}
		}
	}
</script>

<style scoped>
</style>