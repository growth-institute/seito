<template>
	<section class="section section-login">
		<div class="login-area">
			<nuxt-child />
		</div>
		<div class="pretty-area">

		</div>
	</section>
</template>

<script>
	export default {
		name: 'LoginPage',
		data: () => ({}),
		mounted() {},
		methods: {}
	};
</script>

<style scoped lang="less">

	.login-area {

		background: @body-background;
		flex-basis: 50%;
		max-width: 600px;
	}

	.pretty-area {

		background: @-gray-surface;
		flex-basis: 50%;
		flex: 1 0 auto;
	}

</style>