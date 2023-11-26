import { useForm } from 'react-hook-form'

import {
  Switch,
  Center,
  Container,
  Box,
  Divider,
  Flex,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Link
} from '@chakra-ui/react'

import { 
     ExternalLinkIcon 
} from '@chakra-ui/icons'
import { useChain } from "@cosmos-kit/react";
import { WalletStatus } from '@cosmos-kit/core';

import { Inputs } from '../types';
import HookForm from './form';

export default function Home() {
    const { status } = useChain("nyks");
    const notConnected = status !== WalletStatus.Connected;

    const basicBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: '50px',
        width: '150px',
        color: 'white',
        px: 4,
        my: 8,
        background: 'gray.800',
      }

  return (
    notConnected ? 
    <Center>
        <Alert
            status='warning'
            variant='solid'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            width='400px'
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                
                Welcome to Twilight
            </AlertTitle>
      
            <AlertDescription maxWidth='sm'>
                <Link href='https://www.keplr.app/download' isExternal>
                    Keplr Wallet Required ! <ExternalLinkIcon mx='2px' />
                </Link>
            </AlertDescription>
        </Alert>

    </Center>
    :
    <Container maxW="5xl" py={10}>
        <Flex alignItems='center'>
            <Box rounded='md' sx={basicBoxStyles}>
                <Box  p='6' display='flex' alignItems='baseline'>
                <Stack direction='row' h='60px' p={4}>
                    <Center
                        color='gray.200'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                    >
                    Cross
                    </Center>
                    <Divider orientation='vertical' />
                    <Center
                        color='gray.200'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        alignItems='center'
                    >
                    5.00x 
                    <span style={{paddingLeft: '5px', fontSize:'8px', opacity: '.5'}}>&#9658;</span>
                    </Center>
                </Stack>
                    
                </Box>
            </Box>
            <Box
             color='gray.200'
             fontWeight='semibold'
             letterSpacing='wide'
             fontSize='xs'
             alignItems='center'
             padding='8'
            >
                <span style={{paddingRight: '5px'}}>Open</span>
                <Switch id='leverage' colorScheme='brand'/>
            </Box>
            
        </Flex>
        <Tabs defaultIndex={0}>
        <TabList>
            <Tab>Limit</Tab>
            <Tab>Market</Tab>
            <Tab>Stop</Tab>
        </TabList>
        <TabPanels>
            <TabPanel><HookForm/></TabPanel>
            <TabPanel>Market Table</TabPanel>
            <TabPanel>Stop Losses</TabPanel>
        </TabPanels>
        </Tabs>
    
    </Container>
   
  )
}