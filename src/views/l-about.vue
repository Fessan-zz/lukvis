<template>
  <div class="about col-lg-12">
    <main>
    <section class="header">
        <span class="line1"></span>
        <h2>ООО "ЛУКВИС"</h2>
        <span class="line2"></span>
    </section>
    <section class="container main col-8 d-flex flex-lg-row flex-sm-column flex-md-column">
        <article class="content container col-lg-6 col-sm-12 col-md-12">
            ООО “Луквис” динамично развивающаяся компания, которая довольно
             быстро заняла прочную позицию на рынке. <br>
            Большим преимуществом компании является то, что предприятие
            оказывает полный цикл услуг от проектирования
             объекта до его “сдачи под ключ”. <br>
            Компания одна из первых в регионе приобрела портальный станок
            плазменной резки
            металла.<br>
            Это позволило расширить сферу оказываемых услуг и повысить скорость и
             качество изготовления
            металлоконструкций. <br>
            Одним из преимуществ компании является быстрое выполнение заказов без снижения качества.
            Компания зарекомендовала себя серьезным игроком на рынке
             строительных услуг, производства металлоконструкций
            и
            металлоизделий, металлообработке и тепложнергетики.
        </article>
        <article class="image col-lg-6 col-sm-12 col-md-12"></article>
    </section>
    <section class="before-main col-8 d-flex flex-lg-row flex-sm-column flex-md-column">
        <article class="image col-lg-6 col-sm-12 col-md-12"></article>
        <article class="content container col-lg-6 col-sm-12 col-md-12">
           <span>
                <h2>Директор <br>
                ООО “Луквис”</h2>
            Основной вдохновитель и идейный генератор - основатель и директор предприятия
             Лукашев Владимир Васильевич,
               имеющий многолетний опыт работы в сфере теплоэнергетики и металлообработки.
           </span>
        </article>
    </section>
</main>
  </div>
</template>

<script>
export default {
  name: 'about',
};
</script>

<style lang="scss" scoped>
* {
    margin: 0 auto;
    padding: 0;
}

.header {
    background: linear-gradient(to right,
    rgba(54, 80, 206, 0.85) 0%,
    rgba(13, 142, 229, 0.85) 100%),
    url(../assets/img//header.png) no-repeat;
    background-size: 100%;
    width: 100%;
    height: 70vh;
    position: relative;
    display: flex;
    align-items: center;
    color: #ffffff;
}

.header > h2 {
    text-shadow: 1px 1px 3px black;
}

.line1, .line2 {
    width: 20%;
    height: 2px;
    background: #ffffff;
}

.line1 {
    margin-left: 15%;
}

.line2 {
    margin-right: 15%;
}

.main {
    margin-top: -50px;
    background: #ffffff;
    padding-right: 0;
    box-shadow: 1px 1px 3px grey;
}

.content {
    padding-top: 40px;
    padding-left: 30px;
    padding-bottom: 40px;
}

.main > .image {
    background: url("../assets/img/image 15.png");
}

.before-main {
    background: #ffffff;
    padding-right: 0;
    padding-left: 0;
    margin-top: 50px;
    box-shadow: 1px -1px 3px grey;
    margin-bottom: 100px;
}

.before-main > .content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.before-main > .image{
    background: url("../assets/img/image 16.png");
    object-fit: scale-down;
    height: 432px;
}
</style>
