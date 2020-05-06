import React, { useContext } from 'react';
import { Card, WingBlank, WhiteSpace, Badge } from 'antd-mobile';
import { ReportContext } from '@/pages/myReport';
import moment from 'moment';
function getReportList() {
  const { ReportList } = useContext(ReportContext);
  return (
    <>
      {ReportList.map(item => {
        return (
          <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title={item.projectName}
                extra={
                  <span>
                    {moment(Number(item.createdTime)).format('YYYY-MM-DD')}
                  </span>
                }
              />
              <Card.Body>
                <pre>{item.content}</pre>
              </Card.Body>
              <Card.Footer
                content={`耗费天数： ${item.actualDay}`}
                extra={
                  <Badge
                    text="已审批"
                    style={{
                      marginLeft: 12,
                      padding: '0 3px',
                      backgroundColor: '#21b68a',
                      borderRadius: 2,
                    }}
                  />
                }
              />
            </Card>
          </WingBlank>
        );
      })}
    </>
  );
}
export default getReportList;
