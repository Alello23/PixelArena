<script setup>
import LoginBoxComponent from '../components/LoginBoxComponent.vue';
import RegisterBoxComponent from '../components/RegisterBoxComponent.vue';
</script>

<template>
 <div class="container position-absolute top-50 start-50 translate-middle">
  <div class="row justify-content-center">
    <div class="col-12 align-self-center" id="LoginBox">
      <div class="section">
        <h6 class="text-center"><span>Log In </span><span>Sign Up</span></h6>
          <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
          <label for="reg-log"></label>
          <div class="card-3d-wrap mx-auto">
            <div class="card-3d-wrapper">
                <div class="card-front">
                  <LoginBoxComponent/> 
                </div>
                <div class="card-back">
                  <RegisterBoxComponent/>  
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label{
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: white;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before{
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #419FD6;
  background-color: #87CEEB;
  content: '🡆';
  top: -10px;
  left: -10px;
  line-height: 40px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}
.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-180deg);
}

h6 {
  padding: 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
}
.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 30rem;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position:absolute;    
  top: 0;
  left: 0;  
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out; 
}
.card-front, .card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}
.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}
</style>  