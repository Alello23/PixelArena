<template>
   <button type="button" class="btn">{{label}}</button>
</template>

<script>
export default {
  props: {
    label: String,
  }
}
</script>

<style scoped>

  .btn{  
  border-radius: 7px;
  width: 100%;
  height: 100%;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition : all 200ms linear;
  transition: all 200ms linear;
  padding: 20px 0;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid #000;
  background-color: #419FD6;
  color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  line-height: 2;
}
.btn:active,

.btn:focus{  
  background-color: #419FD6;
  color: white;
  box-shadow: 0 8px 24px 0 white;
}
.btn:hover{  
  background-color: #419FD6;
  color: white;
  box-shadow: 0 8px 24px 0 white;
}
</style>
