import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Função para atualizar a largura da janela
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );

  return (
    <section
      {...props}
      className={outerClasses}
      style={{
        backgroundImage:
          windowWidth > 640
            ? `url(${require('./../../assets/images/bg.png')})`
            : 'none',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
      }}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            {windowWidth <= 640 && (
              <div className="hero-image-mobile">
                <Image
                  src={require('./../../assets/images/rafael-oliveira.png')}
                  alt="Imagem personalizada"
                />
              </div>
            )}
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Transforme Seu Corpo e Sua Vida com{' '}
              <span className="text-color-primary">
                {' '}
                Treinos Personalizados!
              </span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom text-sm">
                Está cansado de treinar sem ver resultados? Quer um
                acompanhamento profissional que realmente funcione para sua
                rotina? Eu sou Rafael Oliveira, e minha missão é te ajudar a
                conquistar o corpo e a saúde que você sempre quis, com um
                programa personalizado para o seu objetivo!
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup style={{ width: '100%' }}>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    style={{ width: '100%' }}
                    href="https://wa.me/5518996643867?text=Ol%C3%A1,%20desejo%20conhecer%20mais%20sobre%20a%20consultoria!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero conhecer mais!
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <div style={{ width: 896 }} width={896} height={504} />
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
