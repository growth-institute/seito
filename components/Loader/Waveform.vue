<template>
	<div :style="cssVars" class="waveform">
		<div class="waveform-bar"></div>
		<div class="waveform-bar"></div>
		<div class="waveform-bar"></div>
		<div class="waveform-bar"></div>
	</div>
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
				default: 3.5
			},
			speed: {
				type: [Number, String],
				default: 1
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-waveform-size': `${ this.size }px`,
					'--loader-waveform-speed': `${ this.speed }s`,
					'--loader-waveform-color': this.color,
					'--loader-waveform-line-weight': `${ this.lineWeight }px`
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.waveform {

		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;
		width: var(--loader-waveform-size);
		height: calc(var(--loader-waveform-size) * 0.9);
	}

	.waveform-bar {

		width: var(--loader-waveform-line-weight);
		height: 100%;
		background-color: var(--loader-waveform-color);
	}

	.waveform-bar:nth-child(1) {

		animation: grow var(--loader-waveform-speed) ease-in-out
			calc(var(--loader-waveform-speed) * -0.45) infinite;
	}

	.waveform-bar:nth-child(2) {

		animation: grow var(--loader-waveform-speed) ease-in-out
			calc(var(--loader-waveform-speed) * -0.3) infinite;
	}

	.waveform-bar:nth-child(3) {

		animation: grow var(--loader-waveform-speed) ease-in-out
			calc(var(--loader-waveform-speed) * -0.15) infinite;
	}

	.waveform-bar:nth-child(4) {

		animation: grow var(--loader-waveform-speed) ease-in-out infinite;
	}

	@keyframes grow {
		0%,
		100% {
			transform: scaleY(0.3);
		}

		50% {
			transform: scaleY(1);
		}
	}

</style>