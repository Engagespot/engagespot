import { Col, Row, Table, Badge, Tag } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { handleError } from '../../../helpers/helpers';
import { SetLogsFetchSuccess } from '../../../redux/reducers/additional-fetch/additionalFetchActions';
import { ListLogs } from '../../../services/logs.service';
import { RiCheckLine } from 'react-icons/ri';

export default function WebPush() {
  const dispatch = useDispatch();
  const [highestPageNo, setHighestPageNo] = useState(1);
  const [tableDataLoader, setTableDataLoader] = useState(false);

  const { additionalFetch } = useSelector(
    ({ additionalFetch }) => ({
      additionalFetch: additionalFetch,
    }),
    shallowEqual
  );

  const logsColumns = [
    {
      title: 'Status ',
      key: 'status',
      width: '4%',
      align: 'center',
      render: (txt, record) => {
        let color;
        let event = record.event;

        if (event === 'received') {
          color = 'orange';
        } else if (event === 'discarded') {
          color = 'red';
        } else if (event === 'unknown' || event === null) {
          color = 'grey';
        } else {
          color = 'green';
        }

        return <Badge color={color} />;
      },
    },
    {
      title: 'Notification',
      key: 'Notification',
      width: '38%',
      render: (txt, record) => {
        return (
          <>
            {record.identifier && (
              <>
                <p className="csm-mb-3">
                  To :{' '}
                  <span className="csm-blue-color">
                    {record.identifier.length <= 53
                      ? record.identifier
                      : `${record.identifier.slice(0, 53)}...`}
                  </span>
                </p>

                <p className="csm-mb-3 csm-log-title">
                  {record.title.length <= 53
                    ? record.title
                    : `${record.title.slice(0, 53)}...`}
                </p>

                {record.description !== null && (
                  <p className="csm-mb-3 csm-log-description">
                    {record.description.length <= 53
                      ? record.description
                      : `${record.description.slice(0, 53)}...`}
                  </p>
                )}

                <p className="csm-mb-3 csm-word-break-all">
                  UUID :{' '}
                  <span className="csm-uuid">
                    {record.uuid.length <= 53
                      ? record.uuid
                      : `${record.uuid.slice(0, 53)}...`}
                  </span>
                </p>
              </>
            )}
          </>
        );
      },
    },
    {
      title: 'Channel',
      key: 'channel',
      width: '13%',
      dataIndex: 'channel',
      align: 'center',
      render: txt => {
        return <p className="csm-log-timestamp">{txt ? txt : '-'}</p>;
      },
    },
    {
      title: 'TimeStamp',
      key: 'createdAt',
      width: '17%',
      dataIndex: 'createdAt',
      render: txt => {
        return <p className="csm-log-timestamp">{txt}</p>;
      },
    },
    {
      title: 'Latest Event Received',
      key: 'event',
      width: '22%',
      dataIndex: 'event',
      align: 'center',
      render: (txt, record) => {
        let color;
        let event = record.event;

        if (event === 'received') {
          color = 'cyan';
        } else if (event === 'discarded') {
          color = 'red';
        } else if (event === 'delivered') {
          color = 'green';
        } else if (event === 'seen') {
          color = 'magenta';
        } else if (event === 'clicked') {
          color = 'purple';
        } else if (event === 'unknown' || event === null) {
          color = 'grey';
        } else {
          color = 'green';
        }

        return (
          <Tag className="csm-text-capitalise" color={color}>
            {txt}
          </Tag>
        );
      },
    },
    {
      title: 'Seen',
      dataIndex: 'Seen',
      key: 'Seen',
      align: 'center',
      width: '3%',
      render: (txt, record) => {
        if (record.event === 'seen' || record.event === 'clicked') {
          return <RiCheckLine size={16} color="green" />;
        } else {
          return '-';
        }
      },
    },
    {
      title: 'Clicked',
      dataIndex: 'Clicked',
      align: 'center',
      key: 'Clicked',
      width: '3%',
      render: (txt, record) => {
        if (record.event === 'clicked') {
          return <RiCheckLine size={16} color="green" />;
        } else {
          return '-';
        }
      },
    },
  ];

  const fetchListLogs = useCallback(
    async (pageNo = 1) => {
      const appId = additionalFetch.appId;

      try {
        const results = await ListLogs(appId, pageNo);
        const resultWithKey = results.map(result => {
          return {
            ...result,
            key: result.id,
          };
        });

        return resultWithKey;
      } catch (e) {
        handleError(e);

        // if result length is zero, then skipped in handlePagination
        return [];
      }
    },
    [additionalFetch.appId]
  );

  useEffect(() => {
    const handleSetLog = async () => {
      setTableDataLoader(true);
      const resultWithKey = await fetchListLogs(1);
      dispatch(SetLogsFetchSuccess(resultWithKey));
      setTableDataLoader(false);
    };

    handleSetLog();
  }, [fetchListLogs, dispatch]);

  const handlePagination = async value => {
    // if pageValue is lower or equal than highestPageNo return
    // eg:if coming back from 2nd page to 1st,we already have that data,so return
    // or revisiting the 2nd page again return
    if (value <= highestPageNo) return;

    const resultWithKey = await fetchListLogs(value);

    // to prevent adding additionalFetch.logs again if there is no Data
    if (resultWithKey.length !== 0) {
      const combinedResultWithKey = [...additionalFetch.logs, ...resultWithKey];
      dispatch(SetLogsFetchSuccess(combinedResultWithKey));
    }

    setHighestPageNo(value);
  };

  return (
    <Row gutter={[32, 0]}>
      <Col span={24}>
        <Row align="middle">
          <Col md={12} span={12}>
            <h4>Logs</h4>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="da-mb-32 da-mt-32">
        <div className="custom_card csm-w-100p">
          <div className="da-mt-16">
            <Table
              // the pageSize will always be one less than the limit(logs per Page)
              // in ListLogs on the logs.service.jsx page
              // this is to show the next Pagination button
              // limit is currently 6
              pagination={{ pageSize: 5, onChange: handlePagination }}
              columns={logsColumns}
              dataSource={additionalFetch.logs}
              showQuickJumper={false}
              loading={tableDataLoader}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}
