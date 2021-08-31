/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import FeatureCard from 'components/feature-card';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Un socio experimentado',
    title: 'Un socio experimentado',
    text:
      'Habiendo construido startups desde abajo hacia arriba, entendemos de forma innata lo que una startup podría enfrentar en cada paso de su viaje de crecimiento. ',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Experiencia en empezar bien',
    title: 'Experiencia en empezar bien',
    text:
      'Somos expertos en la creación de sofware tanto el diseño como la ingeniería altamente capacitados para empresas internacionales.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Creación de productos innovadores',
    title: 'Creación de productos innovadores',
    text:
      'Como sus socios, aceleramos su proceso de desarrollo de productos, superando rápidamente a sus competidores en el mercado. ',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Socio confiable',
    title: 'Socio confiable',
    text:
      'Hemos tenido nuestra parte de éxitos y fracasos, pero tenemos verdadero valor y nunca nos hemos rendido.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{variant: 'section.keyFeature'}} id="feature">
      <Container>
        <SectionHeader 
          slogan="Lo que nos ditinge"
          title="En colaboración con nuestros queridos clientes, hemos creado soluciones innovadoras para sus necesidades comerciales únicas."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
