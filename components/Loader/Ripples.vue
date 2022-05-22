<template>
	<div :style="cssVars" class="ripples">
		<div class="ripples-dot"></div>
	</div>
</template>

<script>
	export default {
		props: {
			size: {
				type: [Number, String],
				default: 45
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
					'--loader-ripples-size': `${ this.size }px`,
					'--loader-ripples-speed': `${ this.speed }s`,
					'--loader-ripples-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.ripples {

		position: relative;
		height: var(--loader-ripples-size);
		width: var(--loader-ripples-size);
	}

	.ripples::before,
	.ripples::after,
	.ripples-dot::before,
	.ripples-dot::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		background-color: var(--loader-ripples-color);
		animation: pulse var(--loader-ripples-speed) linear infinite;
		transform: scale(0);
		opacity: 0;
	}

	.ripples::after {
		animation-delay: calc(var(--loader-ripples-speed) / -4);
	}

	.ripples-dot::before {
		animation-delay: calc(var(--loader-ripples-speed) * -0.5);
	}

	.ripples-dot::after {
		animation-delay: calc(var(--loader-ripples-speed) * -0.75);
	}

	@keyframes pulse {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}

</style>