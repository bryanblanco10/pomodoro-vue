<template>
	<button class="button__rounded" @click="onClick">
		<slot />
	</button>
</template>
<script>
	export default{
		name: 'ButtonRoundedComponent',
		methods:{
			onClick(){
				this.$emit('onClick')
			}
		}
	}
</script>
<style type="text/css" scoped>
	.button__rounded
	{
		/*resetear las propiedades por default del boton*/
		all: unset;
		width: 4rem;
		height: 4rem;
		padding: 10px;
		background-color: var(--aplication-color-second);
		border-radius: 50%;
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>