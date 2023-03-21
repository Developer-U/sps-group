import svgSprive from 'gulp-svg-sprite'
import cheerio from 'gulp-cheerio'

export const svgSprite = () => {
  return app.gulp.src(app.path.src.svgicons, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SVG',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(svgSprive({
      mode: {
        stack: {
          sprite: '../icons/sprite.svg',
          // Превью иконок
          // example: true
        }
      }
    }))
    .pipe(cheerio({
      run: ($) => {
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
      }))
    .pipe(app.gulp.dest(app.path.build.images))
}
