<template>
	<v-layout align-center justify-center>
		<v-flex xs12 sm8 md4>
			<v-card class="elevation-12">

				<v-toolbar dark color="primary">
					<v-toolbar-title>Create an account</v-toolbar-title>
				</v-toolbar>

				<v-card-text>
					<v-form>
						<v-text-field name="email" label="Email" type="text" v-model="email">
						</v-text-field>
						<v-text-field name="password" label="Password" type="password" v-model="password">
						</v-text-field>
					</v-form>
				</v-card-text>

				<v-card-actions>
					<!-- why is it not sliding button to the right -->
					<s-spacer></s-spacer>
					<v-btn name="signup" large color="primary" v-on:click="signUp">Sign Up</v-btn>
				</v-card-actions>

				<v-card-text>or <router-link to="/login">Login</router-link></v-card-text>

			</v-card>
		</v-flex>
	</v-layout>
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
</style>