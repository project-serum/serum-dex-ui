import React, {useState} from "react";
import {Select} from "antd";
import apps from "./app-list.json";
import {SearchOutlined} from "@ant-design/icons";

const { Option } = Select;

interface App {
  name: string;
  url: string;
  description: string;
  tags: string[];
}


export default function AppSearch() {
  const [searchMatches, setSearchMatches] = useState<App[]>([]);
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  const matchApp = (searchString: string, app: App) => {
    return app.name.toLowerCase().includes(searchString.toLowerCase());
  }

  const handleSearch = (value) => {
    console.log(value);
    setSearchValue(value);
    console.log(apps);
    setSearchMatches(apps.filter(app => matchApp(value, app)));
  }

  const options = searchMatches.map(d => <Option key={d.name} value={d.name}>{d.name}</Option>);
  return (
    <Select
      showSearch
      allowClear
      value={searchValue}
      placeholder={"Search for app..."}
      onSearch={handleSearch}
      notFoundContent={null} // have this be your history
      style={{
        width: '250px'
      }}
      suffixIcon={<SearchOutlined/>}
    >
      {options}
    </Select>
  );
}
