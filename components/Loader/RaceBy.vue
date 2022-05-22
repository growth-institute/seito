<template>
	<div :style="cssVars" class="race-by"></div>
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
				default: 1.4
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
					'--loader-race-by-size': `${ this.size }px`,
					'--loader-race-by-speed': `${ this.speed }s`,
					'--loader-race-by-color': this.color,
					'--loader-race-by-line-weight': `${ this.lineWeight }px`,
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.race-by {

		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--loader-race-by-line-weight);
		width: var(--loader-race-by-size);
		border-radius: calc(var(--loader-race-by-line-weight) / 2);
		overflow: hidden;
		transform: translate3d(0, 0, 0);
	}

	.race-by::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: var(--loader-race-by-color);
		opacity: 0.1;
	}

	.race-by::after {
		content: '';
		height: 100%;
		width: 100%;
		border-radius: calc(var(--loader-race-by-line-weight) / 2);
		animation: raceBy var(--loader-race-by-speed) ease-in-out infinite;
		transform: translateX(-100%);
		background-color: var(--loader-race-by-color);
	}

	@keyframes raceBy {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

</style>