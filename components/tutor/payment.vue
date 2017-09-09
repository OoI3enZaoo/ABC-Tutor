<template>
  <div>
    <v-container>
      <v-card>
        <v-card-text>
          <div class="text-xs-right">
             <v-btn primary>บันทึก</v-btn>
          </div>
           <v-text-field label="ราคาของคอร์ส" type="number"></v-text-field>
           <br>
           <span>คูปองขอคอร์ส</span><br>
           <v-btn primary>สร้างรหัสคูปอง</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
}
</script>
