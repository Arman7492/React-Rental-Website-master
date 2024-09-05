import React from "react";
import "../../styles/find-equipment-form.css";
import "../../styles/find-equipment-form.css";
import { Form, FormGroup } from "reactstrap";

const FindEquipmentForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="X date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="professional">Professional</option>
            <option value="amateur">Amateur</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__equipment-btn">Find Instructor</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindEquipmentForm;
