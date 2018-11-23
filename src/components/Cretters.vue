<template>

	<!-- Test on statement display -->
	<div>
		<div class="cretters-comp">
			<h1>How about today's Cretters</h1>
			<v-btn fab dark color="indigo">
				<v-icon dark>+</v-icon>
			</v-btn>
		</div>
		<v-timeline>
			<v-timeline-item
				v-for="n in 13"
				:key="n"
				color="red lighten-2"
				large>

				<span slot="opposite">Username</span>
				<!--  --> 

				<v-dialog v-model="dialog" width="600px">
					<a slot="activator" color="primary" dark>
						<v-card class="elevation-2">
							<v-card-text> <strong> Statetement
								Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at</strong>
							</v-card-text>
						</v-card>
					</a>

					<v-card>
						<!-- Questions will be displayed here in this modal
							- Ideally user can curate in 2 way:
								1. Swiping right or left (on Mobile or ipad)
								2. Clicking checkmark or crossmark to approve or reject

							- Hypothesis: users can judge the quality of a question at a glance
						-->

				        <v-card-title>
				        	<ul>
				        		<li>Example question? Example question? Example question?</li>
				        		<li>Example question? Example question? Example question?</li>
				        		<li>Example question? Example question? Example question?</li>
				        		<li>Example question? Example question? Example question?</li>
				        	</ul>
				        	
				        </v-card-title>
				    </v-card>
				</v-dialog>
			</v-timeline-item>
		</v-timeline>
	</div>
</template>


<script>
	export default {
		name: "cretters",
		data () {
			return {
				// dummy static API will surely change
				// statement, questions, answers have score that proxies a user's rep
				cretters: [
					{statement: "Ideas are worthless! Implementation is everything!",
					 questions: [
						{question: "Are all ideas equally worthless?",
						 answer: {
						 	answer: "Some are way better than others, the emphasis here is in implementation",
						 	score: 0},
						 score: 0,
						},
						{question: "Is there a possibility that some have different degree of worthiness than others?",
						 answer: {
						 	answer: "Yes, the emphasis again is on implementation",
						 	score: 0},
						 score: 0
						},
						{question: "How about hustling hard on bad ideas?",
						 answer: {
						 	answer: "You will surely waste your time",
						 	score: 0},
						 score: 0
						}
					],
					score: 0,
					id: "43434"}
				]
			};
		},
		methods: {}
	}
</script>

<style scoped>
</style>