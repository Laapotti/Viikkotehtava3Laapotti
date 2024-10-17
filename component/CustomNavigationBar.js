import React from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

function CustomNavigationBar({ navigation, route, options, back }) {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('Second')}
        />
      )}
      <Appbar.Content title={title} />
      {!back && (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item
            onPress={() => {
                navigation.navigate('Second')
              console.log('Option 1 was pressed');
            }}
            title="Second"
          />
          <Menu.Item
            onPress={() => {
                navigation.navigate('Home')
              console.log('Option 2 was pressed');
            }}
            title="Home"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 3 was pressed');
            }}
            title="To be added never"
            disabled
          />
        </Menu>
      )}
    </Appbar.Header>
  );
}

export default CustomNavigationBar;
