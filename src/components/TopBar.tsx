import {
  InfoCircleOutlined,
  PlusCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Col, Menu, Popover, Row, Select } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import { useWallet } from '../utils/wallet';
import { ENDPOINTS, useConnectionConfig } from '../utils/connection';
import Settings from './Settings';
import CustomClusterEndpointDialog from './CustomClusterEndpointDialog';
import { EndpointInfo } from '../utils/types';
import { notify } from '../utils/notifications';
import { Connection } from '@solana/web3.js';
import WalletConnect from './WalletConnect';
import AppSearch from './AppSearch';
import { getTradePageUrl } from '../utils/markets';
// import DynamicMenu from "./Submenus";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 30px;
  flex-wrap: wrap;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #99CCFF;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  img {
    height: 30px;
    margin-right: 8px;
  }
`;

const EXTERNAL_LINKS = {
  '/learn': 'https://docs.projectserum.com/trade-on-serum-dex/trade-on-serum-dex-1',
  '/add-market': 'https://serum-academy.com/en/add-market/',
  '/wallet-support': 'https://serum-academy.com/en/wallet-support',
  '/dex-list': 'https://serum-academy.com/en/dex-list/',
  '/developer-resources': 'https://serum-academy.com/en/developer-resources/',
  '/explorer': 'https://solscan.io',
  '/srm-faq': 'https://projectserum.com/srm-faq',
  '/swap': 'https://swap.projectserum.com',
};

export default function TopBar() {
  const { connected, wallet } = useWallet();
  const {
    endpoint,
    endpointInfo,
    setEndpoint,
    availableEndpoints,
    setCustomEndpoints,
  } = useConnectionConfig();
  const [addEndpointVisible, setAddEndpointVisible] = useState(false);
  const [testingConnection, setTestingConnection] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const [searchFocussed, setSearchFocussed] = useState(false);

  const handleClick = useCallback(
    (e) => {
      if (!(e.key in EXTERNAL_LINKS)) {
        history.push(e.key);
      }
    },
    [history],
  );

  const onAddCustomEndpoint = (info: EndpointInfo) => {
    const existingEndpoint = availableEndpoints.some(
      (e) => e.endpoint === info.endpoint,
    );
    if (existingEndpoint) {
      notify({
        message: `An endpoint with the given url already exists`,
        type: 'error',
      });
      return;
    }

    const handleError = (e) => {
      console.log(`Connection to ${info.endpoint} failed: ${e}`);
      notify({
        message: `Failed to connect to ${info.endpoint}`,
        type: 'error',
      });
    };

    try {
      const connection = new Connection(info.endpoint, 'recent');
      connection
        .getBlockTime(0)
        .then(() => {
          setTestingConnection(true);
          console.log(`testing connection to ${info.endpoint}`);
          const newCustomEndpoints = [
            ...availableEndpoints.filter((e) => e.custom),
            info,
          ];
          setEndpoint(info.endpoint);
          setCustomEndpoints(newCustomEndpoints);
        })
        .catch(handleError);
    } catch (e) {
      handleError(e);
    } finally {
      setTestingConnection(false);
    }
  };

  const endpointInfoCustom = endpointInfo && endpointInfo.custom;
  useEffect(() => {
    const handler = () => {
      if (endpointInfoCustom) {
        setEndpoint(ENDPOINTS[0].endpoint);
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [endpointInfoCustom, setEndpoint]);

  const tradePageUrl = location.pathname.startsWith('/market/')
    ? location.pathname
    : getTradePageUrl();

  return (
    <>
      <CustomClusterEndpointDialog
        visible={addEndpointVisible}
        testingConnection={testingConnection}
        onAddCustomEndpoint={onAddCustomEndpoint}
        onClose={() => setAddEndpointVisible(false)}
      />
      <Wrapper>
        <LogoWrapper onClick={() => history.push(tradePageUrl)}>
          <img src={logo} alt="" />
          {'StarAtlas.Exchange'}
        </LogoWrapper>
        <Menu
          mode="horizontal"
          onClick={handleClick}
          selectedKeys={[location.pathname]}
          style={{
            borderBottom: 'none',
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            flex: 1,
          }}
        >
          <Menu.Item key={tradePageUrl} style={{ margin: '0 10px 0 20px' }}>
            TRADE
          </Menu.Item>

          <Menu.SubMenu title="TOKENS">
              <Menu.Item key="Di66GTLsV64JgCCYGVcY21RZ173BHkjJVgPyezNN7P1K">Star Atlas | ATLAS/USDC </Menu.Item>
              <Menu.Item key="HxFLKUAmAMLz1jtT3hbvCMELwH5H9tpM2QugP8sKyfhW">Star Atlas DAO | POLIS/USDC </Menu.Item>
            <Menu.Item key="6fk7SnxrF69fPkfMNnkjPXbxsqd8xzDfNpGWbtcdfhFX">Star Atlas DAO | POLIS/ATLAS</Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu title="COLLECTIBLE">
            <Menu.ItemGroup title="POSTER">
              <Menu.Item key="AYXTVttPfhYmn3jryX5XbRjwPK2m9445mbN2iLyRD6nq">DISCOVERY OF IRIS | DOI/USDC</Menu.Item>
              <Menu.Item key="5Erzgrw9pTjNWLeqHp2sChJq7smB7WXRQYw9wvkvA59t">THE HEART OF STAR ATLAS | HOSA/USDC</Menu.Item>
              <Menu.Item key="DXPv2ZyMD6Y2mDenqYkAhkvGSjNahkuMkm4zv6DqB7RF">THE CONVERGENCE WAR | TCW/USDC</Menu.Item>
              <Menu.Item key="73d9N7BbWVKBG6A2xwwwEHcxzPB26YzbMnRjue3DPzqs">SHORT STORY OF A LOST ASTRONAUT | LOST/USDC</Menu.Item>
              <Menu.Item key="AM9sNDh48N2qhYSgpA58m9dHvrMoQongtyYu2u2XoYTc">B ❤ P | LOVE/USDC</Menu.Item>
              <Menu.Item key="BJiV2gCLwMvj2c1CbhnMjjy68RjqoMzYT8brDrpVyceA">THE ASSASSINATION OF PAIZUL | MRDR/USDC</Menu.Item>
              <Menu.Item key="7JzaEAuVfjkrZyMwJgZF5aQkiEyVyCaTWA3N1fQK7Y6V">PAIZUL FUNERAL PROCESSION | PFP/USDC</Menu.Item>
              <Menu.Item key="8yQzsbraXJFoPG5PdX73B8EVYFuPR9aC2axAqWearGKu">AHR VISITS EARTH | AVE/USDC</Menu.Item>
              <Menu.Item key="AVHndcEDUjP9Liz5dfcvAPAMffADXG6KMPn8sWB1XhFQ">THE LAST STAND | TLS/USDC</Menu.Item>
              <Menu.Item key="FZ9xhZbkt9bKKVpWmFxRhEJyzgxqU5w5xu3mXcF6Eppe">THE SIGNING OF THE PEACE TREATY | SPT/USDC</Menu.Item>
              <Menu.Item key="4jN1R453Acv9egnr7Dry3x9Xe3jqh1tqz5RokniaeVhy">THE PEACEBRINGERS ARCHIVE | PBA/USDC</Menu.Item>
              <Menu.Item key="J99HsFQEWKR3UiFQpKTnF11iaNiR1enf2LxHfgsbVc59">USTUR WOD.BOD | UWB/USDC</Menu.Item>
              <Menu.Item key="HdvXMScwAQQh9pEvLZjuaaeJcLTmixxYoMFefeqHFn2E">OM PHOTOLI | OMPH/USDC</Menu.Item>
              <Menu.Item key="G919S8193DGxgt133dkwiMnEbd7AK5MnjTjfaiZLM9HS">STAR ATLAS | STAR/USDC</Menu.Item>
              <Menu.Item key="3J73XDv9QUsXJdWKD8J6YFk4XxPNx5hijqjyxdNJqaG9">ARMSTRONG FOREVER | ASF/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="SKIN">
              <Menu.Item key="5YHdWMXtAvEuUDZgsXNxvHAAKwuNu9Dq4DDWU8268qqr">NANOBYTE | PX4SNB/USDC</Menu.Item>
              <Menu.Item key="3u7Lm2uwxS8Prfd1HfZShpoYhCxXJZLi8YXem4b6FZFQ">SPACER | PX5SSP/USDC</Menu.Item>
              <Menu.Item key="3rZ9g6JC47U6aLMWEUhEAkSf7Kqt11FkPXvWM2ssLgM9">SPHINX | TIGUSS/USDC</Menu.Item>
              <Menu.Item key="8YX24DNagnSHqFkTbts8NihegSceo3qZaeEWWTgJeDSa">B.O.B. | OJJSBB/USDC</Menu.Item>
              <Menu.Item key="3oK293Mgd6tbqXgUZp4tw48h9DHrxH5pig1MPLK73iLL">USTURN | VOPSUS/USDC</Menu.Item>
              <Menu.Item key="5KcER4cXLToXSYMoykdXiGwXg97Hjs7FErKaoDYKq4y8">LONE STAR | FBPLSL/USDC</Menu.Item>
              <Menu.Item key="Ac8niMjqfCWruVF493iW1LeFzyDMGCrdDrC64iLL4ecC">STREAMCATCHER | OTSS/USDC</Menu.Item>
              <Menu.Item key="4RHxqBc76NAQxcT8DQJZN9i9s1BeRWGiKviHyWgsj8EV">BLACK SUN | CALGBS/USDC</Menu.Item>
              <Menu.Item key="9ZjTVYfw8ock5QZAiCwp13pz9ZPLRa7DtA29sJU9FQoH">BLACK SUN | CCHSB/USDC</Menu.Item>
              <Menu.Item key="BdivWfkYfE9XPVzpeeYZ6xZqv5p6jiYym5mU22Rfscd5">WHITE HOT | OJSW/USDC</Menu.Item>
              <Menu.Item key="9etn4jMzfyBBZCEMdAQqd1Mop19aopJyBhMnaSG5NazZ">RAYDIUM DEFY | PX5SR/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="PET">
              <Menu.Item key="yWNmeZVXg7My9PMdZGiSx7jsKYkkeCiqHeQbD7zdJeq">TIGU | TIGU/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="EMOTE">
              <Menu.Item key="6U9c1n2GU7tRr8Bs7vcXoXACmmEQ87X6To3ie5H6rKyB">ANCIENT DANCE | TIGUEA/USDC</Menu.Item>
              <Menu.Item key="GSzxxsnVeTGmCLJ84y2dQeBoBVW1Su8bTqR7bJyDxjxn">PEACE SIGN | CEMOP/USDC</Menu.Item>
              <Menu.Item key="CGuJJJp4UbBrph6EDoWgAKcP6J8ZfWJ28r72uoj9WBqU">SQUIDDISH | VOPESQ/USDC</Menu.Item>
              <Menu.Item key="Dauk5SEHR8sx3FNmgZVBUaAV7heWAujkxMbGSZkQXs1n">ROLLING COAL | FBPLER/USDC</Menu.Item>
              <Menu.Item key="6kqfE89LpaPn25zMxxz83bWZK59BGzH9DJsDw2GZyxue">TO INFINITY | CALGEI/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="CREW GEAR">
              <Menu.Item key="BA1XAKTYjMJBzYbB1usSZXesj9FudygvJ4wSWSFMK6xV">NOBLE SIGNER | CONSO/USDC</Menu.Item>
              <Menu.Item key="5ovwY44rgJm1vYNmgAGnEjszhoULJqbCVrFiSS2a3T4c">NOBLE CLOAK | CONCC/USDC</Menu.Item>
              <Menu.Item key="Cgk6aeUfK78maSWdFLxdEW8BEsyGcvdLz7Cue6SjUk8J">REPLICATUR SHAWL | CORUS/USDC</Menu.Item>
              <Menu.Item key="GJtKxACMhWM9hNeX56RwNyCbE9Bet9zkRHDoLicLK9VK">ARMSTRONG PATCH | PCHAUP/USDC</Menu.Item>
              <Menu.Item key="6Y4bSkNwcugHzDc8eDSqDL9m15mQi9Mc8UncxVm5YZRX">VINTAGE ASTRONAUT SUIT | COVAS/USDC</Menu.Item>
              <Menu.Item key="7sEn3AMv5oHmbdXDXVfTTEthWEYdiaDWGAvkKcoygN7U">PHOTONIX PROVENANCE | FM-PP/USDC</Menu.Item>
              <Menu.Item key="EJ8MX3M4xsgAn8uZkLNyp76zAqn9uY18NtitASoYoRyS">TTT 300K ANIMOCA | FM-T3ANI/USDC</Menu.Item>
              <Menu.Item key="45SyRzGWW2cr3Y3637xzRh3Hr4KciMheQUpRphkcLoAX">TTT 300K FTX | FM-T3FTX/USDC</Menu.Item>
              <Menu.Item key="ErC5ux4t4UA437h22GpYMEZEDjAUvx2m6aQJ4Fzjcc5n">TTT 300K SERUM  | FM-T3SR/USDC</Menu.Item>
              <Menu.Item key="7PFvfkQip26mzD5gvipjNLqpyzFyR8qvrndF7u1jFfaq">NXT LE]V[EL DS BODYSUIT  | FM-NLDB/USDC</Menu.Item>
              <Menu.Item key="52HCo9MRuEj6sKRS9Me2UriCQvaeL4CQe7DkBSm1bW7K">COSMIC ORIGIN 92 | FM-CO92/USDC</Menu.Item>
              <Menu.Item key="HSJ8Jv8MsxxQrdspBtT4tQvTrerAynmCxSokBK7YC9UR">TTT 300K CRYPTOKICKERS | FM-T3CK/USDC</Menu.Item>
              <Menu.Item key="3KYW1LYzfZfBupRcuS7KjH84jCWdX1s42xvvDF3keGn2">TTT 300K RAYDIUM | FM-T3RAY/USDC</Menu.Item>
              <Menu.Item key="C5UdbBXYyeDFPcNjw9zQkcWadzP6tgKoCp7YxhqGcJp1">TTT 300K ATLAS | FM-T3ATL/USDC</Menu.Item>
              <Menu.Item key="98238GZrjECJDpowVCn1EaYtJpR7o5HMszevTFD7brEp">TTT 300K SOLANA  | FM-T3SOL/USDC</Menu.Item>
              <Menu.Item key="GCsYJjV1BYtiaGyjFgkadutaNKYYDPDP8anP95h2tbTc">TTT 300K STEP.FINANCE | FM-T3STEP/USDC</Menu.Item>
              <Menu.Item key="CL5ScWqMDcy1dvvPXE4XAcBdTYDc8x8F8www29K2xNeA">TTT 300K PHANTOM | FM-T3PH/USDC</Menu.Item>
              <Menu.Item key="FbxKfbcKaMkHhzP69kUYRYDLHqppgiGEWhxb5bbFQX8z">PRIMORDIAL GLO | FM-PLG/USDC</Menu.Item>
              <Menu.Item key="99g7oerCB6QUP8BKhuKZP3T4RnacUV3Tkbs1f4Q3i3Av">TTT 300K THE_FAB_RIC_ANT  | FM-T3FAB/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="CHARM">
              <Menu.Item key="GxJDcyN83nWmcsC5arPpsuB8NEts1n6zK6FTDtDw29z">VINTAGE ORBITING SATELLITE | CHMVOS/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="HUMAN">
              <Menu.Item key="4WckBAhK5YK78sZaYgiLAYZYgyhNkMN1JXkjRwWuyAg6">SAMMY BANX | CMHMSB/USDC</Menu.Item>
              <Menu.Item key="5QsRgRyvrhvePAtwBMZNPSmVwZR5vKkga3n31HxS4P3L">ANNA TOLLE | CMHFAT/USDC</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.SubMenu title="SHIP">
            <Menu.ItemGroup title="XX-SMALL">
              <Menu.Item key="EpqNSh1XWZiCzphHeKE2rqJAEcAtJE8KSBFxnNL4KPDy">PEARCE X4 | PX4/ATLAS</Menu.Item>
              <Menu.Item key="MTc1macY8G2v1MubFxDp4W8cooaSBUZvc2KqaCNwhQE">PEARCE X4 | PX4/USDC</Menu.Item>
              <Menu.Item key="46m5C7Vy9agesyoE6otKKgeosfzyi1zGcsp4hUvuTH17">OPAL JET | OPALJ/ATLAS</Menu.Item>
              <Menu.Item key="2z52mwzBPqA2jGf8jJhCQijHTJ1EUEscX5Mz718SBvmM">OPAL JET | OPALJ/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="X-SMALL">
              <Menu.Item key="GNk8Qwff4sHFXA15i5hVLPKWfVPjHsYRcjkUKhbZcD9R">PEARCE X5 | PX5/ATLAS</Menu.Item>
              <Menu.Item key="3ySaxSspDCsEM53zRTfpyr9s9yfq9yNpZFXSEbvbadLf">PEARCE X5 | PX5/USDC</Menu.Item>
              <Menu.Item key="4n8786v44qagL31kyF2VZMZkhoUQkAFpAUTn138wuQyi">OPAL JETJET | OPALJJ/ATLAS</Menu.Item>
              <Menu.Item key="2W6ff8LajAwekXVxDARGQ9QFNcRbxmJPE2p3eNsGR7Qu">OPAL JETJET | OPALJJ/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="MEDIUM">
              <Menu.Item key="G9sJTnHYcyrYkf83U55CCVUPg22pA3CMkZc7MED8uNiU">VZUS OPOD | VZUSOP/ATLAS</Menu.Item>
              <Menu.Item key="AT1AoPoFU8WZkW8AnpQsSpUDaRyymvLPvG7k2kGZSwZr">VZUS OPOD | VZUSOP/USDC</Menu.Item>
              <Menu.Item key="CXFcwgehrWq9hXDgt8CmdH9TdbQKnfZveif468ycWeyF">FIMBUL BYOS PACKLITE | FBLBPL/ATLAS</Menu.Item>
              <Menu.Item key="BeqGJwPnRb3fJwhSrfhzgUYKqegUtGtvXajTYzEpgGYr">FIMBUL BYOS PACKLITE | FBLBPL/USDC</Menu.Item>
              <Menu.Item key="8XcMzQptExWMNcuSEjhdyZuFgvi6zz4NS8toQj5fvPjB">CALICO COMPAKT HERO | CALCH/ATLAS</Menu.Item>
              <Menu.Item key="6ybME9qMbXgLs3PLWvEv8uyL2LWnUZUz7CYGE4m8kEFm">CALICO COMPAKT HERO | CALCH/USDC</Menu.Item>
              <Menu.Item key="75qZz971QvKyMMFFPSZfPD2gbgWtX1cTUYH7rfXiEYaC">PEARCE F4 | PF4/ATLAS</Menu.Item>
              <Menu.Item key="CWn74XJsh98zWVYWtzqn1dGuz96KFxb18pYQQfECuCzA">PEARCE F4 | PF4/USDC</Menu.Item>
              <Menu.Item key="8HgYiWUyQDfsK7ofXJD9Jw4a9t6GundiD8TWwdGbWEaH">RAINBOW OM | OM/ATLAS</Menu.Item>
              <Menu.Item key="9X9Ph3dWKKa59nAHPQiy5fEuGvjogKNK3gmKB8n5NVBW">RAINBOW OM | OM/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="LARGE">
              <Menu.Item key="9U7qvqLPC7zRRU1Hnrh1nSSjDD58ZhZmCCDHGfyTwN5c">OGRIKA THRIPID | OGKATP/ATLAS</Menu.Item>
              <Menu.Item key="2qU6MtkBS4NQhzx7FQyxS7qfsjU3ZdbLVyUFjea3KBV2">OGRIKA THRIPID | OGKATP/USDC</Menu.Item>
              <Menu.Item key="83bN7Y61dBqQwigHbLwvTCq2XDMb6aQ7pqgNmM9rNaV5">FIMBUL ECOS GREENADER | FBLEGR/ATLAS</Menu.Item>
              <Menu.Item key="9VvHp11hiCPQT2GMMVvmyWPTEzJ1Ey3kqAGA5VsxQwjB">FIMBUL ECOS GREENADER | FBLEGR/USDC</Menu.Item>
              <Menu.Item key="4nSVznRaTiQrX4rhVY5KnUC8HPNZh85RsaTbLQZznBMs">PEARCE R8 | PR8/ATLAS</Menu.Item>
              <Menu.Item key="33kdNLZCDHtnmp74NPXQ9KGSeJgSqLf1AdsQFkMR7bfp">PEARCE R8 | PR8/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="CAPITAL">
              <Menu.Item key="A8t1VCo6jChYc75882nK1wCc7PSxM2S898ek8sMH45aS">CALICO GUARDIAN | CALG/ATLAS</Menu.Item>
              <Menu.Item key="4TpCAobnJfGFRbZ8gAppS9aZBwEGG1k9tRVmx6FPUvUp">CALICO GUARDIAN | CALG/USDC</Menu.Item>
              <Menu.Item key="6SriSyRDGm8tS7f3njPeFEqSu88MsfFjSBzjMdodenqU">PEARCE C9 | PC9/ATLAS</Menu.Item>
              <Menu.Item key="DAYWM1QZLwBEqxQqE397jsRqML57NGkzTsuoQkQdZnus">PEARCE C9 | PC9/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="SMALL">
              <Menu.Item key="HcYLMMtf55i1X8pXkEppp6e8n8GKTeJHaGfXdh8AJnte">VZUS AMBWE | VZUSAM/ATLAS</Menu.Item>
              <Menu.Item key="8qyeFRyR5255UFTVtSrX9Qad6S4A8kaehc4wdizFDmJe">VZUS AMBWE | VZUSAM/USDC</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.SubMenu title="STRUCTURE">
            <Menu.ItemGroup title="STAKE">
              <Menu.Item key="A4MZ55qsrBTerqWHMa5o36RpAXycNnoZKbQ4y1fkg3SA">CLAIM STAKE TIER 1 | STAKE1/USDC</Menu.Item>
              <Menu.Item key="4m18ExgKckX8eVty96yX7rfUtXs8AZN31iM6mVKDRdBp">CLAIM STAKE TIER 2 | STAKE2/USDC</Menu.Item>
              <Menu.Item key="AwmsP69aHDU9ZqUhX98xo9oX1GWCyoNaDmrSCqyZd98k">CLAIM STAKE TIER 3 | STAKE3/USDC</Menu.Item>
              <Menu.Item key="Gu9ZNcmd6wTKuLh88dVM64WZ3EZT5T6DfbUvu1hpc8Ju">CLAIM STAKE TIER 4 | STAKE4/USDC</Menu.Item>
              <Menu.Item key="4AhBa7rJg1ryedTYyKdRmaFZMkotSEbjENRnAtBuaA3k">CLAIM STAKE TIER 5 | STAKE5/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="MINING EQUIPMENT">
              <Menu.Item key="G4E59tNgqkPYWWebTKoDFEpwwtrvG7MFdLku3XX4SvB9">POWER PLANT | MSPP1/USDC</Menu.Item>
              <Menu.Item key="ErFFAyjV9iHAVJcA9AeBHAZrHNNJnjWDiZR4LvvkfACK">MINING DRILL | MSD1/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="SPACE STATION STRUCTURE">
              <Menu.Item key="3BS6iuWRYW1HCHZP1ftcur1TLNiEEhfhxXkmYpn816W4">SPACE STATION | OSTD1/USDC</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.SubMenu title="ACCESS">
            <Menu.ItemGroup title="BADGE">
              <Menu.Item key="8vycGWEqhvnTJR4aTcN2TvtUUNtLXoCTrpCGtoD8R4bo">ATLAS BADGE | BGAT/USDC</Menu.Item>
              <Menu.Item key="6B7idqUbnCaUMdvzPdQkHpBR287xPk46q3afYMxvsa6M">PRINCIPAL'S BADGE | BGPR/USDC</Menu.Item>
              <Menu.Item key="3Dv3VmbzngyedBXcSgjxCVLS7w9giWHLzmCBmP2bQD6j">OFFICER'S BADGE | BGOF/USDC</Menu.Item>
              <Menu.Item key="DBtN3BJJc5TDs4psnnoiRV5LL8Kk4YM2xdZ6M3VzBH4V">SUPERIOR'S BADGE | BGSUP/USDC</Menu.Item>
              <Menu.Item key="uSnksnhQim5QN49PkpRHjSZmcbjHSJ1WiQHD7SJ6cWc">CAPTAIN'S BADGE | BGCPN/USDC</Menu.Item>
              <Menu.Item key="Fn5uYTGamghYcQfch6UbcSpj7VeMZukWmbLVNePnknvf">EXECUTIVE BADGE | BGEXE/USDC</Menu.Item>
              <Menu.Item key="3X7koctR3jYVh4XV9QKNtbT9gkqsGWMSpwHs6nHtd9sR">UNIQUE BADGE | BGUNQ/USDC</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="LICENSE">
              <Menu.Item key="CFJFbG6dWnh9Skr1UtH3UrqDRfngRDJQ4iBMuYsV2rp7">VIP | VIP/USDC</Menu.Item>
              <Menu.Item key="6unizr2gWwNVZgzSTCmD9ih6QBScGm9dkG1dy7oWTweb">FACTION META-PAS | MPAS/USDC</Menu.Item>
              <Menu.Item key="4Gg2WPaYbZNpy86tMhmw6w4CsiVupnNXwvbsLREMB5UQ">COUNCIL META-PAS | CMPAS/USDC</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>



          {connected && (!searchFocussed || location.pathname === '/balances') && (
            <Menu.Item key="/balances" style={{ margin: '0 10px' }}>
              BALANCES
            </Menu.Item>
          )}
          {connected && (!searchFocussed || location.pathname === '/orders') && (
            <Menu.Item key="/orders" style={{ margin: '0 10px' }}>
              ORDERS
            </Menu.Item>
          )}


        </Menu>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingRight: 5,
          }}
        >
          <AppSearch
            onFocus={() => setSearchFocussed(true)}
            onBlur={() => setSearchFocussed(false)}
            focussed={searchFocussed}
            width={searchFocussed ? '350px' : '35px'}
          />
        </div>
        <div>
          <Row
            align="middle"
            style={{ paddingLeft: 5, paddingRight: 5 }}
            gutter={16}
          >
            <Col>
              <PlusCircleOutlined
                style={{ color: '#99CCFF' }}
                onClick={() => setAddEndpointVisible(true)}
              />
            </Col>
            <Col>
              <Popover
                content={endpoint}
                placement="bottomRight"
                title="URL"
                trigger="hover"
              >
                <InfoCircleOutlined style={{ color: '#99CCFF' }} />
              </Popover>
            </Col>
            <Col>
              <Select
                onSelect={setEndpoint}
                value={endpoint}
                style={{ marginRight: 8, width: '150px' }}
              >
                {availableEndpoints.map(({ name, endpoint }) => (
                  <Select.Option value={endpoint} key={endpoint}>
                    {name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
        </div>
        {connected && (
          <div>
            <Popover
              content={<Settings autoApprove={wallet?.autoApprove} />}
              placement="bottomRight"
              title="Settings"
              trigger="click"
            >
              <Button style={{ marginRight: 8 }}>
                <SettingOutlined />
                Settings
              </Button>
            </Popover>
          </div>
        )}
        <div>
          <WalletConnect />
        </div>
      </Wrapper>
    </>
  );
}
