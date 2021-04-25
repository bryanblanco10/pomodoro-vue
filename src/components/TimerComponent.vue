<template>
	<section>{{minutes}} : {{seconds}}</section>
</template>
<script>
	export default{
		name: 'TimerComponent',
		data(){
			return{
				timeInSeconds: 0,
				newTimeSeconds: ''
			}
		},
		props:{
			time:{
				type: Number,
				default: 1200
			}
		},
		watch:{
			time(newTime){
				this.newTimeSeconds = newTime
			}
		},
		computed:{
			minutes(){
				const minutes = Math.floor(this.newTimeSeconds / 60) 			
				return this.getPaddedTime(minutes)
			},
			seconds(){
				// % devuelve el resto
				const seconds = Math.floor(this.newTimeSeconds % 60) 
				return  this.getPaddedTime(seconds)
			}
		},
		mounted(){
			this.newTimeSeconds = this.$props.time
			this.startCountdown()
		},
		methods:{
			startCountdown(){
				const countdownTimer = window.setInterval(() => {
					if(!this.newTimeSeconds){
						window.clearInterval(countdownTimer)
						return
					}
					this.onSecondElapse()
				}, 1000)
			},
			onSecondElapse(){
				this.newTimeSeconds--
			},
			getPaddedTime(value){
				return value.toString().padStart(2, '0')
			}
		}
	}
</script>
<style type="text/css" scoped>
	
</style>