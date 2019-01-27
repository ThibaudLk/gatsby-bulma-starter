import React from 'react'
import { Calendar } from 'react-widgets'
import H1 from '../components/H1';
import RightPanel from '../containers/RightPanel';
import LeftPanel from '../containers/LeftPanel';
import ActivityArea from '../containers/ActivityArea';
import MonthAtAGlance from '../containers/MonthAtAGlance';
import EventCategoryList from '../containers/EventCategoryList';
import EventSummaryList from '../containers/EventSummaryList';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';

import 'react-widgets/dist/css/react-widgets.css';
import Layout from '../components/layout';

Moment.locale('en');
momentLocalizer();


const IndexPage = (props) => {
  
  const users = props.data.allRandomUser.edges;

  return (
    <Layout>
      <ActivityArea>
        <LeftPanel>
          <MonthAtAGlance>
            <Calendar defaultValue={new Date()}/>
          </MonthAtAGlance>
          <EventCategoryList>
          </EventCategoryList>
        </LeftPanel>
        <RightPanel>
          <EventSummaryList>
          </EventSummaryList>
          <div>
            {users.map((user, i) => {
              const userData = user.node;
              return (
                <div key={i}>
                  <p>Name: {userData.name.first}</p>
                  <img src={userData.picture.medium} />
                </div>
              )
            })}
          </div>
        </RightPanel>
      </ActivityArea>
    </Layout>
  );
};

export default IndexPage

export const query = graphql`
  query RandomUserQuery {
    allRandomUser {
      edges {
        node {
          gender
          name {
            title
            first
            last
          }
          picture {
            large
            medium
            thumbnail
          }
        }
      }
    }
  }
`;