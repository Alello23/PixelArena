<template>
  <div class="space_between">
          <div class="col rounded-column-2 text-center" style="background-color: #DECA91;" >
              <h4 > Equipped attacks </h4>
          </div>
        </div>
        <div class="space_between" :style="{ marginRight: margins, marginLeft: margins }">
          <div class="col rounded-column-2 text-center">
              <h5 > {{ this.$store.getters.getSelectedAttack('dropdown1') || "Attack 3"  }}</h5>
          </div>
        </div>
        <div class="space_between" :style="{ marginRight: margins, marginLeft: margins }">
          <div class="col rounded-column-2 text-center">
            <h5 >{{ this.$store.getters.getSelectedAttack('dropdown2') || "Attack 6"  }}</h5>
          </div>
      </div>
             <div class="space_between" :style="{ marginRight: margins, marginLeft: margins }">
              <div class="col rounded-column-2 text-center">
          <h5 >{{ this.$store.getters.getSelectedAttack('dropdown3') || "Attack 7"  }}</h5>
        </div>
        </div>
</template>

<script>
export default {
  props: {
    margins: String
  }
}
</script>
