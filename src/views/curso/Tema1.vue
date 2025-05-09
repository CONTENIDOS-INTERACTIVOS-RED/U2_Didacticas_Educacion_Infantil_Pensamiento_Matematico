<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Estrategias didácticas para el pensamiento numérico en educación infantil'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p Desde los primeros años de vida, los niños y niñas construyen nociones matemáticas mediante la exploración, el juego y la interacción con su entorno. La educación infantil tiene la responsabilidad de potenciar este desarrollo a través de experiencias significativas que despierten la curiosidad y fomenten el razonamiento lógico.

    .row.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in", style="max-width: 400px;").my-4.my-lg-0.mx-auto
      .col-lg-8
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto.mb-4.mb-lg-0
            .col-lg
              p.mb-0 El uso de estrategias didácticas adecuadas transforma el aprendizaje matemático en un proceso dinámico, divertido y accesible. Mediante materiales manipulativos, juegos, actividades lúdicas y herramientas tecnológicas, los niños y niñas pueden aproximarse de manera natural y progresiva a conceptos como los números, las formas, las magnitudes y los patrones.
    
        p(data-aos="fade-left").mb-4 En esta unidad, se presentarán diversas estrategias y enfoques metodológicos para fortalecer el pensamiento numérico en la primera infancia. Se analizarán recursos innovadores, experiencias educativas exitosas y principios pedagógicos que faciliten el diseño de ambientes de aprendizaje enriquecidos, adaptados a los intereses y necesidades de los más pequeños.
    

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-center.text-white #[b ¡Descubramos juntos cómo hacer de la enseñanza de las matemáticas una experiencia significativa y motivadora!] 
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Explorando el mundo con números: bases del pensamiento matemático en la primera infancia

    .row.mb-4
      .col-lg-8
        p(data-aos="fade-left").mb-4 Desde muy temprano, antes incluso de conocer los números de manera formal, los niños y niñas desarrollan habilidades matemáticas básicas mediante la observación, la exploración y la interacción con su entorno (Goñi, 2013). Acciones cotidianas como organizar juguetes por tamaño y color, identificar patrones en una canción, comparar la cantidad de galletas o medir distancias al saltar son ejemplos claros de cómo surge espontáneamente el pensamiento matemático.
        
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este proceso de construcción no ocurre de forma aislada: la educación infantil cumple un papel fundamental al ofrecer experiencias estructuradas que potencien estas habilidades. Según Hidalgo (2018), mediante estrategias didácticas adecuadas se puede estimular el desarrollo del pensamiento lógico-matemático, facilitando la comprensión de conceptos como cantidad, forma, tamaño, ubicación espacial y relaciones numéricas.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
    
    p.mb-5 La clave está en diseñar experiencias de aprendizaje que respondan a la curiosidad innata de los infantes y a su necesidad de explorar el mundo a través del juego, la manipulación y la experimentación. Por ello, la enseñanza de las matemáticas en esta etapa debe ir más allá de la memorización: debe centrarse en la construcción de conocimientos desde situaciones concretas y significativas.

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/5.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El uso de materiales manipulativos —como bloques, fichas, regletas y ábacos— permite representar de forma tangible conceptos abstractos, favoreciendo una comprensión más profunda. Asimismo, integrar dinámicas lúdicas —como juegos de mesa, rompecabezas o actividades exploratorias— no solo refuerza el aprendizaje, sino que también incrementa la motivación y el disfrute en el proceso educativo.
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
