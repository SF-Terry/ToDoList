import React from 'react'
import { Label, Segment } from 'semantic-ui-react'
import Tappable from 'react-tappable'
import moment from 'moment'

import { getTimingInfo } from '../util'
import { allTargetLevels } from '../store/initialState'



const ListItem = ({ item, onTap, onPress }) => {
  const {
    name,
    level,
    isTiming,
    startDate: theStartDate,
    endDate: theEndDate
  } = item
  const startDate = theStartDate ? moment(theStartDate) : null
  const endDate = theEndDate ? moment(theEndDate) : null

  const { color } = allTargetLevels.get(level)

  const shouldShowTiming = isTiming
  const _onTap = e => {
    e.preventDefault()
    onTap(item)
  }

  const _onPress = () => {
    onPress(item)
  }
  let timingInfo = shouldShowTiming ? getTimingInfo(startDate, endDate) : null


  return (
    <Tappable onPress={_onPress} onTap={_onTap}>
      <Segment inverted color={color} >
        {shouldShowTiming && <Label color='grey'>{timingInfo}</Label>}
        &nbsp;&nbsp;
      {name}
      </Segment>
    </Tappable>
  )
}

ListItem.propTypes = {
  item: React.PropTypes.object,
  onTap: React.PropTypes.func,
  onPress: React.PropTypes.func
};

export default ListItem