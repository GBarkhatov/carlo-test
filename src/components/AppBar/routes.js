import DashboardIcon from '@material-ui/icons/Dashboard'
import LanguageIcon from '@material-ui/icons/Language'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined'
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'

const routes = [
  {
    title: 'Dashboard',
    to: '/',
    Icon: DashboardIcon
  },
  {
    title: 'Sites',
    to: 'sites',
    Icon: LanguageIcon
  },
  {
    title: 'Campaigns',
    to: 'campaigns',
    Icon: CheckBoxOutlineBlankIcon
  },
  {
    title: 'Analytics',
    to: 'analytics',
    Icon: PieChartOutlinedIcon
  },
  {
    title: 'Live View',
    to: 'live-view',
    Icon: DesktopWindowsOutlinedIcon
  },
  {
    title: 'Users',
    to: 'users',
    Icon: PeopleAltOutlinedIcon
  },
  {
    title: 'Organizations',
    to: 'organizations',
    Icon: BusinessCenterOutlinedIcon
  },
  {
    title: 'Settings',
    to: 'settings',
    Icon: SettingsOutlinedIcon
  }
]

export default routes
