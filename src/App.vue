<template>
  <div id="app">
    <router-view class="aplication__container" />
  </div>
</template>
<style type="text/css">
  /*CSS VARIABLES*/
/*Colores */
:root{
  --aplication-color-primary:#E23434;
  --aplication-color-second:#333745;
  --aplication-color-text:#fff; 
}

h1,h2,section
{
	margin: 0;
}

body
{
  margin: 0;
  padding: 0;
}

*
{
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*layout*/
.aplication
{}

.aplication__container
{
	width: 100vw;
	height: 100vh;
}

.aplication__content
{
	width: 100%;
	height: 100%;
	max-width: 500px;
	margin: 0 auto;
}
</style>
