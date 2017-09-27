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
           <span>รหัสคูปอง</span>
           <v-layout>
             <v-flex xs12 md3 sm6>
               <v-text-field label="กรอกรหัสคูปองที่นี่"></v-text-field>
              </v-flex>
           </v-layout>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
}
</script>
