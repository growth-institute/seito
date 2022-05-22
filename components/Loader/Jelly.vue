<template>
	<div :style="cssVars">
		<div class="jelly"></div>

		<svg width="0" height="0" class="jelly-maker">
			<defs>
				<filter id="loader-jelly-jelly-ooze">
					<feGaussianBlur
						in="SourceGraphic"
						stdDeviation="6.25"
						result="blur"
					/>
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
						result="ooze"
					/>
					<feBlend in="SourceGraphic" in2="ooze" />
				</filter>
			</defs>
		</svg>
	</div>
</template>

<script>
	export default {
		props: {
			size: {
				type: [Number, String],
				default: 50
			},
			speed: {
				type: [Number, String],
				default: 0.9
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-jelly-size': `${ this.size }px`,
					'--loader-jelly-speed': `${ this.speed }s`,
					'--loader-jelly-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.jelly {

		position: relative;
		height: calc(var(--loader-jelly-size) / 2);
		width: var(--loader-jelly-size);
		filter: url('#loader-jelly-jelly-ooze');
		animation: rotate calc(var(--loader-jelly-speed) * 2) linear infinite;
	}

	.jelly::before,
	.jelly::after {
		content: '';
		position: absolute;
		top: 0%;
		left: 25%;
		width: 50%;
		height: 100%;
		background: var(--loader-jelly-color);
		border-radius: 100%;
	}

	.jelly::before {
		animation: shift-left var(--loader-jelly-speed) ease infinite;
	}

	.jelly::after {
		animation: shift-right var(--loader-jelly-speed) ease infinite;
	}

	.jelly-maker {
		width: 0;
		height: 0;
		position: absolute;
	}

	@keyframes rotate {
		0%,
		49.999%,
		100% {
			transform: none;
		}

		50%,
		99.999% {
			transform: rotate(90deg);
		}
	}

	@keyframes shift-left {
		0%,
		100% {
			transform: translateX(0%);
		}
		50% {
			transform: scale(0.65) translateX(-75%);
		}
	}

	@keyframes shift-right {
		0%,
		100% {
			transform: translateX(0%);
		}
		50% {
			transform: scale(0.65) translateX(75%);
		}
	}

</style>