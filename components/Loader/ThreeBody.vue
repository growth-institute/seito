<template>
	<div :style="cssVars" class="three-body">
		<div class="three-body-dot"></div>
		<div class="three-body-dot"></div>
		<div class="three-body-dot"></div>
	</div>
</template>

<script>
	export default {
		props: {
			size: {
				type: [Number, String],
				default: 35
			},
			speed: {
				type: [Number, String],
				default: 1.1
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-three-body-size': `${ this.size }px`,
					'--loader-three-body-speed': `${ this.speed }s`,
					'--loader-three-body-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.three-body {

		position: relative;
		display: inline-block;
		height: var(--loader-three-body-size);
		width: var(--loader-three-body-size);
		animation: spin calc(var(--loader-three-body-speed) * 2.5) infinite linear;
	}

	.three-body-dot {
		position: absolute;
		height: 100%;
		width: 30%;
	}

	.three-body-dot:after {
		content: '';
		position: absolute;
		height: 0%;
		width: 100%;
		padding-bottom: 100%;
		background-color: var(--loader-three-body-color);
		border-radius: 50%;
	}

	.three-body-dot:nth-child(1) {
		bottom: 5%;
		left: 0;
		transform: rotate(60deg);
		transform-origin: 50% 85%;
	}

	.three-body-dot:nth-child(1)::after {
		bottom: 0;
		left: 0;
		animation: wobble1 var(--loader-three-body-speed) infinite ease-in-out;
		animation-delay: calc(var(--loader-three-body-speed) * -0.3);
	}

	.three-body-dot:nth-child(2) {
		bottom: 5%;
		right: 0;
		transform: rotate(-60deg);
		transform-origin: 50% 85%;
	}

	.three-body-dot:nth-child(2)::after {
		bottom: 0;
		left: 0;
		animation: wobble1 var(--loader-three-body-speed) infinite
			calc(var(--loader-three-body-speed) * -0.15) ease-in-out;
	}

	.three-body-dot:nth-child(3) {
		bottom: -5%;
		left: 0;
		transform: translateX(116.666%);
	}

	.three-body-dot:nth-child(3)::after {
		top: 0;
		left: 0;
		animation: wobble2 var(--loader-three-body-speed) infinite ease-in-out;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes wobble1 {
		0%,
		100% {
			transform: translateY(0%) scale(1);
			opacity: 1;
		}
		50% {
			transform: translateY(-66%) scale(0.65);
			opacity: 0.8;
		}
	}

	@keyframes wobble2 {
		0%,
		100% {
			transform: translateY(0%) scale(1);
			opacity: 1;
		}
		50% {
			transform: translateY(66%) scale(0.65);
			opacity: 0.8;
		}
	}

</style>