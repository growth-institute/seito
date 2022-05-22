<template>
	<div :style="cssVars" class="metronome">
		<div class="metronome-dot"></div>
		<div class="metronome-dot"></div>
		<div class="metronome-dot"></div>
		<div class="metronome-dot"></div>
	</div>
</template>

<script>
	export default {
		props: {
			size: {
				type: [Number, String],
				default: 40
			},
			speed: {
				type: [Number, String],
				default: 1.6
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-metronome-size': `${ this.size }px`,
					'--loader-metronome-speed': `${ this.speed }s`,
					'--loader-metronome-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.metronome {
		--loader-metronome-size: 40px;
		--loader-metronome-speed: 1.6s;
		--loader-metronome-color: black;

		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: var(--loader-metronome-size);
		width: var(--loader-metronome-size);
	}

	.metronome-dot {
		position: absolute;
		top: 13.5%;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
		width: 100%;
		animation: swing var(--loader-metronome-speed) linear infinite;
	}

	.metronome-dot::before {
		content: '';
		height: 25%;
		width: 25%;
		border-radius: 50%;
		background-color: var(--loader-metronome-color);
	}

	.metronome-dot:nth-child(1) {
		animation-delay: calc(var(--loader-metronome-speed) * -0.36);
	}

	.metronome-dot:nth-child(2) {
		animation-delay: calc(var(--loader-metronome-speed) * -0.27);
		opacity: 0.8;
	}

	.metronome-dot:nth-child(2)::before {
		transform: scale(0.9);
	}

	.metronome-dot:nth-child(3) {
		animation-delay: calc(var(--loader-metronome-speed) * -0.18);
		opacity: 0.6;
	}

	.metronome-dot:nth-child(3)::before {
		transform: scale(0.8);
	}

	.metronome-dot:nth-child(4) {
		animation-delay: calc(var(--loader-metronome-speed) * -0.09);
		opacity: 0.4;
	}

	.metronome-dot:nth-child(4)::before {
		transform: scale(0.7);
	}

	@keyframes swing {
		0% {
			transform: rotate(0deg);
		}

		15% {
			transform: rotate(0deg);
		}

		50% {
			transform: rotate(180deg);
		}

		65% {
			transform: rotate(180deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}

</style>