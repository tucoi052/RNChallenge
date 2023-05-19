import {Button, Text} from '@components';
import React, {memo} from 'react';
import {useStyle} from './style';
import isEqual from 'react-fast-compare';

interface ItemNoteI {
  text: number;
}
const ItemComponent = ({text}: ItemNoteI) => {
  const styles = useStyle();
  return (
    <Button style={styles.item}>
      <Text>{text}</Text>
    </Button>
  );
};

export const ItemSeat = memo(ItemComponent, isEqual);
