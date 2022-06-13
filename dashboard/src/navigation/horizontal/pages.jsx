import { CloseSquare, PaperPlus } from 'react-iconly';

const pages = [
  {
    header: 'Products',
    id: 'Products-page',
    title: 'Products',
    icon: <PaperPlus set="curved" className="remix-icon" />,
    navLink: '/products',
  },
  {
    header: 'Services',
    id: 'Services-page',
    title: 'Services',
    icon: <PaperPlus set="curved" className="remix-icon" />,
    navLink: '/services',
  },
  {
    header: 'Categories',
    id: 'Categories-page',
    title: 'Categories',
    icon: <PaperPlus set="curved" className="remix-icon" />,
    navLink: '/categories',
  },
  // {
  //     header: "Apps",
  //     subMenu: [
  //         {
  //             id: "blank-page",
  //             title: "Blank Page",
  //             icon: <PaperPlus set="curved" className="remix-icon" />,
  //             navLink: "/blank-page",
  //         },
  //         {
  //             id: "errors",
  //             title: "Error Pages",
  //             icon: <CloseSquare set="curved" className="remix-icon" />,
  //             children: [
  //                 {
  //                     id: "error-page",
  //                     title: "404",
  //                     navLink: "/pages/error-page",
  //                 },
  //             ],
  //         },
  //     ]
  // }
];

export default pages;
