import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import FirstPageIcon from '@material-ui/icons/FirstPage'

const tabs = [
  {
    title: 'Pageviews',
    Icon: TrendingUpIcon,
    text: '223.5k',
    change: 15
  },
  {
    title: 'Unique visitors',
    Icon: PermIdentityIcon,
    text: '52.35k',
    change: 54
  },
  {
    title: 'Avg. time on site',
    Icon: QueryBuilderIcon,
    text: '2:23',
    change: -12
  },
  {
    title: 'Bounce rate',
    Icon: FirstPageIcon,
    text: '68%',
    change: -1
  }
]

export default tabs
