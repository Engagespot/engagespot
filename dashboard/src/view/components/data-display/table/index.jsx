import React, { useRef, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Row, Col, Menu } from 'antd';

import Breadcrumbs from '../../../../layout/components/content/breadcrumbs';
import PageTitle from '../../../../layout/components/content/page-title';

import BasicTable from './basic';
import TableSelection from './selection';
import TableSizes from './tableSizes';
import JsxStyleApiTable from './jsxStyleApi';
import SelectionAndOperationTable from './selectionAndOperation';
import CustomSelectionTable from './customSelection';
import FilterAndSorterTable from './filterAndSorter';
import FilterInTreeTable from './filterInTree';
import MultipleSorterTable from './multipleSorter';
import ResetFiltersSortersTable from './resetFiltersSorters';
import CustomizedFilterPanelTable from './customizedFilterPanel';
import AjaxTable from './ajaxTable';
import BorderTitleFooterTable from './borderTitleFooter';
import ExpandableRowTable from './expandableRow';
import ColRowSpanTable from './colRowSpan';
import TreeDataTable from './treeData';
import FixedHeaderTable from './fixedHeader';
import FixedColumnsTable from './fixedColumns';
import FixedColumnsHeaderTable from './fixedColumnsHeader';
import GroupingTableHeadTable from './groupingTableHead';
import EditableCellsTable from './editableCells';
import EditableRowsTable from './editableRows';
import NestedTable from './nestedTable';
import DragSortingTable from './dragSorting';
import DragSortingHandlerTable from './dragSortingHandler';
import EllipsisColumnTable from './ellipsisColumn';
import EllipsisColumnTooltipTable from './ellipsisColumnTooltip';
import SummaryTable from './summaryTable';
import VirtualListTable from './virtualList';
import ResponsiveTable from './responsiveTable';
import PaginationTable from './paginationTable';
import FixedHeaderScrollbarPageTable from './fixedHeaderScrollbarPage';
import DynamicSettingsTable from './dynamicSettings';

export default function Table() {
  // Redux
  const customise = useSelector(state => state.customise);

  // Menu
  const menuData = [
    'Basic',
    'JSX style API',
    'Selection',
    'Selection and operation',
    'Custom selection',
    'Filter and sorter',
    'Filter in Tree',
    'Multiple sorter',
    'Reset filters and sorters',
    'Customized filter panel',
    'Ajax',
    'Size',
    'border, title and footer',
    'Expandable Row',
    'colSpan and rowSpan',
    'Tree data',
    'Fixed Header',
    'Fixed Columns',
    'Fixed Columns and Header',
    'Grouping table head',
    'Editable Cells',
    'Editable Rows',
    'Nested tables',
    'Drag sorting',
    'Drag sorting with handler',
    'Ellipsis column',
    'Ellipsis column custom tooltip',
    'Summary',
    'Virtual list',
    'Responsive',
    'Pagination Settings',
    'Fixed header and scroll bar with the page',
    'Dynamic Settings',
  ];

  // Scroll To
  let myRef = useRef(null);
  myRef = [];

  const executeScroll = e => {
    window.scrollTo({
      top: myRef[e.key].offsetTop + 80,
    });
  };

  // Scrolling Menu Active
  let activeClass = 'active';
  let menuActive = useRef(null);
  menuActive = [];

  useEffect(() => {
    if (window.scrollY == 0) {
      menuActive[0].classList.add(activeClass);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      for (let i = 0; i < myRef.length; i++) {
        if (myRef[i].offsetTop != null) {
          if (i + 1 >= myRef.length) {
            if (currentScrollY > myRef[i].offsetTop + 70) {
              menuActive[i].classList.add(activeClass);
            } else {
              menuActive[i].classList.remove(activeClass);
            }
          } else {
            if (i == 0) {
              if (
                currentScrollY > myRef[i].offsetTop + 70 &&
                currentScrollY <= myRef[i + 1].offsetTop + 70
              ) {
                menuActive[i].classList.add(activeClass);
              }
            } else {
              if (
                currentScrollY > myRef[i].offsetTop + 70 &&
                currentScrollY <= myRef[i + 1].offsetTop + 70
              ) {
                menuActive[0].classList.remove(activeClass);
                menuActive[i].classList.add(activeClass);
              } else {
                menuActive[i].classList.remove(activeClass);
              }
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Row gutter={[32]}>
      <Col xl={19} span={24} className="da-mb-32 da-table-content-col">
        <Row gutter={[32, 32]} className="da-mb-32">
          <Breadcrumbs
            breadCrumbParent="Components"
            breadCrumbParent2="Data Display"
            breadCrumbActive="Table"
          />

          <PageTitle
            pageTitle="Table"
            pageText="A table displays rows of data."
          />
        </Row>

        <Row gutter={[32, 32]}>
          <Col
            span={24}
            ref={ref => {
              myRef[0] = ref;
            }}
          >
            <BasicTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[1] = ref;
            }}
          >
            <JsxStyleApiTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[2] = ref;
            }}
          >
            <TableSelection />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[3] = ref;
            }}
          >
            <SelectionAndOperationTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[4] = ref;
            }}
          >
            <CustomSelectionTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[5] = ref;
            }}
          >
            <FilterAndSorterTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[6] = ref;
            }}
          >
            <FilterInTreeTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[7] = ref;
            }}
          >
            <MultipleSorterTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[8] = ref;
            }}
          >
            <ResetFiltersSortersTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[9] = ref;
            }}
          >
            <CustomizedFilterPanelTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[10] = ref;
            }}
          >
            <AjaxTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[11] = ref;
            }}
          >
            <TableSizes />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[12] = ref;
            }}
          >
            <BorderTitleFooterTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[13] = ref;
            }}
          >
            <ExpandableRowTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[14] = ref;
            }}
          >
            <ColRowSpanTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[15] = ref;
            }}
          >
            <TreeDataTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[16] = ref;
            }}
          >
            <FixedHeaderTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[17] = ref;
            }}
          >
            <FixedColumnsTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[18] = ref;
            }}
          >
            <FixedColumnsHeaderTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[19] = ref;
            }}
          >
            <GroupingTableHeadTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[20] = ref;
            }}
          >
            <EditableCellsTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[21] = ref;
            }}
          >
            <EditableRowsTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[22] = ref;
            }}
          >
            <NestedTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[23] = ref;
            }}
          >
            <DragSortingTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[24] = ref;
            }}
          >
            <DragSortingHandlerTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[25] = ref;
            }}
          >
            <EllipsisColumnTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[26] = ref;
            }}
          >
            <EllipsisColumnTooltipTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[27] = ref;
            }}
          >
            <SummaryTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[28] = ref;
            }}
          >
            <VirtualListTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[29] = ref;
            }}
          >
            <ResponsiveTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[30] = ref;
            }}
          >
            <PaginationTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[31] = ref;
            }}
          >
            <FixedHeaderScrollbarPageTable />
          </Col>

          <Col
            span={24}
            ref={ref => {
              myRef[32] = ref;
            }}
          >
            <DynamicSettingsTable />
          </Col>
        </Row>
      </Col>

      <Col span={5} className="da-table-menu">
        <Menu
          mode="inline"
          theme={customise.theme == 'light' ? 'light' : 'dark'}
        >
          {menuData.map((title, index) => (
            <Menu.Item key={index} onClick={executeScroll}>
              <span
                ref={ref => {
                  menuActive[index] = ref;
                }}
              >
                <span>{title}</span>
              </span>
            </Menu.Item>
          ))}
        </Menu>
      </Col>
    </Row>
  );
}
