import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { YMaps, Map, Placemark, Polyline, ZoomControl } from 'react-yandex-maps'

import { actions } from '../../../redux/actions/routePointsActions'

import YandexMapWrapper from './YandexMap.style'

const YandexMap = () => {
  const routePoints = useSelector((state) => state.routePoints)
  const dispatch = useDispatch()

  const [ymaps, setYMaps] = useState(null)

  const onDragMarkerHandler = (e, routePointID) => {
    const newCoords = e.get('target').geometry.getCoordinates()
    dispatch(actions.updateCoordinates(routePointID, newCoords))
  }

  const getRoutePointAddress = (coords, routePointID) => {
    ymaps.geocode(coords).then((res) => {
      let address = res.geoObjects.get(0).getAddressLine()
        ? res.geoObjects.get(0).getAddressLine()
        : 'Ошибка получения адреса'
      dispatch(actions.updateAddress(routePointID, address))
    })
  }

  const simplifyAddress = (addr) => {
    return addr.substring(addr.indexOf(', ') + 1)
  }

  return (
    <YandexMapWrapper>
      <YMaps query={{ apikey: process.env.REACT_APP_YAPI_KEY }}>
        <Map
          height='100%'
          width='100%'
          defaultState={{ center: [55.159902, 61.402554], zoom: 15 }}
          modules={['geocode']}
          onLoad={(ymaps) => setYMaps(ymaps)}
        >
          {routePoints.map((routePoint, idx, arr) => {
            return (
              <Placemark
                key={`route ${idx}`}
                geometry={routePoint.coordinates}
                properties={{
                  balloonContentHeader:
                    routePoint.order === 1
                      ? 'Начало маршрута'
                      : routePoint.order === arr.length && 'Конец маршрута',
                  balloonContent: routePoint.title,
                  balloonContentFooter: routePoint.address,
                  iconCaption: simplifyAddress(routePoint.address),
                }}
                options={{
                  iconColor:
                    routePoint.order === 1
                      ? '#de6f9d'
                      : routePoint.order === arr.length
                      ? '#6fde96'
                      : '#6fbbde',
                  draggable: true,
                }}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                onDrag={(e) => onDragMarkerHandler(e, routePoint.id)}
                onDragEnd={({ originalEvent }) =>
                  getRoutePointAddress(
                    originalEvent.target.geometry.getCoordinates(),
                    routePoint.id
                  )
                }
              />
            )
          })}
          <Polyline
            geometry={routePoints.map((routePoint) => routePoint.coordinates)}
            options={{ strokeWidth: 3 }}
          />
          <ZoomControl
            options={{
              position: {
                top: 10,
                right: 10,
              },
            }}
          />
        </Map>
      </YMaps>
    </YandexMapWrapper>
  )
}

export default YandexMap
