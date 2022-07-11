<template>
  <div class="my-car-app">
    <IPhoneAppFrame>
      <div class="my-car-app__content">
        <AppTopBar
            class="my-car-app__top-bar"
            title="MyCar"
            :right-icon="sortMode ? require('@/assets/images/icons/apply.svg') : require('@/assets/images/icons/settings.svg')"
            @right-icon-click="sortMode = !sortMode"
        />
        <div class="my-car-app__cars">
          <div class="my-car-app__car" v-for="(car, index) in cars" :key="index">
            <div class="my-car-app__car-card-container">
              <CarCard
                  :image="car.image"
                  :rent-time="car.rentTime"
                  :disabled="sortMode || (carMenu.isActive && car !== carMenu.car)"
                  @click.native="car.rentTime ? openRentCarMenu(car, $event) : openPurchasedCarMenu(car, $event)"
              />
              <div class="my-car-app__sort-buttons" v-if="sortMode">
                <div class="my-car-app__sort-button" v-if="index !== 0">
                  <img class="my-car-app__sort-button-icon" src="@/assets/images/icons/chevron-up.svg"/>
                </div>
                <div class="my-car-app__sort-button" v-if="index !== cars.length-1">
                  <img class="my-car-app__sort-button-icon" src="@/assets/images/icons/chevron-down.svg"/>
                </div>
              </div>
            </div>
            <p class="my-car-app__car-name">{{ car.name }}</p>
            <hr color="#172A49"/>
          </div>
        </div>
        <PopUpMenu
            class="my-car-app__car-menu"
            v-if="carMenu.isActive"
            :items="carMenu.items"
            :position="carMenu.position"
            @close="carMenu.isActive = false"
            @item-click="carMenuItemClick"
        />
      </div>
    </IPhoneAppFrame>
    <ConfirmDialog
        v-if="isDialogShown"
        text="Эвакуировать авто за 1000$?"
        @confirm-click="isDialogShown = false"
        @cancel-click="isDialogShown = false"
    />
  </div>
</template>

<script>
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";
import AppTopBar from "@/components/organisms/AppTopBar";
import CarCard from "@/components/molecules/CarCard";
import PopUpMenu from "@/components/organisms/PopUpMenu";

import car1Image from '@/assets/images/cars/1.png';
import car2Image from '@/assets/images/cars/2.png';
import truckIcon from '@/assets/images/icons/truck.svg';
import cornerRightUpIcon from '@/assets/images/icons/corner-right-up.svg';
import cancelIcon from '@/assets/images/icons/cancel.svg';
import ConfirmDialog from "@/components/organisms/ConfirmDialog";

const testCar1 = {
  name: "Lada Granta",
  image: car1Image,
  rentTime: "5ч 2м",
}
const testCar2 = {
  name: "Lada Bebranta",
  image: car2Image,
}

export default {
  name: "MyCarApp",
  components: {ConfirmDialog, PopUpMenu, CarCard, AppTopBar, IPhoneAppFrame},
  data: function () {
    return {
      sortMode: true,
      cars: [
        testCar1,
        testCar2,
      ],
      carMenu: {
        isActive: false,
        car: null,
        items: [],
      },
      isDialogShown: true,
    }
  },
  methods: {
    openCarMenu: function (car, event) {
      this.carMenu = {
        ...this.carMenu,
        isActive: true,
        car,
        position: {
          x: event.clientX,
          y: event.clientY,
        }
      }
    },
    openPurchasedCarMenu(car, event) {
      this.carMenu.items = [
        {
          text: "Эвакуировать",
          icon: truckIcon,
        },
        {
          text: "Найти",
          icon: cornerRightUpIcon
        }
      ]
      this.openCarMenu(car, event)
    },
    openRentCarMenu(car, event) {
      this.carMenu.items = [
        {
          text: "Найти",
          icon: cornerRightUpIcon
        },
        {
          text: "Отменить аренду",
          class: "my-car-app__menu-red-item",
          icon: cancelIcon,
        },
      ]
      this.openCarMenu(car, event)
    },
    carMenuItemClick(item) {
      this.carMenu.isActive = false;

      this.isDialogShown = true;
    }
  }
}
</script>

<style lang="scss">
.my-car-app {
  height: 100%;

  background: linear-gradient(180deg, rgba(5, 17, 117, 0.2) 0%, rgba(0, 26, 255, 0.054) 100%), #141B23;

  &__content {
    display: flex;
    flex-direction: column;

    height: 100%;
  }

  &__top-bar {
    margin-bottom: .5vw;

    color: white;
  }

  &__cars {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: .75vw;

    overflow-y: auto;
    overflow-x: hidden;
  }

  &__car {

  }

  &__car-name {
    margin-top: .35vw;
    margin-bottom: .5vw;

    color: white;

    font-size: .6vw;
  }

  &__car-card-container {
    position: relative;
  }

  &__sort-buttons {
    display: flex;
    gap: .1vw;

    position: absolute;
    left: .5vw;
    bottom: .5vw;
  }

  &__sort-button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 1.5vw;
    aspect-ratio: 1;

    background: radial-gradient(50% 50% at 50% 50%, #37B0FF 0%, #0A9CFB 100%);
    border-radius: .3vw;

    cursor: pointer;
  }

  &__sort-button-icon {
    height: 60%;
  }

  &__menu-red-item {
    background-color: rgba(214, 13, 31, 0.1);
  }
}
</style>