<template>
	<div :style="cssVars" class="line-wobble"></div>
</template>

<script>
	export default {
		props: {
			size: {
				type: [Number, String],
				default: 80
			},
			speed: {
				type: [Number, String],
				default: 1.75
			},
			color: {
				type: String,
				default: 'black'
			},
			lineWeight: {
				type: [Number, String],
				default: 5
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-line-wobble-size': `${ this.size }px`,
					'--loader-line-wobble-speed': `${ this.speed }s`,
					'--loader-line-wobble-color': this.color,
					'--loader-line-wobble-line-weight': `${ this.lineWeight }px`,
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.line-wobble {

		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--loader-line-wobble-line-weight);
		width: var(--loader-line-wobble-size);
		border-radius: calc(var(--loader-line-wobble-line-weight) / 2);
		overflow: hidden;
		transform: translate3d(0, 0, 0);
	}

	.line-wobble::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: var(--loader-line-wobble-color);
		opacity: 0.1;
	}

	.line-wobble::after {
		content: '';
		height: 100%;
		width: 100%;
		border-radius: calc(var(--loader-line-wobble-line-weight) / 2);
		animation: wobble var(--loader-line-wobble-speed) ease-in-out infinite;
		transform: translateX(-95%);
		background-color: var(--loader-line-wobble-color);
	}

	@keyframes wobble {
		0%,
		100% {
			transform: translateX(-95%);
		}
		50% {
			transform: translateX(95%);
		}
	}

</style>