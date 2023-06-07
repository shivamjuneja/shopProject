import React from "react";
import Card from "../../common/Card";
import Heading from "../../common/Heading";
import Button from "../../common/Button";
import { CustomLineChart } from "../../common/CustomLineChart";

const SalesGraph = () => {
  return (
    <div>
      <div className="d-flex">
        <Heading name="Orders vs Sales" />
        <div className="ps-4">
          <Button name="Weekly" width="fit-content" />
        </div>
      </div>
      <Card >
        <div className="px-3 py-3">
          <div className="row">
            <div className="col-9">
              <CustomLineChart/>
            </div>
            <div className="col-3">
              <p>Shop mart</p>
              <p>Shop mart</p>
              <p>Growth</p>
              <p>43%</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SalesGraph;
