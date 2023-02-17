import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'
import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  console.log(comedyMovies)

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    swipeToSlide: true,
  }
  return (
    <div className="movies-container">
      <h2 className="movies-category-heading">Action Movies</h2>
      <Slider {...settings}>
        {actionMovies.map(eachMovieItem => (
          <MovieItem MovieItemDeatails={eachMovieItem} />
        ))}
      </Slider>
      <h2 className="movies-category-heading">Comedy Movies</h2>
      <Slider {...settings}>
        {comedyMovies.map(eachMovieItem => (
          <MovieItem MovieItemDeatails={eachMovieItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
