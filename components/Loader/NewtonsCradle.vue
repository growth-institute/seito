<template>
	<div :style="cssVars" class="newtons-cradle">
		<div class="newtons-cradle-dot"></div>
		<div class="newtons-cradle-dot"></div>
		<div class="newtons-cradle-dot"></div>
		<div class="newtons-cradle-dot"></div>
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
				default: 1.4
			},
			color: {
				type: String,
				default: 'black'
			}
		},
		computed: {
			cssVars() {
				return {
					'--loader-newtons-cradle-size': `${ this.size }px`,
					'--loader-newtons-cradle-speed': `${ this.speed }s`,
					'--loader-newtons-cradle-color': this.color
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.newtons-cradle {

		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: var(--loader-newtons-cradle-size);
		height: var(--loader-newtons-cradle-size);
	}

	.newtons-cradle-dot {
		position: relative;
		display: flex;
		align-items: center;
		height: 100%;
		width: 25%;
		transform-origin: center top;
	}

	.newtons-cradle-dot::after {
		content: '';
		display: block;
		width: 100%;
		height: 25%;
		border-radius: 50%;
		background-color: var(--loader-newtons-cradle-color);
	}

	.newtons-cradle-dot:first-child {
		animation: swing var(--loader-newtons-cradle-speed) linear infinite;
	}

	.newtons-cradle-dot:last-child {
		animation: swing2 var(--loader-newtons-cradle-speed) linear infinite;
	}

	@keyframes swing {
		0% {
			transform: rotate(0deg);
			animation-timing-function: ease-out;
		}

		25% {
			transform: rotate(70deg);
			animation-timing-function: ease-in;
		}

		50% {
			transform: rotate(0deg);
			animation-timing-function: linear;
		}
	}

	@keyframes swing2 {
		0% {
			transform: rotate(0deg);
			animation-timing-function: linear;
		}

		50% {
			transform: rotate(0deg);
			animation-timing-function: ease-out;
		}

		75% {
			transform: rotate(-70deg);
			animation-timing-function: ease-in;
		}
	}

</style>