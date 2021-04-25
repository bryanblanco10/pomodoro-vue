<template>
  <section class="welcome">
    <div class="aplication__content welcome__content">
      <h1 class="welcome__title">Hola, ¡bienvenido a Pomodoro!</h1>
      <h2 class="welcome__subtitle">Mejora tu productividad centrándote en lo importante de cada momento y sé más eficiente.</h2>
      <ButtonComponent @onClick="onClick">
        Haz tu primer pomodoro
      </ButtonComponent>
    </div>
  </section>
</template>

<script>
  import ButtonComponent from '@/components/ButtonComponent'
  export default {
    name: 'Welcome',
    components:{
      ButtonComponent
    },
    methods:{
      onClick(){
        this.$router.push({name: 'pomodoro', params:{type: 'work'}})
      }
    }
  }
</script>
<style type="text/css" scoped>
  .welcome{
    background-color: var(--aplication-color-primary); 
  }

  .welcome__content
  {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: var(--aplication-color-text);
  }

  .welcome__title
  {
    margin-bottom: 1em;
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .welcome__subtitle
  {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 1px;
    margin-bottom: 1.5em;
  }
</style>
