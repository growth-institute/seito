<template>
	<div :style="cssVars" class="dot-spinner">
		<div class="dot-spinner-dot"></div>
		<div class="dot-spinner-dot"></div>
		<div class="dot-spinner-dot"></div>
		<div class="dot-spinner-dot"></div>
		<div class="dot-spinner-dot"></div>
		<div class="dot-spinner-dot"></div>
		<div class="dot-spinner-dot"></div>
		<div class="dot-spinner-dot"></div>
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
				default: 0.9
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-dot-spinner-size': `${ this.size }px`,
					'--loader-dot-spinner-speed': `${ this.speed }s`,
					'--loader-dot-spinner-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.dot-spinner {

		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: var(--loader-dot-spinner-size);
		width: var(--loader-dot-spinner-size);
	}

	.dot-spinner-dot {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
		width: 100%;
	}

	.dot-spinner-dot::before {
		content: '';
		height: 20%;
		width: 20%;
		border-radius: 50%;
		background-color: var(--loader-dot-spinner-color);
		transform: scale(0);
		opacity: 0.5;
		animation: pulse calc(var(--loader-dot-spinner-speed) * 1.111) ease-in-out infinite;
	}

	.dot-spinner-dot:nth-child(2) {
		transform: rotate(45deg);
	}

	.dot-spinner-dot:nth-child(2)::before {
		animation-delay: calc(var(--loader-dot-spinner-speed) * -0.875);
	}

	.dot-spinner-dot:nth-child(3) {
		transform: rotate(90deg);
	}

	.dot-spinner-dot:nth-child(3)::before {
		animation-delay: calc(var(--loader-dot-spinner-speed) * -0.75);
	}

	.dot-spinner-dot:nth-child(4) {
		transform: rotate(135deg);
	}

	.dot-spinner-dot:nth-child(4)::before {
		animation-delay: calc(var(--loader-dot-spinner-speed) * -0.625);
	}

	.dot-spinner-dot:nth-child(5) {
		transform: rotate(180deg);
	}

	.dot-spinner-dot:nth-child(5)::before {
		animation-delay: calc(var(--loader-dot-spinner-speed) * -0.5);
	}

	.dot-spinner-dot:nth-child(6) {
		transform: rotate(225deg);
	}

	.dot-spinner-dot:nth-child(6)::before {
		animation-delay: calc(var(--loader-dot-spinner-speed) * -0.375);
	}

	.dot-spinner-dot:nth-child(7) {
		transform: rotate(270deg);
	}

	.dot-spinner-dot:nth-child(7)::before {
		animation-delay: calc(var(--loader-dot-spinner-speed) * -0.25);
	}

	.dot-spinner-dot:nth-child(8) {
		transform: rotate(315deg);
	}

	.dot-spinner-dot:nth-child(8)::before {
		animation-delay: calc(var(--loader-dot-spinner-speed) * -0.125);
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(0);
			opacity: 0.5;
		}

		50% {
			transform: scale(1);
			opacity: 1;
		}
	}


</style>