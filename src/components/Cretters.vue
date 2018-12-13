<template>
	<div>
		<div class="submitACretterMsg">
			<v-layout align-center justify-center>
				<h1>Submit a cretter</h1>
			</v-layout>
		</div>

		<div class="cretters-comp">
			<v-layout align-center justify-center>
				<v-flex xs6>
					<v-textarea
						box
						name="cretter-input"
						label="Submit a statement"
						:rules="statementRules"
						v-model="newStatement"
						v-on:keyup.13.prevent="addNewStatement"
						value="">
					</v-textarea>
				</v-flex>
			</v-layout>
		</div>

		<br>

		<div class="greeting">
			<v-layout align-center justify-center>
				<h1>How about today's Cretters?</h1>
			</v-layout>
		</div>

		<v-timeline>
			<v-timeline-item
				v-for="(cretter, cretterId) in cretters"
				:key="cretterId"
				color="red lighten-2"
				large>

				<span slot="opposite">{{cretter.username}}</span>

				<v-dialog width="600px">
					<a slot="activator" color="primary" dark>
						<v-card class="elevation-2">
							<v-card-text>
								<strong>{{ cretter.statement }}</strong>
							</v-card-text>

						</v-card>

						<v-badge color="blue">
							<span slot="badge">{{ cretter.questions.length }}</span>
						</v-badge>
					</a>

					<v-card>
						<!-- Questions will be displayed here in this modal
							- Ideally user can curate in 2 way:
								1. Swiping right or left (on Mobile or ipad)
								2. Clicking checkmark or crossmark to approve or reject

							- Hypothesis: users can judge the quality of a question at a glance
							avatar ripple
						-->

						<!-- display for asked questions -->
				        <v-list>
				        	<template v-for="(question, index) in cretter.questions">
				        		<v-list-tile :key="index">
					        		<v-list-tile-content>
					        			<v-list-tile-sub-title> {{question.question}}</v-list-tile-sub-title>
					        		</v-list-tile-content>
					        	</v-list-tile>
				        	</template>
				        </v-list>

				        <!-- divider -->
				        <form v-on:submit.prevent>
					        <v-toolbar color="blue lighten-4">
								<v-flex>
									<v-text-field
										label="Ask a question"
										:rules="questionRules"
										v-model="newQuestion"
										v-on:keyup.13.prevent="addNewQuestion(cretterId)">	
									</v-text-field>
								</v-flex>
							</v-toolbar>
						</form>
				    </v-card>
				</v-dialog>
			</v-timeline-item>
		</v-timeline>
	</div>
</template>


