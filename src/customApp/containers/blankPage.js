import React, { Component } from "react";
import SimpleTable from "../../containers/Tables/antTables/tableViews/simpleView";
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import LayoutContent from "../../components/utility/layoutContent";
import { firestore } from "firebase";

const db = firestore()

const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];

db.collection("posts").get().then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
});

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <h1>Blank Page</h1>
          <SimpleTable
            pagination={false}
            columns={columns}
            dataSource={dataSource}
            className="isoSimpleTable"
          />
          {/* <Table dataSource={dataSource} columns={columns} /> */}
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
