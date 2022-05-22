<template>
	<div :style="cssVars" class="leap-frog">
		<div class="leap-frog-dot"></div>
		<div class="leap-frog-dot"></div>
		<div class="leap-frog-dot"></div>
	</div>
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
				default: 2.5
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-leap-frog-size': `${ this.size }px`,
					'--loader-leap-frog-speed': `${ this.speed }s`,
					'--loader-leap-frog-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.leap-frog {

		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: var(--loader-leap-frog-size);
		height: var(--loader-leap-frog-size);
	}

	.leap-frog-dot {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
	}

	.leap-frog-dot::before {
		content: '';
		display: block;
		height: calc(var(--loader-leap-frog-size) * 0.22);
		width: calc(var(--loader-leap-frog-size) * 0.22);
		border-radius: 50%;
		background-color: var(--loader-leap-frog-color);
		will-change: transform;
	}

	.leap-frog-dot:nth-child(1) {
		animation: leapFrog var(--loader-leap-frog-speed) ease infinite;
	}

	.leap-frog-dot:nth-child(2) {
		transform: translateX(calc(var(--loader-leap-frog-size) * 0.4));
		animation: leapFrog var(--loader-leap-frog-speed) ease calc(var(--loader-leap-frog-speed) / -1.5)
			infinite;
	}

	.leap-frog-dot:nth-child(3) {
		transform: translateX(calc(var(--loader-leap-frog-size) * 0.8)) rotate(0deg);
		animation: leapFrog var(--loader-leap-frog-speed) ease calc(var(--loader-leap-frog-speed) / -3)
			infinite;
	}

	@keyframes leapFrog {
		0% {
			transform: translateX(0) rotate(0deg);
		}

		33.333% {
			transform: translateX(0) rotate(180deg);
		}

		66.666% {
			transform: translateX(calc(var(--loader-leap-frog-size) * -0.4)) rotate(180deg);
		}

		99.999% {
			transform: translateX(calc(var(--loader-leap-frog-size) * -0.8)) rotate(180deg);
		}

		100% {
			transform: translateX(0) rotate(0deg);
		}
	}

</style>