<template>
	<div :style="cssVars" class="momentum"></div>
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
					'--loader-momentum-size': `${ this.size }px`,
					'--loader-momentum-speed': `${ this.speed }s`,
					'--loader-momentum-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.momentum {

		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--loader-momentum-size);
		width: var(--loader-momentum-size);
		animation: rotate var(--loader-momentum-speed) linear infinite;
	}

	.momentum::before,
	.momentum::after {
		content: '';
		height: 25%;
		width: 25%;
		border-radius: 50%;
		background-color: var(--loader-momentum-color);
	}

	.momentum::before {
		animation: wobble2 calc(var(--loader-momentum-speed) * 1.25) ease-in-out infinite;
	}

	.momentum::after {
		animation: wobble calc(var(--loader-momentum-speed) * 1.25) ease-in-out infinite;
	}

	.momentum::before {
		margin-right: 10%;
	}

	@keyframes wobble {
		0%,
		100% {
			transform: translateX(0);
		}

		50% {
			transform: translateX(calc(var(--loader-momentum-size) * 0.2)) scale(1.1);
		}
	}

	@keyframes wobble2 {
		0%,
		100% {
			transform: translateX(0);
		}

		50% {
			transform: translateX(calc(var(--loader-momentum-size) * -0.2)) scale(1.1);
		}
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

</style>