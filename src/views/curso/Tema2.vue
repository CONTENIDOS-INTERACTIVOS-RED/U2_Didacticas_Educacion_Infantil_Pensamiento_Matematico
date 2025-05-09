<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Explorando recursos didácticos para el pensamiento métrico y espacial en la primera infancia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-7.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 ¿Cómo hacer que las matemáticas sean emocionantes y comprensibles para los niños desde sus primeros años? A menudo, se cree que las matemáticas son solo números y cálculos, pero en realidad, su aprendizaje comienza mucho antes de que los niños puedan escribir cifras en un cuaderno. Desde los primeros años de vida, los niños están en constante interacción con su entorno, explorando formas, cantidades, patrones y relaciones espaciales de manera natural.
      
          p(data-aos="fade-left").mb-4 Para potenciar esta capacidad innata, es fundamental proporcionar recursos didácticos adecuados que estimulen su pensamiento matemático de manera lúdica y significativa. Los materiales manipulativos, los juegos estructurados y las experiencias sensoriales permiten que los niños construyan conocimientos a través de la exploración y la experimentación.
      
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Explorando el espacio y la medida: Recursos y ambientes de aprendizaje para el desarrollo del pensamiento métrico y espacial


      .bg-full-width.bg-color-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg
              p.mb-0 En este recorrido, se abordará la importancia de seleccionar y diseñar recursos didácticos que favorezcan el desarrollo del pensamiento numérico, métrico, espacial, aleatorio y variacional en la educación infantil. Se analizarán estrategias concretas para integrar estos recursos en el aula y se reflexionará sobre su impacto en la formación de un pensamiento matemático sólido desde la primera infancia. ¡Es momento de descubrir cómo transformar las matemáticas en una aventura de aprendizaje para los niños!
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 295px").mx-auto

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
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
