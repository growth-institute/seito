<template>
	<div :style="cssVars" class="handsprings"></div>
</template>

<script>
	export default {
		props: {
			size: {
				type: [Number, String],
				default: 37
			},
			speed: {
				type: [Number, String],
				default: 2
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
					'--loader-handsprings-size': `${ this.size }px`,
					'--loader-handsprings-speed': `${ this.speed }s`,
					'--loader-handsprings-color': this.color,
					'--loader-handsprings-line-weight': `${ this.lineWeight }px`,
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.handsprings {
		--loader-handsprings-size: 37px;
		--loader-handsprings-speed: 2s;
		--loader-handsprings-color: black;
		--loader-handsprings-line-weight: 5px;

		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--loader-handsprings-line-weight);
		width: calc(var(--loader-handsprings-size) * 2);
		margin-bottom: calc(var(--loader-handsprings-size) * 0.65);
		border-radius: calc(var(--loader-handsprings-line-weight) / 2);
		animation: rotate var(--loader-handsprings-speed) linear infinite;
		overflow: hidden;
	}

	.handsprings::before {
		content: '';
		height: 100%;
		width: 40%;
		border-radius: calc(var(--loader-handsprings-line-weight) / 2);
		animation: wobble var(--loader-handsprings-speed) ease-in-out
			calc(var(--loader-handsprings-speed) * -0.225) infinite;
		transform: translateX(-120%);
		background-color: var(--loader-handsprings-color);
	}

	@keyframes wobble {
		0%,
		100% {
			transform: translateX(-120%);
		}
		50% {
			transform: translateX(120%);
		}
	}

	@keyframes rotate {
		0% {
			transform: translateY(calc(var(--loader-handsprings-size) * -0.125)) rotate(0deg);
		}

		100% {
			transform: translateY(calc(var(--loader-handsprings-size) * -0.125)) rotate(360deg);
		}
	}

</style>