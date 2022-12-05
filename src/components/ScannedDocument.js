import React, { useState } from 'react';
import { View } from "react-native";
import { SegmentedButtons, Text } from "react-native-paper";

const ScannedDocument = ({ data, startNewScan }) => {
  const [value, setValue] = useState('');

  const handleValueChange = (value) => {
    if (value === 'close') startNewScan();
  }

  return (
    <View>
      <Text>{data}</Text>
      <SegmentedButtons value={value} onValueChange={handleValueChange} buttons={[
        {
          value: 'close',
          label: 'Mégse',
        },
        {
          value: 'accept',
          label: 'Megerősít'
        }
      ]}/>
    </View>
  )
};

export default ScannedDocument;
