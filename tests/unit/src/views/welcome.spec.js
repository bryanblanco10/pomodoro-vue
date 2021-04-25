import { shallowMount } from '@vue/test-utils'
import Welcome from '@/views/Welcome.vue'


//Para saber que se esta renderizando bien.
describe('Welcome.vue', () => {
  it('should render property', () => {
    const welcome = shallowMount(Welcome)
    expect(welcome).toMatchSnapshot()
  })
})

describe('Methods',() => {
	it('should redirect to pomodoro route work parameter', () => {
		const routerPushSpy = jest.fn()
		const welcome = shallowMount(Welcome, {
			//mocks = this
			mocks:{
				$router:{
					push: routerPushSpy
				}
			}
		})

		welcome.vm.onClick()

		expect(routerPushSpy).toHaveBeenCalledWith({
			name: 'pomodoro',
			params:{
				type: 'work'
			}
		})
	})
})
