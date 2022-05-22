<template>
	<div :style="cssVars" class="pulsar"></div>
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
				default: 1.75
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-pulsar-size': `${ this.size }px`,
					'--loader-pulsar-speed': `${ this.speed }s`,
					'--loader-pulsar-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.pulsar {

		position: relative;
		height: var(--loader-pulsar-size);
		width: var(--loader-pulsar-size);
	}

	.pulsar::before,
	.pulsar::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		background-color: var(--loader-pulsar-color);
		animation: pulse var(--loader-pulsar-speed) ease-in-out infinite;
		transform: scale(0);
	}

	.pulsar::after {
		animation-delay: calc(var(--loader-pulsar-speed) / -2);
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(0);
			opacity: 1;
		}
		50% {
			transform: scale(1);
			opacity: 0.25;
		}
	}

</style>