<template>
	<svg
		:style="cssVars"
		class="ring"
		viewBox="25 25 50 50"
		:stroke-width="lineWeight"
	>
		<circle cx="50" cy="50" r="20" />
	</svg>
</template>

<script>
	export default {
		props: {
			size: {
				type: [Number, String],
				default: 40
			},
			lineWeight: {
				type: [Number, String],
				default: 5
			},
			speed: {
				type: [Number, String],
				default: 2
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-ring-size': `${ this.size }px`,
					'--loader-ring-speed': `${ this.speed }s`,
					'--loader-ring-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.ring {

		height: var(--loader-ring-size);
		width: var(--loader-ring-size);
		vertical-align: middle;
		transform-origin: center;
		animation: rotate var(--loader-ring-speed) linear infinite;
	}

	.ring circle {
		fill: none;
		stroke: var(--loader-ring-color);
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
		stroke-linecap: round;
		animation: stretch calc(var(--loader-ring-speed) * 0.75) ease-in-out infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes stretch {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 200;
			stroke-dashoffset: -35px;
		}
		100% {
			stroke-dashoffset: -124px;
		}
	}

</style>