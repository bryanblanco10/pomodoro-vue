<template>
	<button class="button" @click="onClick">
		<slot />
	</button>
</template>
<script>
	export default{
		name: 'ButtonComponent',
		methods:{
			onClick(){
				this.$emit('onClick')
			}
		}
	}
</script>
<style type="text/css" scoped>
	.button
	{
		/*resetear las propiedades por default del boton*/
		all: unset;
		width: 100%;
		padding: 10px;
		font-weight: 500;
		letter-spacing: 1px;
		background-color: var(--aplication-color-second);
		border-radius: 5px;
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
		text-transform: uppercase;
		cursor: pointer;
	}
</style>