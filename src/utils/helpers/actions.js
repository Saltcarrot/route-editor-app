import * as act from '../../redux/actions/routeActions'

export const actions = {
  add: (title) => act.addRoutePointAction(title),
  remove: (id) => act.removeRoutePointAction(id),
  swap: (source, target) => act.swapRoutePointsAction(source, target),
}
