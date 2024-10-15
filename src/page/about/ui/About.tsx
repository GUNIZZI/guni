import { useRef } from 'react';

import { Interpolation, Theme } from '@emotion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { FeatureAboutCompList } from '@/feature/about';

import { aboutStyle } from './About.css';

gsap.registerPlugin(useGSAP);

const txtDefaultAnimation = {
    opacity: 0,
    x: -20,
    duration: 0.5,
    ease: 'power2.out',
};
const txtMainAnimation = {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    duration: 1.6,
    ease: 'elastic.out',
};

const About = () => {
    const animationContainer = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();
            tl.from('.txtWrap > .txt1', txtDefaultAnimation);
            tl.from('.txtWrap > .txt2', txtDefaultAnimation, '-=0.2');
            tl.from('.txtWrap > .txt3', txtDefaultAnimation, '=0.2');
            tl.from('.txtWrap > .txt4', txtDefaultAnimation, '=1.3');
            tl.from('.txtWrap > .txt5', txtDefaultAnimation, '=0.2');
            tl.from('.txtWrap > .txt6', txtDefaultAnimation);
            tl.from('.txtWrap > .main > .firstLine > *', txtMainAnimation);
            tl.from('.txtWrap > .main > .lastLine > *', txtMainAnimation, '-=1.3');

            const repeatTl = gsap.timeline({
                repeat: -1,
                repeatDelay: 4,
            });
            repeatTl.to('.txtWrap > .main > .firstLine > *', {
                color: '#ffa700',
                textShadow: '0 0 5px rgba(255, 181, 84, 0.3)',
                stagger: 0.05,
                duration: 0.4,
                ease: 'power2.out',
            });
            repeatTl.to(
                '.txtWrap > .main > .firstLine > *',
                {
                    color: '#fff',
                    textShadow: '0 0 0 rgba(255, 181, 84, 0.3)',
                    stagger: 0.05,
                    duration: 0.4,
                    ease: 'power2.out',
                },
                '-=0.3',
            );
            repeatTl.to(
                '.txtWrap > .main > .lastLine > *',
                {
                    color: '#ffa700',
                    textShadow: '0 0 5px rgba(255, 181, 84, 0.3)',
                    stagger: 0.05,
                    duration: 0.4,
                    ease: 'power2.out',
                },
                '-=0.8',
            );
            repeatTl.to(
                '.txtWrap > .main > .lastLine > *',
                {
                    color: '#fff',
                    textShadow: '0 0 0 rgba(255, 181, 84, 0.3)',
                    stagger: 0.05,
                    duration: 0.4,
                    ease: 'power2.out',
                },
                '-=0.5',
            );

            tl.add(repeatTl);
        },
        { scope: animationContainer },
    );

    return (
        <div ref={animationContainer} className="page" css={aboutStyle as Interpolation<Theme>}>
            <div className="animationWrap">
                <div className="wrap">
                    <div className="innerWrap">
                        <iframe
                            src="/guni/aboutSvgNoRepeat.svg"
                            title="About SVG"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                        />
                        <div className="txtWrap">
                            <span className="txt1">UI Design</span>
                            <span className="txt2">MarkUp</span>
                            <span className="txt3">JS</span>
                            <span className="txt4">Vue.js</span>
                            <span className="txt5">React.js</span>
                            <span className="txt6">TS</span>
                            <span className="main">
                                <div className="firstLine">
                                    <span>F</span>
                                    <span>r</span>
                                    <span>o</span>
                                    <span>n</span>
                                    <span>t</span>
                                    <span>-</span>
                                    <span>e</span>
                                    <span>n</span>
                                    <span>d</span>
                                </div>
                                <div className="lastLine">
                                    <span>D</span>
                                    <span>e</span>
                                    <span>v</span>
                                    <span>e</span>
                                    <span>l</span>
                                    <span>o</span>
                                    <span>p</span>
                                    <span>e</span>
                                    <span>r</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listWrap">
                <div className="item analyze">
                    <div className="title">Analyze</div>
                    <div className="aboutInfo">
                        <div className="img" />
                        <div className="info">
                            <strong className="name">GUNI</strong>
                            <div className="infos">
                                <dl>
                                    <dt>E-mail</dt>
                                    <dd>h2dlhs@gmail.com</dd>
                                </dl>
                                <dl>
                                    <dt>Mobile</dt>
                                    <dd>010-7111-5374</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <FeatureAboutCompList />
            </div>
        </div>
    );
};

export { About };
