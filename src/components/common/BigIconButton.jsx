import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';

const BigIconButton = ({
    icon,
    title,
    subtext,
    isFirstTime,
    link,
}) => {
    return (
        <Flex
            cursor={'pointer'}
            as={Button}
            position="relative"
            justify="center"
            align="center"
            w="full"
            h="6rem"
            py="0.75rem"
            px="1rem"
            border="2px solid"
            borderColor={'icon.border.50'}
            link={<Link href={`link`}></Link>}
            // onClick={() => onClick()}
        >
            {isFirstTime && (
                <Text
                    position={'absolute'}
                    px="0.5rem"
                    py="0.3rem"
                    background={'black'}
                    color={'white'}
                    top="-0.5rem"
                    left={'1rem'}
                    fontSize={'0.6rem'}
                    borderRadius={'full'}
                >
                    First Time?
                </Text>
            )}
            <Icon
                as={icon}
                boxSize={'3rem'}
                mr="1rem"
            />
            <Box
                w="60%"
                overflowWrap={'break-word'}
            >
                <Text fontSize={'1.5rem'}>{title}</Text>
                <Text
                    fontSize={'0.8rem'}
                    color="blackAlpha.700"
                    fontWeight={400}
                >
                    {subtext}
                </Text>
            </Box>
        </Flex>
    );
};

export default BigIconButton;
