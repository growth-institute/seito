<template>
	<div :style="cssVars" class="ping"></div>
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
					'--loader-ping-size': `${ this.size }px`,
					'--loader-ping-speed': `${ this.speed }s`,
					'--loader-ping-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.ping {

		position: relative;
		height: var(--loader-ping-size);
		width: var(--loader-ping-size);
	}

	.ping::before,
	.ping::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		background-color: var(--loader-ping-color);
		animation: pulse var(--loader-ping-speed) linear infinite;
		transform: scale(0);
		opacity: 0;
	}

	.ping::after {
		animation-delay: calc(var(--loader-ping-speed) / -2);
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