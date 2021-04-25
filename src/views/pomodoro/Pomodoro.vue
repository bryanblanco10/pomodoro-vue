<template>
  <section class="pomodoro">
    <div class="aplication__content pomodoro__content">
      <h2 class="pomodoro__title">Pomodoro</h2>
      <h1 class="pomodoro__type">{{pomodoroType}}</h1>
      <TimerComponent class="pomodoro__timer" :time="pomodoroTime" />

      <ButtonRoundedComponent @onClick="onClick">
        <span class="icon__closed">x</span>
      </ButtonRoundedComponent>
    </div>
  </section>
</template>
<script>
  import TimerComponent from '@/components/TimerComponent'
  import ButtonRoundedComponent from '@/components/ButtonRoundedComponent'
  import pomodoroTypes from './pomodoroTypes.js'
  export default{
    name: 'Pomodoro',
    data(){
      return{}
    },
    computed:{
      pomodoroType(){
        return this.$route.params.type
      },
      pomodoroTime(){
        const typePomodoro = this.$route.params.type
        return pomodoroTypes[typePomodoro].time
      }
    },
    components:{
      TimerComponent,
      ButtonRoundedComponent
    },
    methods:{
      onClick(){
        this.$router.push({name: 'pomodoro', params:{type: 'rest'}})
      }
    }
  }
</script>
<style type="text/css" scoped>
  .pomodoro{
    background-color: var(--aplication-color-primary);
    color: var(--aplication-color-text); 
  }

  .pomodoro__content
  {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .pomodoro__title
  {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
    /*margin-bottom: 1.5em;*/
  }

   .pomodoro__type
  {
    margin-bottom: 1rem;
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .pomodoro__timer
  {
    font-size: 8rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  .icon__closed{
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
  }
</style>
