import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import FirstPageIcon from '@material-ui/icons/FirstPage'

import { pageViews, unique, average, bounce } from './graph-data'

const tabs = [
  {
    title: 'Pageviews',
    Icon: TrendingUpIcon,
    text: '223.5k',
    change: 15,
    graph: pageViews
  },
  {
    title: 'Unique visitors',
    Icon: PermIdentityIcon,
    text: '52.35k',
    change: 54,
    graph: unique
  },
  {
    title: 'Avg. time on site',
    Icon: QueryBuilderIcon,
    text: '2:23',
    change: -12,
    graph: average
  },
  {
    title: 'Bounce rate',
    Icon: FirstPageIcon,
    text: '68%',
    change: -1,
    graph: bounce
  }
]

export default tabs
