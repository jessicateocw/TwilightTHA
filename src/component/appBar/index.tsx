import Link from 'next/link';
import React from "react";
import { Flex, Box, Text, Center} from "@chakra-ui/react"
import { WalletSection } from './wallet';

const AppBar = ({...extraStyles}) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)
    return (
        <nav>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                mb={8}
                p={8}
                bg="#121332"
                {...extraStyles}>
                  
                    <Box>
                        <Text fontSize="lg" fontWeight="bold" color='white' px={4}>
                            Twilight
                        </Text>
                    </Box>
                    <WalletSection />
            </Flex>
        </nav>
    )
}

export default AppBar