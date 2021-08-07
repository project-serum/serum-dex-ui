import React, { useRef, useState } from 'react';
import { Select, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { TOKEN_MINTS } from '@project-serum/serum';
import apps from '@project-serum/awesome-serum';

const { Option } = Select;

const appsAndTokens = apps.concat(
  TOKEN_MINTS.map((mint) => {
    return {
      name: `${mint.name} SPL`,
      url: `https://solscan.io/address/${mint.address.toBase58()}`,
      description: `${mint.name} SPL token`,
      icon: '',
      tags: [
        'token',
        'blockchain',
        'solana',
        'spl',
        'solana',
        mint.address.toBase58(),
      ],
    };
  }),
);

interface App {
  name: string;
  url: string;
  description: string;
  tags: string[];
}

export default function AppSearch(props) {
  const [searchMatches, setSearchMatches] = useState<App[]>([]);
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  const matchApp = (searchString: string, app: App) => {
    const lowerSearchStr = searchString.toLowerCase();
    return (
      app.name.toLowerCase().includes(lowerSearchStr) ||
      app.tags.some(
        (tag) =>
          tag.toLowerCase().includes(lowerSearchStr) ||
          lowerSearchStr.includes(tag.toLowerCase()),
      )
    );
  };

  const handleSearch = (value) => {
    setSearchValue(value === '' ? undefined : value);
    const filteredApps = appsAndTokens.filter((app) => matchApp(value, app));
    setSearchMatches(filteredApps);
  };

  const handleSelect = (value, option) => {
    window.open(option.href, '_blank');
    handleClear();
  };

  const handleClear = () => {
    setSearchMatches([]);
    setSearchValue(undefined);
  };

  const options = searchMatches.map((d) => (
    <Option key={d.name} value={d.name} href={d.url}>
      <h3>{d.name}</h3>
      <Typography.Text type="secondary">
        {d.url.replace('https://', '')}
      </Typography.Text>
    </Option>
  ));

  const ref = useRef<any>();
  return (
    <Select
      ref={ref}
      showSearch
      allowClear
      value={searchValue}
      placeholder={
        props.focussed || props.focussed === undefined
          ? 'Search for dex, swap, wallet, token...'
          : ''
      }
      onSearch={handleSearch}
      onClear={handleClear}
      onSelect={handleSelect}
      onFocus={props.onFocus}
      onBlur={() => {
        props.onBlur();
        handleClear();
      }}
      notFoundContent={null} // todo: make this search history
      style={{
        width: props.width || '300px',
        transition: props.focussed ? 'width 0.1s ease 0.1s' : '',
      }}
      dropdownStyle={{
        width: props.width || '300px',
      }}
      dropdownMatchSelectWidth={false}
      suffixIcon={
        <SearchOutlined onClick={() => ref.current && ref.current.focus()} />
      }
      filterOption={false}
    >
      {options}
    </Select>
  );
}
