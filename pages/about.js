import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import brandImage from '../public/image/brand-image.png'
import cardImage1 from '../public/image/card-image1.png'
import cardImage2 from '../public/image/card-image2.png'
import cardImage3 from '../public/image/card-image3.png'
import cardImage4 from '../public/image/card-image4.png'
import cardImage5 from '../public/image/card-image5.png'
import kateEmily from '../public/image/kate-emily-image.png'
import Slider from '../components/Slider/Slider'
import { useState } from 'react'
export default function About() {
    const slidesCats = [
        <>
            <Image key={1} src={kateEmily} alt="Слайд 1" objectFit="contain" />
            <h3>ааа</h3>
            <p>аааа</p>
        </>,
        <Image key={2} src={kateEmily} alt="Слайд 2" objectFit="contain"/>,
    ]
    const slidesDogs = [
        <>
            <Image key={1} src={cardImage1} alt="Слайд 1" objectFit="contain" />
            <h3>ааss</h3>
            <p>аааа</p>
        </>,
        <Image key={2} src={kateEmily} alt="Слайд 2" objectFit="contain" />,
    ]
    const [slider, setSlider] = useState('cats')
    const changeSlider = (elem) => {
        setSlider(elem)
    }
    return (
        <>
            <Head>
                <title>Elato - корм для кошек и собак</title>
                <meta name="description" content="Elato" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section>
                <div className='wrapper'>
                    <div className='brand'>
                        <div className='brand__info'>
                            <h2>Для тех, кто ценит и стремится 
                                к настоящему, мы создали 
                                бренд Elato</h2>
                            <p>Мы поддерживаем стремление к жизни с настоящими чувствами в гармонии со своими питомцами</p>
                            <p>Мы предлагаем наполнить жизнь питомцев тем, что отражает нашу любовь и заботу. 
                                Тем, что по-настоящему наполнит наших любимцев жизненной силой, энергией и укрепит их здоровье.</p>
                        </div>
                        <div className='brand__image'>
                            <Image src={brandImage} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='wrapper'>
                    <div className='values'>
                        <h2 className='values__header'>Ценности бренда Elato</h2>
                        <div className='values__cards--top'>
                            <div className='values__card'>
                                <Image src={cardImage1} objectFit="contain" />
                                <div className='card-info'>
                                    <div className='card__blur'></div>
                                    <h3 className='card__header'>ИСКРЕННОСТЬ</h3>
                                    <p className='card__ph'>Настоящие и искренние чувства в отношениях 
                                    с питомцами вдохновляют нас на создание настоящих продуктов – натуральных 
                                    и соответствующих естественным потребностям наших любимцев. 
                                    Нам важна искренность в общении – мы открыто общаемся с покупателями, 
                                    ценим честные отзывы и эмоции.</p>
                                </div>
                            </div>
                            <div className='values__card'>
                                <Image src={cardImage2} objectFit="contain" />
                                <div className='card-info'>
                                    <div className='card__blur'></div>
                                    <h3 className='card__header'>ДОВЕРИЕ</h3>
                                    <p className='card__ph'>Доверие в отношениях с питомцами мотивирует на 
                                    создание продуктов, в качестве которых мы будем полностью уверены. 
                                    Мы используем только достоверную информацию, опираемся на факты, 
                                    проводим исследования при разработке продуктов. 
                                    Мы ценим доверие во взаимодействии с потребителями и партнерами. 
                                    Соблюдаем обязательства. </p>
                                </div>
                            </div>
                            <div className='values__card'>
                                <Image src={cardImage3} objectFit="contain" />
                                <div className='card-info'>
                                    <div className='card__blur'></div>
                                    <h3 className='card__header'>ОТКРЫТОСТЬ</h3>
                                    <p className='card__ph'>Мы открыто высказываем свое мнение 
                                    и прислушиваемся к мнению других. Мы открыты для нового на 
                                    пути совершенствования наших продуктов.</p>
                                </div>
                            </div>
                            <div className='values__card'>
                                <Image src={cardImage4} objectFit="contain" />
                                <div className='card-info'>
                                    <div className='card__blur'></div>
                                    <h3 className='card__header'>РАДОСТЬ, ВКУС К ЖИЗНИ</h3>
                                    <p className='card__ph'>Нам нравится, когда в результате 
                                    наших усилий питомцы здоровы, активны, полны сил, а их хозяева – счастливы. 
                                    И вместе они наслаждаются прогулками, играми, жизнью!</p>
                                </div>
                            </div>
                        </div>
                        <div className='values__cards--bottom'>
                            <div className='values__card'>
                                <Image src={cardImage5} objectFit="contain" />
                                <div className='card-info'>
                                    <div className='card__blur'></div>
                                    <h3 className='card__header'>ЗДОРОВЬЕ</h3>
                                    <p className='card__ph'>Главное для нас - забота о здоровье питомцев. 
                                    Мы проводим научные исследования и привлекаем профессионалов для разработки 
                                    по-настоящему полезных продуктов. Применяем современные технологии производства для 
                                    сохранения свойств натуральных ингредиентов. Информируем о правильном кормлении, уходе 
                                    и содержании животных.!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='heroes__background'>
                    <div className='wrapper'>
                        <div className='heroes'>
                            <div className='heroes__upper'>
                                <h2>Герои бренда и их истории</h2>
                                <h3>Герои бренда Elato - настоящие хозяева и их питомцы, настоящие друзья.
                                Мгновения искренних чувств между ними запечатлены на упаковках Elato.
                                За каждыми героями стоят реальные истории чувств и отношений.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wrapper'>
                        <div className='heroes'>
                            <div className='heroes__main'>
                                <div className='heroes__options'>
                                    <button onClick={() => changeSlider('cats')}>Владельцы кошек</button>
                                    <button onClick={() => changeSlider('dogs')}>Владельцы собак</button>
                                </div>
                                {slider == 'dogs' &&
                                    <Slider slides={ slidesDogs } className='slider__about--dogs'/>
                                }
                                {slider == 'cats' &&
                                    <Slider slides={ slidesCats } className='slider__about--cats'/>
                                }
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}