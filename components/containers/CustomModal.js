import { Button, Paragraph, Dialog, Portal, Provider, List } from 'react-native-paper';
import React, { forwardRef, useImperativeHandle, useState } from 'react'

const CustomModal = forwardRef((props, ref) => {
  const [statusVisible, setStatus] = useState({});

  useImperativeHandle(ref, () => {
    return {
      show: (data) => setStatus({ data: data, status: true }),
      hide: () => setStatus({ status: false }),
    };
  });

  return (
    <Portal>
      <Dialog visible={statusVisible.status} onDismiss={() => setStatus({ status: false })}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <List.AccordionGroup>
            <List.Accordion title="Accordion 1" id="1">
              {
                statusVisible?.data?.map((val, index) => {
                  return <List.Item title={val} />
                })
              }
            </List.Accordion>
          </List.AccordionGroup>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setStatus({ status: false })}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
})

export default CustomModal