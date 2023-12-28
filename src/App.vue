<template>
  <div class="body">
    <header class="header">
      <div class="ogranich flex-ogranich">
        <a href="App.vue">
          <img
            class="header_logo"
            src="https://i.pinimg.com/originals/48/6d/0e/486d0e20fd05e0787395d643e4d1a119.jpg"
            alt="logo"
          />
        </a>
        <h1 class="retush">Ретушь - и точка.</h1>
        <nav>
          <ul class="social">
            <li>
              <a class="social_link" href="https://web.telegram.org/k/"
                >💬 TG</a
              >
            </li>
            <li><a class="social_link" href="https://vk.com/feed">😊 VK</a></li>
            <li>
              <a class="social_link" href="https://www.youtube.com/"
                >📺 YouTube</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="main">
      <div class="ogranich">
        <h1 class="title">Каталог услуг {декарь:2023}</h1>
        <div class="main_container">
          <a href="#" class="container">
            <img
              alt="Ретушь личных фотографий"
              src="https://u-tune.ru/wp-content/uploads/e/3/f/e3f6ef4e4c511906bbb654d95c43189f.jpeg"
              class="container__image"
            />
            <div class="container__text">
              <h2 class="container__title">Ретушь личных фотографий</h2>
              <p>Улучшение личных, семейных фото. Соцсети, печать и др.</p>
              <router-link :to="{ path: '/first' }" @click="watch">
                Смотреть</router-link
              >
            </div>
          </a>

          <a href="nikedunk.html" class="container">
            <img
              alt="Студийная ретушь"
              src="https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/517646/erApRxtQOHlxgWMJnwLPqQ.jpg  "
              class="container__image"
            />
            <div class="container__text">
              <h2 class="container__title">Студийная ретушь</h2>
              <p>
                Профессиональная ретушь. Ретушь фотографам, моделям, бизнесу
              </p>
            </div>
          </a>
          <a href="converse.html" class="container">
            <img
              alt="Рекламная ретушь"
              src="https://kak-eto-sdelano.ru/wp-content/uploads/2017/02/3102.jpg"
              class="container__image"
            />
            <div class="container__text">
              <h2 class="container__title">Рекламная ретушь</h2>
              <p>
                Ретушь для интернет-магазина, каталога, рекламы. Любые предметы
              </p>
            </div>
          </a>
          <a class="container">
            <img
              alt="Коллаж"
              src="https://i.pinimg.com/originals/18/2e/e1/182ee1735642eefafda2602115fdd89f.jpg"
              class="container__image"
            />
            <div class="container__text">
              <h2 class="container__title">Коллаж</h2>
              <p>
                Коллаж, стенгазеты и портреты на холсте в подарок, на юбилей и
                др.
              </p>
            </div>
          </a>
          <a class="container">
            <img
              alt="Фотомонтаж"
              src="https://i.ytimg.com/vi/FN-ypwJpWuM/maxresdefault.jpg"
              class="container__image"
            />
            <div class="container__text">
              <h2 class="container__title">Фотомонтаж</h2>
              <p>
                Аккуратно добавить/изменить удалить людей, объекты, фон, цифры,
                лица.
              </p>
            </div>
          </a>
          <a class="container">
            <img
              alt="Ретушь ювелирных изделий"
              src="https://74foto.ru/800/600/https/freelance.ru/img/portfolio/pics/00/36/B2/3584597.jpg"
              class="container__image"
            />
            <div class="container__text">
              <h2 class="container__title">Ретушь ювелирных изделий</h2>
              <p>
                Профессиональная ретушь ювелирных украшений. От каталога до
                рекламы
              </p>
            </div>
          </a>
          <a class="container">
            <img
              alt="Обработка свадебных фото"
              src="https://4tololo.ru/sites/default/files/images/20152708102632.jpg"
              class="container__image"
            />
            <div class="container__text">
              <h2 class="container__title">Обработка свадебных фото</h2>
              <p>Фигура, платье, лица. Качество, фон, ошибки фотографа.</p>
            </div>
          </a>
          <a class="container">
            <img
              alt="Ретушь вещей"
              src="https://freelance.ru/img/portfolio/pics/00/20/CF/2150266.jpg"
              class="container__image"
            />
            <div class="container__text">
              <h2 class="container__title">Ретушь вещей</h2>
              <p>
                Удаление фона, вырезание пером, сложные маски. Обработка и
                формирование фото для товара
              </p>
            </div>
          </a>
          <a class="container">
            <img
              alt="Генерация картинок через нейросети "
              src="https://i-smotr.ru/wp-content/uploads/2023/07/img_64b6525ad3b94.png"
              class="container__image"
            />
            <div class="container__text">
              <h2 class="container__title">
                Генерация картинок через нейросети
              </h2>
              <p>
                Создание уникальных и необычных фотографий в разных стилях при
                помощи современных технологий.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="ogranich">
        <div class="flex-ogranich">
          <img class="footer_logo" src="./img/logo.png" alt="logo" />
          <ul class="navigaition">
            <li><a class="navigaition_link_white" href="#">До/После</a></li>
            <li>
              <a class="navigaition_link_white" href="App.vue">Главная</a>
            </li>
            <li><a class="navigaition_link_white" href="App.vue">Услуги</a></li>
          </ul>
          <ul class="social">
            <li><a class="social_link_white" href="#">💬 TG</a></li>
            <li><a class="social_link_white" href="#">😊 VK</a></li>
            <li><a class="social_link_white" href="#">📺 YouTube</a></li>
          </ul>
        </div>
        <hr width="100%" class="footer_line" />
        <p class="footer_text">Ретушь и точка ® 2023</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    watch() {
      this.$router.push("/first");
    },
  },
};
</script>

<style scoped lang="scss">
@import "./assets/style.scss";
</style>
