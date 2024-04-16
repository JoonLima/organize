<template>
  <router-view />
</template>


<script>
export default {
  data() {
    return {
      
    }
  },  
}
</script>

<style>
.container{
  margin-left: 30px;
  margin-right: 30px;
}

::-webkit-scrollbar-track {
  background-color: #F4F4F4;
}
::-webkit-scrollbar {
  width: 4px;
  background: #084A89;
}
::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background: #084A89;
}

@media (max-width: 600px) {
  .container{
  margin-left: 15px;
  margin-right: 15px;
}
}


</style>