<script>
	export default {
		name: "cretters",
		methods: {
			addNewQuestion(cretterId) {
				// only submit qualifying question
				if (this.newQuestion.trim().length >= 13 &&
					this.newQuestion.trim().length < 131 &&
					this.newQuestion.trim().endsWith('?')) {

					this.cretters[cretterId].questions.push({
						question: this.newQuestion.trim(),
						answer: {},
						score: 0
					});

					// increase statement's score
					this.cretters[cretterId].score++;

					this.newQuestion = '';
				}
			},
			addNewStatement() {
				// dont submit too short or too long, empty statements
				if (this.newStatement.trim().length >= 13 &&
					this.newStatement.trim().length <= 220) {
					this.cretters.push({
						id: 0,
						score: 0,
						username: "Anonymous",
						statement: this.newStatement.trim(),
						questions: []
					});

					this.newStatement = "";	
				}
				
			}
		},
		data () {
			return {
				// dummy static API will surely change
				// statement, questions, answers have score that proxies a user's rep
				newStatement: '',
				newQuestion: '',
				questionRules: [
					v => !!v || "A question cannot be empty",
					v => v.length >= 13 || "A question must be 13 characters or more",
					v => v.length <= 130 || "Questions must be 130 characters or less", 
					v => v.endsWith('?') || "Questions must end with a question mark"
				],
				statementRules: [
					v => !!v || "A statement cannot be empty",
					v => v.length >= 13 || "Statements must be 13 characters or more",
					v => v.length <= 220 || "Statements must be 220 characters or less"
				],
				cretters: [
					{statement: "Ideas are worthless! Implementation is everything!",
					 username: "Startup KnowItAll",
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
					id: "43434"},
					{statement: "More responsibility, more meaning",
					 username: "Jordan Peterson",
					 questions: [
						{question: "Have you considered the wisdom: 'More is Less'?",
						 answer: {
						 	answer: "If you want peace of mind, probably take less responsibility",
						 	score: 0},
						 score: 0,
						},
						{question: "What if 'more' leads to neurosis and unsustainable anxiety?",
						 answer: {
						 	answer: "It's up to the individual to decide how much to take in, in both responsibility and meaning.",
						 	score: 0},
						 score: 0
						},
						{question: "Can anybody live with zero responsibility?",
						 answer: {
						 	answer: "I guess yes, but that life would be completely meaningless",
						 	score: 0},
						 score: 0
						},
						{question: "What's the maximum?",
						 answer: {
						 	answer: "Only God knows.",
						 	score: 0},
						 score: 0
						}
					],
					score: 0,
					id: "43434"},
					{statement: "More money is more power",
					 username: "Clueless Idiot",
					 questions: [
						{question: "Money can become meaningless, what if there is only a bottle of water left? Who has power?",
						 answer: {},
						 score: 0,
						},
						{question: "Can you buy authentic relationships with money?",
						 answer: {},
						 score: 0
						},
						{question: "Can you breath money, can you make love to it?",
						 answer: {},
						 score: 0
						}
					],
					score: 0,
					id: "43434"},
					{statement: "Work destroys your soul by stealthily invading your brain during the hours not officially spent working; be selective about professions.",
					 username: "N Taleb",
					 questions: [
						{question: "you mean for only unengaging work?",
						 answer: {},
						 score: 0,
						},
						{question: "Isn't that a feature for engaging and creative work",
						 answer: {},
						 score: 0
						}
					],
					score: 0,
					id: "43434"},
					{statement: "Probably, the most important part in overcoming overgeneralizing, is to persist in questioning your assumptions and shifting your awareness",
					 username: "Manisha Agarwal",
					 questions: [
						{question: "Is good, or true enough, enough?",
						 answer: {},
						 score: 0,
						},
						{question: "Is awareness the most important thing here?",
						 answer: {},
						 score: 0
						}
					],
					score: 0,
					id: "43434"},
					{statement: "If you don’t want to have a boss, you better be capable in the wild.",
					 username: "Angela Jiang",
					 questions: [
						{question: "Is being able to work with others superior in this case?",
						 answer: {},
						 score: 0,
						},
						{question: "With this, how do you get off the 'one man' show mindset?",
						 answer: {},
						 score: 0
						}
					],
					score: 0,
					id: "43434"},
					{statement: "The more demanding, within the bounds of reason, gets the most respect and attention.",
					 username: "Moooooo",
					 questions: [
						{question: "What about the suddle art of not being a pain in the butt?",
						 answer: {},
						 score: 0,
						},
						{question: "Does more demanding fit with the advice of being kind?",
						 answer: {},
						 score: 0
						}
					],
					score: 0,
					id: "43434"},
					{statement: "Coffee is dead, long live dark chocolates and tea",
					 username: "Moooooo",
					 questions: [
						{question: "Aren't that just different ways of consuming caffeine?",
						 answer: {},
						 score: 0,
						},
						{question: "What's the striking advantage of mixing dark chocolates and tea?",
						 answer: {},
						 score: 0
						},
						{question: "How about just eliminating caffeine altogether?",
						 answer: {},
						 score: 0
						}
					],
					score: 0,
					id: "43434"},
				]
			};
		}
	}
</script>

<style scoped>
</style>