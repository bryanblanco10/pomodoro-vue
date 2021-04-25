import { shallowMount, createLocalVue } from '@vue/test-utils'
import TimerComponent from '@/components/TimerComponent.vue'

jest.useFakeTimers()

const localVue = createLocalVue()

function createTimerComponent(propsData = {time: 121}){
	 return shallowMount(TimerComponent,{
		propsData,
		localVue
	})
}

//Para saber que se esta renderizando bien.
describe('TimerComponent.vue', () => {
  it('should render property', (done) => {
   	const timer = createTimerComponent()

    timer.vm.$nextTick(() =>{
   	 expect(timer).toMatchSnapshot()
   	 done()
    })
  })
})

describe('Computed',() =>{
	it('should return minutes property and padded if necessary', () =>{
		const timer = createTimerComponent()

   	expect(timer.vm.minutes).toEqual('02')
	})

	it('should return seconds property and padded if necessary', () =>{
		const timer = createTimerComponent()

   	expect(timer.vm.seconds).toEqual('01')
	})
})

describe('Methods', () =>{
	describe('startCountdown', () =>{
		it('should call onSecondElapse when a second passes', () =>{
			const timer = createTimerComponent()
			const onSecondElapse = jest.spyOn(timer.vm,'onSecondElapse')
			jest.advanceTimersByTime(2000)
			expect(onSecondElapse).toHaveBeenCalledTimes(2)
		})

		it('should clear interval when time is 0', () =>{
			const timer = createTimerComponent({time: 1})
			const onSecondElapse = jest.spyOn(timer.vm,'onSecondElapse')
			jest.advanceTimersByTime(2000)
			expect(onSecondElapse).toHaveBeenCalledTimes(1)
		})
	})

	describe('onSecondElapse', () =>{
		it('should set a second less to timeInSeconds', () =>{
			const seconds = 3
			const timer = createTimerComponent({time: seconds})
			timer.vm.onSecondElapse()

			expect(timer.vm.newTimeSeconds).toEqual(seconds - 1)
		})
	})

	describe('getPaddedTime', () => {
		it('should return number value padded with 0', () =>{
			const seconds = 5
			const timer = createTimerComponent({time: seconds})

			expect(timer.vm.getPaddedTime(5)).toEqual('05')
		})
	})
})

// describe('Watch', () =>{
// 	describe('time',() =>{
// 		it('should call time when time property change', () =>{
// 			const timer = createTimerComponent()
// 			expect(timer.vm.timeInSeconds).toEqual(121)

// 			timer.setProps({
// 				time: 100
// 			})

// 			expect(timer.vm.timeInSeconds).toEqual(100)
// 		})
// 	})
// })
