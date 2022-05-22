<template>
	<div :style="cssVars" class="dot-wave">
		<div class="dot-wave__dot"></div>
		<div class="dot-wave__dot"></div>
		<div class="dot-wave__dot"></div>
		<div class="dot-wave__dot"></div>
	</div>
</template>

<script>
	export default {
		props: {
			size: {
				type: [Number, String],
				default: 47
			},
			speed: {
				type: [Number, String],
				default: 1
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-dot-wave-size': `${ this.size }px`,
					'--loader-dot-wave-speed': `${ this.speed }s`,
					'--loader-dot-wave-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.dot-wave {

		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		width: var(--loader-dot-wave-size);
		height: calc(var(--loader-dot-wave-size) * 0.17);
		padding-top: calc(var(--loader-dot-wave-size) * 0.34);
	}

	.dot-wave__dot {
		flex-shrink: 0;
		width: calc(var(--loader-dot-wave-size) * 0.17);
		height: calc(var(--loader-dot-wave-size) * 0.17);
		border-radius: 50%;
		background-color: var(--loader-dot-wave-color);
		will-change: transform;
	}

	.dot-wave__dot:nth-child(1) {
		animation: jump var(--loader-dot-wave-speed) ease-in-out
			calc(var(--loader-dot-wave-speed) * -0.45) infinite;
	}

	.dot-wave__dot:nth-child(2) {
		animation: jump var(--loader-dot-wave-speed) ease-in-out
			calc(var(--loader-dot-wave-speed) * -0.3) infinite;
	}

	.dot-wave__dot:nth-child(3) {
		animation: jump var(--loader-dot-wave-speed) ease-in-out
			calc(var(--loader-dot-wave-speed) * -0.15) infinite;
	}

	.dot-wave__dot:nth-child(4) {
		animation: jump var(--loader-dot-wave-speed) ease-in-out infinite;
	}

	@keyframes jump {
		0%,
		100% {
			transform: translateY(0px);
		}

		50% {
			transform: translateY(-200%);
		}
	}

</style>