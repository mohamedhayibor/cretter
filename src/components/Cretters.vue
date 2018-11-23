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
				v-for="(cretter, id) in cretters"
				:key="id"
				color="red lighten-2"
				large>

				<span slot="opposite">{{cretter.username}}</span>

				<v-dialog v-model="dialog" width="600px">
					<a slot="activator" color="primary" dark>
						<v-card class="elevation-2">
							<v-card-text> <strong>{{ cretter.statement }}</strong>
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

				        <v-list>
				        	<template v-for="(question, index) in cretter.questions">

				        		<!-- display for asked questions -->
				        		<v-list-tile :key="index" avatar ripple @click="">
					        		<v-list-tile-content>
					        			<v-list-tile-sub-title> {{question.question}}</v-list-tile-sub-title>
					        		</v-list-tile-content>
					        	</v-list-tile>

				        	</template>
				        </v-list>
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
					 username: "Startup Guru",
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
					id: "43434"}
				]
			};
		},
		methods: {}
	}
</script>

<style scoped>
</style>