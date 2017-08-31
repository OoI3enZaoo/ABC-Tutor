<template>
  <div>
      <template v-if="type == 'color'">
          <v-parallax :class="src" :height="height">
              <template v-if="position == 'center'">
                  <v-layout column align-center justify-center>
                    <slot></slot>
                  </v-layout>
              </template>
              <template v-else>
                  <v-layout column>
                    <slot></slot>
                  </v-layout>
              </template>
          </v-parallax>
      </template>
      <template v-else>
          <v-parallax :src="src" :height="height">
            <template v-if="position == 'center'">
                <v-layout column align-center justify-center>
                  <slot></slot>
                </v-layout>
            </template>
            <template v-else>
                <v-layout column>
                  <slot></slot>
                </v-layout>
            </template>
          </v-parallax>
      </template>

  </div>
</template>
<script>
export default {
  props: ['type', 'src', 'position', 'height']
}
</script>
