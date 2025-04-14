import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top',
  );

  const sectionHeader = {
    title: 'Resultados Reais, Alunos Reais',
    paragraph:
      '"Com a ajuda do Rafa, finalmente consegui perder aqueles quilos extras e definir meu corpo. Recomendo muito!"',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className="mt-0 mb-12">
                  Quer <span className="text-color-primary">perder peso</span>,
                  ganhar massa ou melhorar sua{' '}
                  <span className="text-color-primary">performance</span>?
                </h3>
                <p className="m-0">
                  Independente do seu objetivo, tenho o método certo para te
                  ajudar a conquistar resultados reais, de forma eficiente e
                  personalizada.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill',
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/rafa1.png')}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className="mt-0 mb-12">
                  Pouco tempo para treinar? Eu te ajudo a{' '}
                  <span className="text-color-primary">otimizar</span> seu
                  treino!
                </h3>
                <p className="m-0">
                  Com treinos inteligentes e estratégias eficazes, você pode
                  alcançar seus objetivos sem precisar passar horas na academia.
                  Vamos maximizar seu tempo e transformar seu corpo!
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill',
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/rafa2.png')}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Parceria Exclusiva
                </div>
                <h3 className="mt-0 mb-12">Treinos e Nutrição para Você!</h3>
                <p className="m-0">
                  Agora, ao se inscrever no programa de treino, você pode contar
                  também com um acompanhamento nutricional personalizado! Em
                  parceria com nutricionista, oferecemos planos de alimentação
                  que se ajustam aos seus objetivos, a um preço mais acessível.
                  Não perca a oportunidade de potencializar seus resultados com
                  uma abordagem completa!
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill',
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../assets/images/rafael-e-nutricionista.png')}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
          <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                tag="a"
                color="primary"
                wideMobile
                style={{ width: '100%', maxWidth: '400px' }}
                href="https://wa.me/5518996643867?text=Ol%C3%A1,%20desejo%20conhecer%20mais%20sobre%20a%20consultoria%20e%20nutrição!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comece Sua Jornada de Transformação!
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
