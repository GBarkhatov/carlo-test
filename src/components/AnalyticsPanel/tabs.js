import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import FirstPageIcon from '@material-ui/icons/FirstPage'

import { pageViews, unique, average, bounce } from './graph-data'
import { pageViewsLP, uniqueLP, averageLP, bounceLP } from './left-panel-data'

const tabs = [
  {
    title: 'Pageviews',
    Icon: TrendingUpIcon,
    text: '223.5k',
    change: 15,
    graph: pageViews,
    leftPanelData: pageViewsLP
  },
  {
    title: 'Unique visitors',
    Icon: PermIdentityIcon,
    text: '52.35k',
    change: 54,
    graph: unique,
    leftPanelData: uniqueLP
  },
  {
    title: 'Avg. time on site',
    Icon: QueryBuilderIcon,
    text: '2:23',
    change: -12,
    graph: average,
    leftPanelData: averageLP
  },
  {
    title: 'Bounce rate',
    Icon: FirstPageIcon,
    text: '68%',
    change: -1,
    graph: bounce,
    leftPanelData: bounceLP
  }
]

export default tabs
