<template>
	<div :style="cssVars" class="mr-miyagi">
		<div class="mr-miyagi-line"></div>
		<div class="mr-miyagi-line"></div>
		<div class="mr-miyagi-line"></div>
		<div class="mr-miyagi-line"></div>
		<div class="mr-miyagi-line"></div>
		<div class="mr-miyagi-line"></div>
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
					'--loader-mr-miyagi-size': `${ this.size }px`,
					'--loader-mr-miyagi-speed': `${ this.speed }s`,
					'--loader-mr-miyagi-color': this.color,
					'--loader-mr-miyagi-line-weight': `${ this.lineWeight }px`,
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.mr-miyagi {

		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--loader-mr-miyagi-size);
		width: var(--loader-mr-miyagi-size);
	}

	.mr-miyagi-line {
		position: absolute;
		top: calc(50% - var(--loader-mr-miyagi-line-weight) / 2);
		left: 0;
		height: var(--loader-mr-miyagi-line-weight);
		width: 100%;
		border-radius: calc(var(--loader-mr-miyagi-line-weight) / 2);
		background-color: var(--loader-mr-miyagi-color);
		animation: rotate var(--loader-mr-miyagi-speed) ease-in-out infinite alternate;
	}

	.mr-miyagi-line:nth-child(2) {
		animation-delay: calc(var(--loader-mr-miyagi-speed) * 0.075);
		opacity: 0.8;
	}

	.mr-miyagi-line:nth-child(3) {
		animation-delay: calc(var(--loader-mr-miyagi-speed) * 0.15);
		opacity: 0.6;
	}

	.mr-miyagi-line:nth-child(4) {
		animation-delay: calc(var(--loader-mr-miyagi-speed) * 0.225);
		opacity: 0.4;
	}

	.mr-miyagi-line:nth-child(5) {
		animation-delay: calc(var(--loader-mr-miyagi-speed) * 0.3);
		opacity: 0.2;
	}

	.mr-miyagi-line:nth-child(6) {
		animation-delay: calc(var(--loader-mr-miyagi-speed) * 0.375);
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