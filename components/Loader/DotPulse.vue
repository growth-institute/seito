<template>
	<div :style="cssVars" class="dot-pulse">
		<div class="dot-pulse-dot"></div>
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
				default: 1.3
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-dot-pulse-size': `${ this.size }px`,
					'--loader-dot-pulse-speed': `${ this.speed }s`,
					'--loader-dot-pulse-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.dot-pulse {

		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: var(--loader-dot-pulse-size);
		height: calc(var(--loader-dot-pulse-size) * 0.27);
	}

	.dot-pulse-dot,
	.dot-pulse::before,
	.dot-pulse::after {
		content: '';
		display: block;
		height: calc(var(--loader-dot-pulse-size) * 0.18);
		width: calc(var(--loader-dot-pulse-size) * 0.18);
		border-radius: 50%;
		background-color: var(--loader-dot-pulse-color);
		transform: scale(0);
	}

	.dot-pulse::before {
		animation: pulse var(--loader-dot-pulse-speed) ease-in-out infinite;
	}

	.dot-pulse-dot {
		animation: pulse var(--loader-dot-pulse-speed) ease-in-out
			calc(var(--loader-dot-pulse-speed) * 0.125) infinite both;
	}

	.dot-pulse::after {
		animation: pulse var(--loader-dot-pulse-speed) ease-in-out
			calc(var(--loader-dot-pulse-speed) * 0.25) infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(0);
		}

		50% {
			transform: scale(1.5);
		}
	}

</style>