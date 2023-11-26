import { useChain, useManager } from '@cosmos-kit/react';
import {
    Box,
    Center,
    Grid,
    GridItem,
    HStack,
    useColorModeValue,
  } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

import {
    Error,
    Connected,
    Connecting,
    Disconnected,
    NotExist,
    Rejected,
    WalletConnectComponent,
} from './wallet-connect';
import { ConnectedShowAddress, CopyAddressBtn } from './address-card';


import { chainName } from '@/config';

export const WalletSection = () => {
    const {
      connect,
      openView,
      status,
      username,
      address,
      message,
      wallet,
      chain: chainInfo,
    } = useChain(chainName);
    const { getChainLogo } = useManager();
  
    const chain = {
      chainName,
      label: chainInfo.pretty_name,
      value: chainName,
      icon: getChainLogo(chainName),
    };
  
    // Events
    const onClickConnect: MouseEventHandler = async (e) => {
      e.preventDefault();
      await connect();
    };
  
    const onClickOpenView: MouseEventHandler = (e) => {
      e.preventDefault();
      openView();
    };
  
    // Components
    const connectWalletButton = (
      <WalletConnectComponent
        walletStatus={status}
        disconnect={
          <Disconnected buttonText="Connect Wallet" onClick={onClickConnect} />
        }
        connecting={<Connecting />}
        connected={
          <Connected buttonText={'My Wallet'} onClick={onClickOpenView} />
        }
        rejected={<Rejected buttonText="Reconnect" onClick={onClickConnect} />}
        error={<Error buttonText="Change Wallet" onClick={onClickOpenView} />}
        notExist={
          <NotExist buttonText="Install Wallet" onClick={onClickOpenView} />
        }
      />
    );

    const addressBtn = (
      <CopyAddressBtn
        walletStatus={status}
        connected={<ConnectedShowAddress address={address} isLoading={false} />}
      />
    );
  
    return (
      <Center>
        <Grid
          w="full"
          maxW="sm"
          templateColumns="1fr"
          alignItems="center"
          justifyContent="center"
        >
          <GridItem>
            <HStack
              justifyContent="center"
              alignItems="center"
              borderRadius="lg"
            >
              {addressBtn}
              <Box w="full" maxW={{ base: 52, md: 64 }}>
                {connectWalletButton}
              </Box>
            </HStack>
          </GridItem>
        </Grid>
      </Center>
    );
  };