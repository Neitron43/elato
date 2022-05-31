import Image from 'next/image'




export default function NewsList ({ news, className }) {
  return <ul className={className + " " + "language__form"}>
      {
        news.map(news => (
          <li key={ news.id } className="news-list__item">
            <a className="news-list__link" href="#">
              <div className="news-list__container-image">
                  <Image className="news-list__image" src={ news.image } layout="responsive" objectFit="contain"/>
              </div>
              <div className="news-list__content">
                <p className="news-list__title">{ news.title }</p>
              </div>
            </a>
          </li>
        )) 
      }
  </ul>
}
