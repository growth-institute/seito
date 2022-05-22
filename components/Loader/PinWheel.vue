<template>
	<div :style="cssVars" class="pinwheel">
		<div class="pinwheel-line"></div>
		<div class="pinwheel-line"></div>
		<div class="pinwheel-line"></div>
		<div class="pinwheel-line"></div>
		<div class="pinwheel-line"></div>
		<div class="pinwheel-line"></div>
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
				default: 1
			},
			color: {
				type: String,
				default: 'black'
			},
			lineWeight: {
				type: [Number, String],
				default: 3.5
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-pinwheel-size': `${ this.size }px`,
					'--loader-pinwheel-speed': `${ this.speed }s`,
					'--loader-pinwheel-color': this.color,
					'--loader-pinwheel-line-weight': `${ this.lineWeight }px`,
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.pinwheel {

		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--loader-pinwheel-size);
		width: var(--loader-pinwheel-size);
	}

	.pinwheel-line {
		position: absolute;
		top: calc(50% - var(--loader-pinwheel-line-weight) / 2);
		left: 0;
		height: var(--loader-pinwheel-line-weight);
		width: 100%;
		border-radius: calc(var(--loader-pinwheel-line-weight) / 2);
		background-color: var(--loader-pinwheel-color);
		animation: rotate var(--loader-pinwheel-speed) ease-in-out infinite;
	}

	.pinwheel-line:nth-child(2) {
		animation-delay: calc(var(--loader-pinwheel-speed) * 0.075);
		opacity: 0.8;
	}

	.pinwheel-line:nth-child(3) {
		animation-delay: calc(var(--loader-pinwheel-speed) * 0.15);
		opacity: 0.6;
	}

	.pinwheel-line:nth-child(4) {
		animation-delay: calc(var(--loader-pinwheel-speed) * 0.225);
		opacity: 0.4;
	}

	.pinwheel-line:nth-child(5) {
		animation-delay: calc(var(--loader-pinwheel-speed) * 0.3);
		opacity: 0.2;
	}

	.pinwheel-line:nth-child(6) {
		animation-delay: calc(var(--loader-pinwheel-speed) * 0.375);
		opacity: 0.1;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(180deg);
		}
	}

</style>