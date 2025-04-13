import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner text-center flex flex-col items-center justify-center',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );

  const sectionHeader = {
    title: 'O Que Você Vai Receber?',
  };

  const items = [
    'Plano de Treino Individualizado - Totalmente adaptado às suas necessidades.',
    'Orientação e Correção de Exercícios - Foco na execução correta para melhores resultados.',
    'Suporte Direto - Acompanhamento para garantir sua evolução contínua.',
    'Treinos Flexíveis - Feitos para se encaixar na sua rotina.',
  ];

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses} style={{ textAlign: 'center' }}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="text-lg">
            {items.map((item, index) => (
              <p key={index} className="mb-12">
                🔹 {item}
              </p>
            ))}
          </div>
          <div className="text-center mt-24">
            <strong>
              🎯 Quer um treino que funcione para você? Me chame agora!
            </strong>
          </div>
        </div>
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Button
            tag="a"
            color="primary"
            wideMobile
            style={{ minWidth: '400px' }}
            href="https://wa.me/5518996643867?text=Ol%C3%A1,%20desejo%20conhecer%20mais%20sobre%20a%20consultoria!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero conhecer mais!
          </Button>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
