/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';
import TextFeature from 'components/text-feature';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Rendimiento Rapido',
    title: 'Rendimiento Rapido',
    text:
      'Mejora la experiencia de los clientes, permitiendo una interacción mas amigable  con el ambiente del software.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Subscripcion Pro',
    title: 'Subscripcion Pro',
    text:
      'Ser Pro te trae muchos mas beneficios "Soporte 24 7 de los 365 días del año"',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Acuerdo de asociacionl',
    title: 'Acuerdo de asociacion',
    text:
      'Como compañía garantizamos a nuestros aliados responsabilidad y compromiso.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Atencion al cliente',
    title: 'Atencion al cliente',
    text:
      'Siempre pensamos en ti. Estamos siempre en búsqueda de soluciones que te permitan tener una mejor experiencia.',
  },
];

export default function Feature() {
  return (
   <section sx={{variant: 'section.feature'}}>
     <Container>
     <Box sx={styles.contentBox}>

          <TextFeature 
          subTitle="Caracteristicas de Calidad"
          title="Asombrosas funciones utiles"
          />
          </Box>
       <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ) )}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
};
