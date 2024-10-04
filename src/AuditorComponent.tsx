import { Box, Heading, Text } from '@chakra-ui/react';

const AuditorComponent = () => {
    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Auditor Information</Heading>
            <Text mt={4}>
                This section contains relevant details for auditors, including financial reports, compliance guidelines, and audit tools.
            </Text>
        </Box>
    );
};

export default AuditorComponent;
