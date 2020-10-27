import React from "react";
import {Input} from "antd/";
import * as apps from "./app-list.json";

export default function AppSearch() {

  const onChange = (e) => {
    console.log(e);
  }

  const onSearch = (value, e) => {
    console.log(value);
  }

  return (
    <Input.Search
      allowClear
      onChange={onChange}
      onSearch={onSearch}
      enterButton={}
    />
  )
}
