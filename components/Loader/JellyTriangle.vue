<template>
	<div :style="cssVars">
		<div class="jelly-triangle">
			<div class="jelly-triangle-dot" ></div>
			<div class="jelly-triangle-traveler" ></div>
		</div>

		<svg width="0" height="0" class="jelly-maker">
			<defs>
				<filter id="uib-jelly-triangle-ooze">
					<feGaussianBlur
						in="SourceGraphic"
						stdDeviation="7.3"
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
				default: 44
			},
			speed: {
				type: [Number, String],
				default: 1.75
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-jelly-triangle-size': `${ this.size }px`,
					'--loader-jelly-triangle-speed': `${ this.speed }s`,
					'--loader-jelly-triangle-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.jelly-triangle {

		position: relative;
		height: var(--loader-jelly-triangle-size);
		width: var(--loader-jelly-triangle-size);
		filter: url('#uib-jelly-triangle-ooze');
	}

	.jelly-triangle-dot,
	.jelly-triangle::before,
	.jelly-triangle::after{
		content: '';
		position: absolute;
		width: 33%;
		height: 33%;
		background: var(--loader-jelly-triangle-color);
		border-radius: 100%;
	}

	.jelly-triangle-dot {
		top: 6%;
		left: 30%;
		animation: grow var(--loader-jelly-triangle-speed) ease infinite;
	}

	.jelly-triangle::before {
		bottom: 6%;
		right: 0;
		animation: grow var(--loader-jelly-triangle-speed) ease calc(var(--loader-jelly-triangle-speed) * -0.666)
			infinite;
	}

	.jelly-triangle::after {
		bottom: 6%;
		left: 0;
		animation: grow var(--loader-jelly-triangle-speed) ease calc(var(--loader-jelly-triangle-speed) * -0.333)
			infinite;
	}

	.jelly-triangle-traveler {
		position: absolute;
		top: 6%;
		left: 30%;
		width: 33%;
		height: 33%;
		background: var(--loader-jelly-triangle-color);
		border-radius: 100%;
		animation: triangulate var(--loader-jelly-triangle-speed) ease infinite;
	}

	.jelly-maker {
		width: 0;
		height: 0;
		position: absolute;
	}

	@keyframes triangulate {
		0%,
		100% {
			transform: none;
		}

		33.333% {
			transform: translate(120%, 175%);
		}

		66.666% {
			transform: translate(-95%, 175%);
		}
	}

	@keyframes grow {
		0%,
		100% {
			transform: scale(1.5);
		}

		20%,
		70% {
			transform: none;
		}
	}

</style>