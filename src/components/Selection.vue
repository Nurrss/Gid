<template>
  <div class="container mt-5">
    <!-- First Row -->
    <h1 class="text-center bold">Чем вы увлекаетесь?</h1>
    <div class="row mt-5">
      <div
        class="col-md-6 col-lg-5"
        v-for="(card, index) in cards"
        :key="index"
      >
        <div
          class="card"
          :class="{ selected: card.selected }"
          @click="toggleSelection(card)"
        >
          <img :src="card.image" class="card-img-top" :alt="card.alt" />
          <div class="card-body">
            <p class="card-title">{{ card.title }}</p>
          </div>
          <div v-if="card.selected" class="done-icon">
            <img :src="card.done" :alt="card.alt" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <input
        type="text"
        class="form-control mb-2 py-4"
        placeholder="Напишите : Сумма на поездку , Количество человек , Цель поездки"
        v-model="comment"
      />
    </div>
    <router-link to="/" exact class="btn btn-dark w-100 py-3 mt-4" href="#">
      Применить
    </router-link>
  </div>
</template>

<script>
// Import images
import tarihImage from "../assets/tarih.svg";
import shopImage from "../assets/shop.svg";
import parkImage from "../assets/park.svg";
import restauImage from "../assets/restau.svg";
import discotekaImage from "../assets/discoteka.svg";
import natureImage from "../assets/nature.svg";
import vector from "../assets/Vector.svg";

export default {
  name: "App",
  data() {
    return {
      cards: [
        {
          image: tarihImage,
          alt: "Image 1",
          title: "Исторические места",
          selected: false,
          done: vector,
        },
        {
          image: shopImage,
          alt: "Image 2",
          title: "Торговые центры",
          selected: false,
          done: vector,
        },
        {
          image: restauImage,
          alt: "Image 2",
          title: "Рестораны, кафе",
          selected: false,
          done: vector,
        },
        {
          image: natureImage,
          alt: "Image 2",
          title: "Природа",
          selected: false,
          done: vector,
        },
        {
          image: discotekaImage,
          alt: "Image 2",
          title: "Мероприятие",
          selected: false,
          done: vector,
        },
        {
          image: parkImage,
          alt: "Image 2",
          title: "Парк, аттракционы",
          selected: false,
          done: vector,
        },
        // Add more cards as needed
      ],
    };
  },
  methods: {
    toggleSelection(card) {
      card.selected = !card.selected;
    },
  },
};
</script>

<style scoped>
.row > * {
  width: 50%;
}

.card {
  border: 0;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.selected {
  opacity: 0.7;
}

.done-icon {
  position: absolute;
  top: 6px;
  right: 8px;
  color: black;
}
</style>
