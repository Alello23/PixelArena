<template>
  <div class="space_between" style="margin-bottom: 15px;" >
        <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
            <h4 > Backpacked Attacks </h4>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" :style="{ backgroundColor: '#6B8E9E', padding: '0.5rem', marginRight: margins, marginLeft: margins }">
            <h5 >Attack 1</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" :style="{ backgroundColor: '#6B8E9E', padding: '0.5rem', marginRight: margins, marginLeft: margins }">
            <h5 >Attack 3</h5>
        </div>
    </div>
           <div class="space_between">
            <div class="col rounded-column-2 text-center" :style="{ backgroundColor: '#6B8E9E', padding: '0.5rem', marginRight: margins, marginLeft: margins }">
            <h5 >Attack 4</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" :style="{ backgroundColor: '#6B8E9E', padding: '0.5rem', marginRight: margins, marginLeft: margins }">
            <h5 >Attack 5</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" :style="{ backgroundColor: '#6B8E9E', padding: '0.5rem', marginRight: margins, marginLeft: margins }">
            <h5 >Attack 8</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" :style="{ backgroundColor: '#6B8E9E', padding: '0.5rem', marginRight: margins, marginLeft: margins }">
            <h5 >Attack 9</h5>
        </div>
      </div>
      <div class="space_between">
        <div class="col rounded-column-2 text-center" :style="{ backgroundColor: '#6B8E9E', padding: '0.5rem', marginRight: margins, marginLeft: margins }">
            <h5 >Attack 10</h5>
        </div>
      </div>
      <div class="space_between" style="margin-bottom: 60px;"> </div>
</template>

<script>
export default {
  props: {
    margins: String
  }
}
</script>