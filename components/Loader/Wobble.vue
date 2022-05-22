<template>
	<div :style="cssVars" class="wobble"></div>
</template>

<script>
	export default {
		props: {
			size: {
				type: [Number, String],
				default: 45
			},
			lineWeight: {
				type: [Number, String],
				default: 3.5
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
					'--loader-wobble-size': `${ this.size }px`,
					'--loader-wobble-speed': `${ this.speed }s`,
					'--loader-wobble-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.wobble {

		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: var(--loader-wobble-size);
		width: var(--loader-wobble-size);
	}

	.wobble::before {
		content: '';
		height: 25%;
		width: 25%;
		border-radius: 50%;
		animation: wobble var(--loader-wobble-speed) ease-in-out infinite;
		transform: translate(0, calc(var(--loader-wobble-size) * -0.4));
		background-color: var(--loader-wobble-color);
	}

	@keyframes wobble {
		0%,
		100% {
			transform: translateX(0);
		}

		50% {
			transform: translateX(calc(var(--loader-wobble-size) * 0.75));
		}
	}

</style>