import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPowerOff,
  faToggleOff,
  faBuilding
} from '@fortawesome/free-solid-svg-icons'
import {
  faBuilding as farBuilding
} from '@fortawesome/free-regular-svg-icons'

library.add(
  faToggleOff,
  faPowerOff,
  faBuilding,
  farBuilding,
)

export {
  FontAwesomeIcon
}
