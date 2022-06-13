import {
  RiBookLine,
  RiPenNibLine,
  RiSpectrumLine,
  RiWalletLine,
  RiFilePaper2Line,
  RiTeamLine,
} from 'react-icons/ri';
import { Activity } from 'react-iconly';

const pages = [
  {
    header: 'hidden',
  },
  {
    id: 'Feed',
    title: 'Feed Setup',
    icon: <RiSpectrumLine set="curved" className="remix-icon" />,
    navLink: '/feed',
  },
  {
    id: 'Compose',
    title: 'Compose',
    icon: <RiPenNibLine set="curved" className="remix-icon" />,
    navLink: '/compose',
  },
  {
    id: 'Billing',
    title: 'Billing',
    icon: <RiWalletLine set="curved" className="remix-icon" />,
    navLink: '/billing',
  },
  {
    id: 'Channels',
    title: 'Channels',
    icon: <Activity set="curved" className="remix-icon" />,
    navLink: '/channels',
  },
  {
    id: 'Teams',
    title: 'Teams',
    icon: <RiTeamLine set="curved" className="remix-icon" />,
    navLink: '/teams',
  },
  {
    id: 'Log',
    title: 'Log',
    icon: <RiBookLine set="curved" className="remix-icon" />,
    navLink: '/logs',
  },
  {
    id: 'Docs',
    title: 'Docs',
    icon: <RiFilePaper2Line set="curved" className="remix-icon" />,
    navLink: 'https://documentation.engagespot.co',
    target: 'externalPage',
  },
];

export default pages;
