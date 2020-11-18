<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      indicators
      background="transparent"
      img-width="750"
      img-height="360"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-blank>
        <h2>ShareVid</h2>
        <p>Best Video Sharing platform<br>around the globe</p>
      </b-carousel-slide>
      <b-carousel-slide img-blank>
        <h2>ShareVid</h2>
        <p>Best Video Sharing platform<br>around the globe</p>
      </b-carousel-slide>
      <b-carousel-slide img-blank>
        <h2>ShareVid</h2>
        <p>Best Video Sharing platform<br>around the globe</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>