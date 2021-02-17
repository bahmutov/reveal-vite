import 'reveal.js/dist/reveal.css'
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/league.css'
// our styles to adjust the presentation
import './styles.css'
import Reveal from 'reveal.js'

const deck = new Reveal()
deck.initialize({ hash: true, slideNumber: true })
